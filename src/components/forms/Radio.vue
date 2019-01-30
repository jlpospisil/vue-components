<template>
  <span class="radio" @click="$emit('click')">
    <label v-if="labelText && labelPosition === 'left'">
      {{ labelText }}
    </label>
    <icon
      v-if="checked"
      :color="color"
      type="solid"
      name="fa-check-circle"
      :size="size"
    />
    <icon
      v-else
      :color="color"
      type="regular"
      name="fa-circle"
      :size="size"
    />
    <label v-if="labelText && labelPosition === 'right'">
      {{ labelText }}
    </label>
  </span>
</template>

<style lang="scss" scoped>
.radio {
  cursor: default;
}
</style>

<script>
import Icon from '../general/Icon.vue';

export default {
  name: 'Radio',
  components: {
    Icon,
  },
  props: {
    checked: { type: Boolean, required: true },
    size: { type: Number, required: false, default: 1.25 },
    color: { type: String, required: false, default: null },
    label: { type: [String, Object], required: false, default: null },
  },
  computed: {
    labelText() {
      const { label } = this;

      if (label && typeof label === 'object') {
        return label.text;
      }

      return label;
    },
    labelPosition() {
      const { label } = this;

      if (typeof label === 'object') {
        const { position } = label;
        return position && position.toLowerCase() === 'left' ? 'left' : 'right';
      }

      return 'right';
    },
  },
};
</script>
