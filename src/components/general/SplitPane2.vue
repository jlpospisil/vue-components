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
  }

  > .split-pane-splitter {
    background-color: $split-pane-splitter-color;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &.horizontal {
    flex-direction: column;

    > .split-pane-splitter {
      cursor: row-resize;
      height: $split-pane-splitter-thickness;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;

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
      width: $split-pane-splitter-thickness;

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
export default {
  name: 'SplitPane',
  props: {
    horizontal: { type: Boolean, default: false },
  },
  render(h) {
    const { horizontal, $slots } = this;
    const slots = $slots.default.filter(slot => slot.tag || slot.text.replace(' ', '') !== '');
    const splitter = h('div', { class: 'split-pane-splitter' });
    const paneAttributes = { class: 'split-pane-pane' };

    // Add splitter after each child
    const children = slots.reduce((c, slot) => c.concat(h('div', paneAttributes, [slot]), splitter), []);

    // Remove last splitter
    children.pop();

    // Render the SplitPane component
    return h('div', { class: `split-pane-wrapper ${horizontal ? 'horizontal' : 'vertical'}` }, children);
  },
};
</script>
