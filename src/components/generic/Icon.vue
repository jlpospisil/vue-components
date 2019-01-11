<template>
  <i
    :class="iconClass"
    :style="{ fontSize: `${size}em`, color }"
    @click="$emit('click')"
  />
</template>

<style lang="scss">
 $fa-font-path: "~@fortawesome/fontawesome-free/webfonts";
@import "~@fortawesome/fontawesome-free/scss/fontawesome";
@import "~@fortawesome/fontawesome-free/scss/regular";
@import "~@fortawesome/fontawesome-free/scss/solid";
@import "~@fortawesome/fontawesome-free/scss/brands";
</style>

<script>
export default {
  props: {
    type: { type: String, required: false, default: 'free' },
    name: { type: String, required: true },
    color: { type: String, required: false, default: null },
    size: { type: Number, required: false, default: 1 },
  },
  computed: {
    iconType() {
      const { type } = this;
      switch (type.toLowerCase()) {
          case 'regular':
          case 'far':
            return 'far';

          case 'solid':
          case 'fas':
            return 'fas';

          case 'light':
          case 'fal':
            return 'fal';

          case 'brand':
          case 'fab':
            return 'fab';

          default:
            return 'fa';
      }
    },
    iconClass() {
      const { name, iconType } = this;
      return `${iconType} fa-fw ${name}`;
    },
  },
};
</script>
