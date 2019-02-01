<style lang="scss" scoped>
@import '../../scss/variables';

$splitter-handle-color: rgba(0, 0, 0, 0.3);
$splitter-handle-length: 15px;

.split-pane-wrapper {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;

  > .split-pane-pane {
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
    box-sizing: border-box;
    flex: 1 1 auto;
  }

  > .split-pane-splitter {
    background-color: $split-pane-splitter-color;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    outline: 1px solid darken($split-pane-splitter-color, 5%);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 3;
    }
  }

  &.horizontal {
    flex-direction: column;

    > .split-pane-splitter {
      cursor: row-resize;
      min-height: $split-pane-splitter-thickness;

      &::before {
        margin: -1 * $split-pane-splitter-cushion 0;
      }

      &::after {
        content: '';
        display: block;
        width: $splitter-handle-length;
        min-height: 4px;
        border-top: 1px solid $splitter-handle-color;
        border-bottom: 1px solid $splitter-handle-color;
      }
    }
  }

  &.vertical {
    > .split-pane-splitter {
      cursor: col-resize;
      min-width: $split-pane-splitter-thickness;

      &::before {
        margin: 0 -1 * $split-pane-splitter-cushion;
      }

      &::after {
        content: '';
        display: block;
        min-width: 4px;
        height: $splitter-handle-length;
        border-left: 1px solid $splitter-handle-color;
        border-right: 1px solid $splitter-handle-color;
      }
    }
  }
}
</style>

<script>
import { htmlElements } from '../../helpers';

const splitPaneWrapperClass = 'split-pane-wrapper';
const splitPanePaneClass = 'split-pane-pane';
const splitPaneSplitterClass = 'split-pane-splitter';

export default {
  name: 'SplitPane',
  props: {
    horizontal: { type: Boolean, default: false },
  },
  data() {
    return {
      selectedSplitter: null,
    };
  },
  computed: {
    paneToAdjust() {
      const { selectedSplitter } = this;
      return selectedSplitter ? selectedSplitter.previousSibling : null;
    },
    wrapperPosition() {
      const { wrapper } = this.$refs;
      return htmlElements.getPosition(wrapper);
    },
    wrapperSize() {
      const { wrapper } = this.$refs;
      return {
        height: wrapper.offsetHeight,
        width: wrapper.offsetWidth,
      };
    },
    selectedSplitterSize() {
      const { selectedSplitter } = this;
      const size = htmlElements.getSize(selectedSplitter);
      return size || { height: 0, width: 0 };
    },
    previousSplitter() {
      const { selectedSplitter } = this;
      return htmlElements.getPreviousSibling(selectedSplitter, splitPaneSplitterClass);
    },
    previousSplitterPosition() {
      const { previousSplitter } = this;
      return htmlElements.getPosition(previousSplitter);
    },
    nextSplitter() {
      const { selectedSplitter } = this;
      return htmlElements.getNextSibling(selectedSplitter, splitPaneSplitterClass);
    },
  },
  mounted() {
    const { bindEvents } = this;
    bindEvents();
  },
  beforeDestroy() {
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
    document.removeEventListener('touchmove', this.onMouseMove);
    document.removeEventListener('touchend', this.onMouseUp);
  },
  methods: {
    bindEvents() {
      const { onMouseMove, onMouseUp } = this;

      // Add mouse event listeners
      // Passive: false to prevent scrolling while touch dragging.
      document.addEventListener('mousemove', onMouseMove, { passive: false });
      document.addEventListener('mouseup', onMouseUp);

      // Add touch event listeners if needed
      if ('touchstart' in window) {
        document.addEventListener('touchmove', onMouseMove, { passive: false });
        document.addEventListener('touchend', onMouseUp);
      }
    },
    onMouseDown(event) {
      this.selectedSplitter = event.target;

      const { horizontal } = this;

      // Adjust pane before previous splitter so it doesn't flex when this one is resized
      ['previous', 'next'].forEach((direction) => {
        const splitter = this[`${direction}Splitter`];

        if (splitter) {
          const paneToAdjust = htmlElements.getClosestSibling(splitter, splitPanePaneClass, direction);

          if (paneToAdjust) {
            const paneToAdjustSize = htmlElements.getSize(paneToAdjust);

            if (paneToAdjustSize) {
              if (horizontal) {
                paneToAdjust.style.height = `${paneToAdjustSize.height}px`;
                paneToAdjust.style.minHeight = `${paneToAdjustSize.height}px`;
              } else {
                paneToAdjust.style.width = `${paneToAdjustSize.width}px`;
                paneToAdjust.style.minWidth = `${paneToAdjustSize.width}px`;
              }

              // Remove flexGrow property so new height/width is respected
              paneToAdjust.flexGrow = 0;
            }
          }
        }
      });
    },
    onMouseUp() {
      this.selectedSplitter = null;
    },
    onMouseMove(event) {
      const { selectedSplitter, updatePreviousPaneSize } = this;

      if (!selectedSplitter) {
        return;
      }

      // Prevent scrolling
      event.preventDefault();

      // Adjust child sizes appropriately
      updatePreviousPaneSize(event);
    },
    updatePreviousPaneSize(event) {
      const {
        horizontal, wrapperPosition, wrapperSize, selectedSplitterSize, paneToAdjust,
        previousSplitter, previousSplitterPosition,
      } = this;

      if (paneToAdjust) {
        const referenceElementPosition = previousSplitter
          ? previousSplitterPosition
          : wrapperPosition;
        const maxSize = {
          height: wrapperSize.height - selectedSplitterSize.height,
          width: wrapperSize.width - selectedSplitterSize.width,
        };

        if (horizontal) {
          // Get y-coordinate of pointer relative to container and adjust height accordingly
          const pointerRelativeYpos = event.clientY - referenceElementPosition.top;
          const height = Math.min(Math.max(pointerRelativeYpos, 0), maxSize.height);

          // Not sure why, but only worked with both set
          paneToAdjust.style.height = `${height}px`;
          paneToAdjust.style.minHeight = `${height}px`;
        } else {
          // Get x-coordinate of pointer relative to container and adjust width accordingly
          const pointerRelativeXpos = event.clientX - referenceElementPosition.left;
          const width = Math.min(Math.max(pointerRelativeXpos, 0), maxSize.width);

          // Not sure why, but only worked with both set
          paneToAdjust.style.width = `${width}px`;
          paneToAdjust.style.minWidth = `${width}px`;
        }

        // Remove flexGrow property so new height/width is respected
        paneToAdjust.flexGrow = 0;
      }
    },
  },
  render(h) {
    const { horizontal, $slots, onMouseDown } = this;
    const slots = $slots.default.filter(slot => slot.tag || slot.text.replace(' ', '') !== '');
    const paneAttributes = { class: splitPanePaneClass };
    const splitterEventListeners = { mousedown: onMouseDown };

    // Add touch event listeners if needed
    if ('touchstart' in window) {
      splitterEventListeners.touchstart = onMouseDown;
    }

    // Create splitter vnode
    const splitter = h('div', { class: splitPaneSplitterClass, on: splitterEventListeners });

    // Add splitter after each child
    const children = slots.reduce((c, slot) => c.concat(h('div', paneAttributes, [slot]), splitter), []);

    // Remove last splitter
    children.pop();

    // Render the SplitPane component
    return h('div', { class: `${splitPaneWrapperClass} ${horizontal ? 'horizontal' : 'vertical'}`, ref: 'wrapper' }, children);
  },
};
</script>
