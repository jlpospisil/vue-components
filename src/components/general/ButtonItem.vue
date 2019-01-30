<template>
  <button
    :class="button_class"
    type="button"
    class="btn font-weight-bold"
    @click="$emit('click')">
    <icon
      v-if="icon"
      :type="icon_type"
      :name="icon"/>
    <span v-if="text">{{ text }}</span>
  </button>
</template>

<style lang="scss">
/* stylelint-disable-next-line no-empty-source error */
</style>

<script>
import Icon from './Icon.vue';

export default {
  name: 'ButtonItem',
  components: {
    Icon,
  },
  props: {
    type: { type: String, required: false, default: 'primary' },
    text: { type: String, required: false, default: null },
    icon_type: { type: String, required: false, default: 'regular' },
    icon: { type: String, required: false, default: null },
  },
  computed: {
    button_class() {
      const { type } = this;

      if (type.toLowerCase() === 'text') {
        return 'bg-transparent text-info p-0';
      } if (!type.startsWith('btn-')) {
        return `btn-${type}`;
      }

      return type;
    },
  },
};
</script>
