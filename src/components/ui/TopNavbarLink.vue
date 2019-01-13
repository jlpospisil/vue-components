<template>
  <li class="nav-item" :class="{ active }">
    <a class="nav-link" :href="to">
      <slot />
    </a>
  </li>
</template>

<style lang="scss" scoped>

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
