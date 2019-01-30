<style lang="scss" scoped>
@import '../../scss/variables';

$splitter-handle-color: rgba(0, 0, 0, 0.3);
$splitter-handle-length: 15px;

.splitpanes {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;

  .splitpanes__pane {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .splitpanes__splitter {
    background-color: $split-pane-splitter-color;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &.splitpanes--horizontal {
    flex-direction: column;

    > .splitpanes__splitter {
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

  &.splitpanes--vertical {
    > .splitpanes__splitter {
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
import SplitPane from 'splitpanes';

export default {
  extends: SplitPane,
  props: SplitPane.props,
};
</script>
