<template>
  <nav
    class="navbar navbar-light bg-light"
    :class="expandClass"
  >
    <a
      v-if="$slots.brand"
      class="navbar-brand"
      href="#"
    >
      <slot name="brand" />
    </a>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target=".top-navbar-links"
      aria-controls="top-navbar-links"
      aria-expanded="false"
      aria-label="Toggle navigation links"
    >
      <icon
        type="solid"
        name="fa-bars"
      />
    </button>

    <div class="collapse navbar-collapse top-navbar-links">
      <ul
        v-if="$slots.leftLinks"
        class="navbar-nav mr-auto"
      >
        <slot name="leftLinks" />
      </ul>

      <ul
        v-if="$slots.rightLinks"
        class="navbar-nav ml-auto"
      >
        <slot name="rightLinks" />
      </ul>

      <slot />
    </div>
  </nav>
</template>

<style lang="scss" scoped>

</style>

<script>
import { Icon } from '../generic';

export default {
  name: 'TopNavbar',
  components: {
    Icon,
  },
  props: {
    collapseAt: { type: String, default: 'sm' },
  },
  computed: {
    expandClass() {
      const { collapseAt } = this;
      return `navbar-expand-${collapseAt.toLowerCase()}`;
    },
  },
};
</script>
