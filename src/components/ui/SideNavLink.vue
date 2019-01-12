<template>
  <a
    :href="to"
    class="side-nav-link"
  >
    <slot />
    <icon
      v-if="icon"
      :type="icon.type"
      :name="icon.name"
      :color="icon.color"
    />
    {{ label }}
  </a>
</template>

<style lang="scss" scoped>
@import '../../scss/variables';

.side-nav-link {
  padding: 5px 15px;
  white-space: nowrap;
  color: $side-nav-font-color;
  width: $side-nav-width;
  position: relative;
  display: block;

  &:hover, &:focus {
    text-decoration: none;
    color: darken($side-nav-font-color, 15%);
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
