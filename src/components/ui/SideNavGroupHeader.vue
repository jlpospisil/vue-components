<template>
  <h4 class="side-nav-group-header">
    <div>
      <slot />
    </div>
  </h4>
</template>

<style lang="scss" scoped>
@import '../../scss/variables';

.side-nav-group-header {
  color: darken($side-nav-font-color, 20%);
  font-weight: bold;
  white-space: nowrap;
  position: relative;
  font-size: 1rem;
  text-transform: uppercase;

  > div {
    padding: 5px 15px;
  }
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
