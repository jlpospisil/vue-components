<template>
  <li
    class="nav-item"
    :class="{ active }"
    @click="$emit('click')"
  >
    <component
      :is="linkType"
      class="nav-link"
      v-bind="linkProps"
    >
      <slot />
    </component>
  </li>
</template>

<style lang="scss" scoped>
  @import '../../scss/variables';

  .nav-item {
    .nav-link {
      color: $top-nav-font-color;
      border-bottom: 5px solid transparent;

      &:hover,
      &:focus {
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
    active: { type: Boolean, default: false },
    routerLink: { type: Boolean, default: false },
    to: { type: String, default: '#' },
  },
  computed: {
    linkType() {
      const { routerLink } = this;
      return routerLink ? 'router-link' : 'a';
    },
    linkProps() {
      const { routerLink, to } = this;
      return {
        [routerLink ? 'to' : 'href']: to,
      };
    },
  },
};
</script>
