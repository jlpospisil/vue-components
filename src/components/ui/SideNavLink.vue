<template>
  <div class="side-nav-link" @click="$emit('click')">
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
  white-space: nowrap;
  color: $side-nav-font-color;
  position: relative;

  &:hover, &:focus {
    background-color: $side-nav-hover-bg-color;
  }

  a {
    padding: 5px 15px 5px 25px;
    display: block;
    color: $side-nav-font-color;

    i {
      margin-right: 10px;
    }

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
