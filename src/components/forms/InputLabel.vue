<template>
  <label class="input-label">
    <slot />
  </label>
</template>

<style lang="scss" scoped>
.input-label {
  font-weight: 500;
}
</style>

<script>
export default {
  name: 'TextInputLabel',
};
</script>
