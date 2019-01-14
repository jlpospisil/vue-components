<template>
  <li class="nav-item" :class="{ active }" @click="$emit('click')">
    <a class="nav-link" :href="to">
      <slot />
    </a>
  </li>
</template>

<style lang="scss" scoped>
  @import '../../scss/variables';

  .nav-item {
    .nav-link {
      color: $top-nav-font-color;
      border-bottom: 5px solid transparent;

      &:hover, &:focus {
        color: darken($top-nav-font-color, 15%);
      }
    }

    &.active {
      .nav-link {
        color: $top-nav-active-font-color;
        border-bottom-color: darken($top-nav-active-font-color, 10%);
      }
    }
  }
</style>

<script>
export default {
  name: 'TopNavbarLink',
  props: {
    to: { type: String, default: '#' },
    active: { type: Boolean, default: false },
  },
};
</script>
