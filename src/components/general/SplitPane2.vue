<style lang="scss" scoped>
@import '../../scss/variables';

$splitter-handle-color: rgba(0, 0, 0, 0.3);
$splitter-handle-length: 15px;

.split-pane-wrapper {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;

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
      previousMousePosition: null,
    };
  },
  computed: {
    previousPane() {
      const { selectedSplitter } = this;
      return selectedSplitter ? selectedSplitter.previousSibling : null;
    },
    nextPane() {
      const { selectedSplitter } = this;
      return selectedSplitter ? selectedSplitter.nextSibling : null;
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
    const { bindEvents, initializePanes } = this;
    bindEvents();
    initializePanes();
  },
  beforeDestroy() {
    const { wrapper } = this.$refs;
    wrapper.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
    wrapper.removeEventListener('touchmove', this.onMouseMove);
    document.removeEventListener('touchend', this.onMouseUp);
  },
  methods: {
    bindEvents() {
      const { onMouseMove, onMouseUp } = this;
      const { wrapper } = this.$refs;

      // Add mouse event listeners
      // Passive: false to prevent scrolling while touch dragging.
      wrapper.addEventListener('mousemove', onMouseMove, { passive: false });
      document.addEventListener('mouseup', onMouseUp);

      // Add touch event listeners if needed
      if ('touchstart' in window) {
        wrapper.addEventListener('touchmove', onMouseMove, { passive: false });
        document.addEventListener('touchend', onMouseUp);
      }
    },
    initializePanes() {
      const { panes } = this.$refs;
      const { horizontal } = this;

      panes.forEach((paneEl) => {
        const pane = paneEl;
        const paneSize = htmlElements.getSize(pane);

        if (paneSize) {
          if (horizontal) {
            pane.style.height = `${paneSize.height}px`;
            pane.style.minHeight = `${paneSize.height}px`;
          } else {
            pane.style.width = `${paneSize.width}px`;
            pane.style.minWidth = `${paneSize.width}px`;
          }

          // Remove flexGrow property so new height/width is respected
          // pane.style.backgroundColor = 'red';
          pane.flexGrow = 0;
        }
      });
    },
    updateMousePosition(event) {
      this.previousMousePosition = {
        x: event.clientX,
        y: event.clientY,
      };
    },
    onMouseDown(event) {
      const { updateMousePosition } = this;
      this.selectedSplitter = event.target;
      updateMousePosition(event);
    },
    onMouseUp() {
      this.selectedSplitter = null;
    },
    onMouseMove(event) {
      const { selectedSplitter, updatePaneSize, updateMousePosition } = this;

      if (!selectedSplitter) {
        return;
      }

      // Prevent scrolling
      event.preventDefault();

      // Adjust child sizes appropriately
      updatePaneSize(event);

      // Adjust previous mouse position
      updateMousePosition(event);
    },
    updatePaneSize(event) {
      // TODO: resize previousPan as well as nextPane to avoid pushing element out of container

      const {
        horizontal, wrapperPosition, wrapperSize, selectedSplitterSize, previousPane, nextPane,
        previousSplitter, previousSplitterPosition, previousMousePosition
      } = this;

      const currentMousePosition = {
        x: event.clientX,
        y: event.clientY,
      };

      const referenceElementPosition = previousSplitter
        ? previousSplitterPosition
        : wrapperPosition;
      const maxSize = {
        height: wrapperSize.height - selectedSplitterSize.height,
        width: wrapperSize.width - selectedSplitterSize.width,
      };

      if (horizontal) {
        const difference = currentMousePosition.y - previousMousePosition.y;

        const previousPaneHeight = previousPane.offsetHeight;
        const newPreviousPaneHeight = Math.min(previousPaneHeight + difference, maxSize.height);
        previousPane.style.height = `${newPreviousPaneHeight}px`;
        previousPane.style.minHeight = `${newPreviousPaneHeight}px`;

        const nextPaneHeight = nextPane.offsetHeight;
        const newNextPaneHeight = Math.min(nextPaneHeight - difference, maxSize.height);
        nextPane.style.height = `${newNextPaneHeight}px`;
        nextPane.style.minHeight = `${newNextPaneHeight}px`;
      } else {
        const difference = currentMousePosition.x - previousMousePosition.x;

        const previousPaneWidth = previousPane.offsetWidth;
        const newPreviousPaneHeight = Math.min(previousPaneWidth + difference, maxSize.width);
        previousPane.style.width = `${newPreviousPaneHeight}px`;
        previousPane.style.minWidth = `${newPreviousPaneHeight}px`;

        const nextPaneWidth = nextPane.offsetWidth;
        const newNextPaneWidth = Math.min(nextPaneWidth - difference, maxSize.width);
        nextPane.style.width = `${newNextPaneWidth}px`;
        nextPane.style.minWidth = `${newNextPaneWidth}px`;
      }

      if (previousPane) {
        // const referenceElementPosition = previousSplitter
        //   ? previousSplitterPosition
        //   : wrapperPosition;
        // const maxSize = {
        //   height: wrapperSize.height - selectedSplitterSize.height,
        //   width: wrapperSize.width - selectedSplitterSize.width,
        // };

        if (horizontal) {
          // Get y-coordinate of pointer relative to container and adjust height accordingly
          // const pointerRelativeYpos = event.clientY - referenceElementPosition.top;
          // const height = Math.min(Math.max(pointerRelativeYpos, 0), maxSize.height);
          //
          // // Not sure why, but only worked with both set
          // previousPane.style.height = `${height}px`;
          // previousPane.style.minHeight = `${height}px`;
        } else {
          // Get x-coordinate of pointer relative to container and adjust width accordingly
          const pointerRelativeXpos = event.clientX - referenceElementPosition.left;
          const width = Math.min(Math.max(pointerRelativeXpos, 0), maxSize.width);

          // Not sure why, but only worked with both set
          previousPane.style.width = `${width}px`;
          previousPane.style.minWidth = `${width}px`;
        }

        // Remove flexGrow property so new height/width is respected
        previousPane.flexGrow = 0;
      }
    },
  },
  render(h) {
    const { horizontal, $slots, onMouseDown } = this;
    const slots = $slots.default.filter(slot => slot.tag || slot.text.replace(' ', '') !== '');
    const paneAttributes = { class: splitPanePaneClass, ref: 'panes', refInFor: true };
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
