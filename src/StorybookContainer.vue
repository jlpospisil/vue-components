<template>
  <div class="storybook-container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.storybook-container {
  width: 400px;
  height: 400px;
  position: relative;
  border: 1px solid #ccc;
  overflow-y: auto;
}
</style>

<script>
export default {
  name: 'StorybookContainer',
};
</script>
