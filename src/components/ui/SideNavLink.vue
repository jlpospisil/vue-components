<template>
  <div class="side-nav-link">
    <a :href="to">
      <slot />
      <icon
        v-if="icon"
        :type="icon.type"
        :name="icon.name"
        :color="icon.color"
      />
      {{ label }}
    </a>
  </div>
</template>

<style lang="scss" scoped>
@import '../../scss/variables';

.side-nav-link {
  width: $side-nav-width;
  white-space: nowrap;
  color: $side-nav-font-color;
  position: relative;

  a {
    padding: 5px 15px;
    display: block;
    color: $side-nav-font-color;

    &:hover, &:focus {
      text-decoration: none;
      color: darken($side-nav-font-color, 15%);
    }
  }
}
</style>

<script>
import { Icon } from '../generic';

export default {
  name: 'SideNavLink',
  components: {
    Icon,
  },
  props: {
    to: { type: String, default: '#' },
    icon: { type: Object, default: () => {} },
    label: { type: String, default: null },
  },
};
</script>
