<template>
  <div class="side-nav-header">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import '../../scss/variables';

.side-nav-header {
  padding: 5px 15px;
  color: darken($side-nav-font-color, 20%);
  font-weight: bold;
  white-space: nowrap;
  width: $side-nav-width;
}
</style>

<script>
export default {
  name: 'SideNavHeader',
  props: {
    to: { type: String, default: '#' },
  },
};
</script>
