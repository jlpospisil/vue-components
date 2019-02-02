<style lang="scss" scoped>
@import '../../scss/variables';

$splitter-handle-color: rgba(0, 0, 0, 0.3);
$splitter-handle-length: 15px;

.splitpanes {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;

  > .splitpanes__pane {
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
    box-sizing: border-box;
    flex: 1 1 auto;
  }

  > .splitpanes__splitter {
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

  &.splitpanes--horizontal {
    flex-direction: column;

    > .splitpanes__splitter {
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

  &.splitpanes--vertical {
    > .splitpanes__splitter {
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
import SplitPane from 'splitpanes';

export default {
  extends: SplitPane,
  props: SplitPane.props,
};
</script>
