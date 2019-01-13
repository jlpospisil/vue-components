<template>
  <div class="side-nav-header">
    <div>
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../scss/variables';

.side-nav-header {
  color: darken($side-nav-font-color, 20%);
  font-weight: bold;
  white-space: nowrap;
  position: relative;

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
