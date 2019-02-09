<template>
  <div
    class="radio-group"
    :class="{ 'stacked-radio-group': stacked }"
  >
    <input
      type="hidden"
      :name="name"
      :value="value"
      v-if="name"
    />

    <input-label v-if="label">
      {{ label }}
    </input-label>

    <div class="radio-group-radios">
      <radio
        v-for="(option, optionIndex) in options"
        :key="`r${optionIndex}`"
        :label="option"
        :checked="value === option"
        :size="size"
        :color="color"
        @click="radioClicked(option)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.radio-group {
  &.stacked-radio-group {
    .radio {
      display: flex;
      align-items: baseline;
    }
  }

  &:not(.stacked-radio-group) {
    .radio:not(:first-child) {
      margin-left: 1rem;
    }
  }
}
</style>

<script>
import Radio from './Radio.vue';
import InputLabel from './InputLabel.vue';

export default {
  name: 'RadioGroup',
  components: {
    InputLabel,
    Radio,
  },
  props: {
    color: { type: String, default: null },
    label: { type: String, default: null },
    name: { type: String, default: null },
    options: { type: Array, default: () => [] },
    size: { type: Number, default: null },
    stacked: { type: Boolean, default: false },
    value: { type: String, default: null },
  },
  methods: {
    radioClicked(option) {
      const { value } = this;

      if (option !== value) {
        this.$emit('input', option);
      }
    },
  },
};
</script>
