<template>
  <span class="checkbox" @click="checkboxClicked">
    <label v-if="labelText && labelPosition === 'left'">
      {{ labelText }}
    </label>

    <input
      type="checkbox"
      :name="name"
      :checked="isChecked"
      v-show="false"
      v-if="name"
    />

    <icon
      v-if="isChecked"
      :color="color"
      type="solid"
      name="fa-check-square"
      :size="size"
    />

    <icon
      v-else
      :color="color"
      type="regular"
      name="fa-square"
      :size="size"
    />

    <label v-if="labelText && labelPosition === 'right'">
      {{ labelText }}
    </label>
  </span>
</template>

<style lang="scss" scoped>
.checkbox {
  cursor: default;
}
</style>
<script>
import Icon from '../general/Icon.vue';

export default {
  name: 'CheckBox',
  components: {
    Icon,
  },
  props: {
    checked: { type: Boolean, default: null },
    color: { type: String, default: null },
    label: { type: [String, Object], default: null },
    name: { type: String, default: null },
    size: { type: Number, default: 1.25 },
    value: { type: Boolean, default: null },
  },
  computed: {
    isChecked() {
      const { checked, value } = this;
      return typeof value === 'boolean' ? value : checked;
    },
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
  methods: {
    checkboxClicked() {
      const { isChecked } = this;
      this.$emit('click');
      this.$emit('input', !isChecked);
    },
  },
};
</script>
