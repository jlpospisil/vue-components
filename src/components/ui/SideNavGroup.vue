<template>
  <ul class="side-nav-group">
    <slot />
  </ul>
</template>

<style lang="scss" scoped>
.side-nav-group {
  padding: 15px 0 0;
}
</style>

<script>
export default {
  name: 'SideNavGroup',
};
</script>
