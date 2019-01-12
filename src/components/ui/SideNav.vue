<template>
  <nav
    class="side-nav"
    :class="{ 'is-open': open }"
  >
    <div class="side-nav-link">1</div>
    <div style="flex: 1"></div>
    <div class="side-nav-link">2</div>
    <slot />
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
  padding: $top-nav-height 0 0 0;
  font-size: $side-nav-font-size;
  background-color: $side-nav-bg-color;
  z-index: 899;

  .side-nav-link {
    width: 0;
    white-space: nowrap;
    transition: width $side-nav-transition-duration $side-nav-transition-function;
    color: $side-nav-font-color
  }

  &.is-open {
    &:after {
      content: " ";
      position: absolute;
      top: 0;
      bottom: 0;
      left: $side-nav-width;
      width: 15px;
      box-shadow: 15px 0 15px -15px $box-shadow-color inset;
    }

    .side-nav-link {
      width: $side-nav-width;
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
