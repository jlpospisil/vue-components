<template>
  <div
    class="application-content"
    :class="{
      'left-side-nav-open': leftSideNavOpen,
      'right-side-nav-open': rightSideNavOpen,
      'has-top-nav': topNav,
    }"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import '../../scss/variables';
@import '~bootstrap/scss/bootstrap';

.application-content {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: $app-content-padding;
  transition:
    padding-left $side-nav-transition-duration $side-nav-transition-function,
    padding-right $side-nav-transition-duration $side-nav-transition-function;

  &.has-top-nav {
    padding-top: $top-nav-height + $app-content-padding;
  }
}

/* stylelint-disable-next-line at-rule-no-unknown */
@include media-breakpoint-up(sm) {
  .application-content {
    &.left-side-nav-open {
      padding-left: $side-nav-width + $app-content-padding;
    }

    &.right-side-nav-open {
      padding-right: $side-nav-width + $app-content-padding;
    }
  }
}
</style>

<script>
export default {
  name: 'ApplicationContent',
  props: {
    leftSideNavOpen: { type: Boolean, default: false },
    rightSideNavOpen: { type: Boolean, default: false },
    topNav: { type: Boolean, default: true },
  },
};
</script>
