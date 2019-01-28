<template>
  <div
    v-show="loading"
    class="app-loading-overlay"
    :class="{
      'left-side-nav-open': leftSideNavOpen,
      'right-side-nav-open': rightSideNavOpen,
    }"
  >
    <stretch
      class="app-loading-spinner"
      :background="spinnerColor"
    />
  </div>
</template>

<style lang="scss">
@import '../../scss/variables';
@import '~bootstrap/scss/bootstrap';

.app-loading-overlay {
  z-index: 1100;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: $loading-overlay-bg-color;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition:
    padding-left $side-nav-transition-duration $side-nav-transition-function,
    padding-right $side-nav-transition-duration $side-nav-transition-function;

  .app-loading-spinner {
    .rect {
      background-color: map-get($theme-colors, primary);
    }
  }
}

/* stylelint-disable-next-line at-rule-no-unknown */
@include media-breakpoint-up(sm) {
  .app-loading-overlay {
    &.left-side-nav-open {
      padding-left: $side-nav-width;
    }

    &.right-side-nav-open {
      padding-right: $side-nav-width;
    }
  }
}
</style>

<script>
import { Stretch } from 'vue-loading-spinner';
// import theme from '../../theme';

export default {
  components: {
    Stretch,
  },
  props: {
    loading: { type: Boolean, default: false },
    leftSideNavOpen: { type: Boolean, default: false },
    rightSideNavOpen: { type: Boolean, default: false },
    spinnerColor: { type: String, default: null },
  },
};
</script>
