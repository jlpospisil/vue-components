<template>
  <nav
    class="side-nav"
    :class="{ 'is-open': open }"
  >
    <div class="side-nav-header">
      <slot name="header" />
    </div>

    <div class="side-nav-content">
      <slot name="content" />

      <slot />
    </div>

    <div class="side-nav-footer">
      <slot name="footer" />
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import '../../scss/variables';

.side-nav {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  font-size: $side-nav-font-size;
  background-color: $side-nav-bg-color;
  color: $side-nav-font-color;
  z-index: 1050;    // Make sure it covers top navbar
  width: 0;
  transition: width $side-nav-transition-duration $side-nav-transition-function;

  .side-nav-header, .side-nav-content, .side-nav-footer {
    width: $side-nav-width;
    transition: width $side-nav-transition-duration $side-nav-transition-function;
    white-space: nowrap;
    overflow-x: hidden;
  }

  .side-nav-header {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 75px;
    box-shadow: 0 8px 10px -10px lighten($side-nav-bg-color, 25%);
  }

  .side-nav-content {
    flex: 1;
    overflow-y: auto;
  }

  .side-nav-footer {
    padding: 10px 5px 5px;
  }

  &:not(.is-open) {
    .side-nav-header, .side-nav-content, .side-nav-footer {
      width: 0 !important;
      overflow-x: hidden;
    }
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    transition: left $side-nav-transition-duration $side-nav-transition-function;
  }

  &.is-open {
    width: $side-nav-width;

    &:after {
      left: $side-nav-width;
      width: 15px;
      box-shadow: 15px 0 15px -15px $box-shadow-color inset;
    }
  }
}
</style>

<script>
export default {
  name: 'SideNav',
  props: {
    open: { type: Boolean, default: true },
  },
};
</script>
