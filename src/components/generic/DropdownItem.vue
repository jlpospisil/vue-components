<template>
  <a class="dropdown-item" :href="url" @click="$emit('click')">
    <slot />
  </a>
</template>

<style lang="scss" scoped>

</style>

<script>
export default {
  name: 'DropdownItem',
  props: {
    url: { type: String, default: '#' },
  },
};
</script>
