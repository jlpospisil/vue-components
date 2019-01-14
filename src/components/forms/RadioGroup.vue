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
</template>

<style lang="scss" scoped>
.radio-group {
  &.stacked-radio-group {
    .radio {
      display: block;
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

export default {
  name: 'RadioGroup',
  components: {
    Radio,
  },
  props: {
    options: { type: Array, default: () => [] },
    stacked: { type: Boolean, default: false },
    size: { type: Number, default: null },
    color: { type: String, default: null },
    value: { type: String, default: null },
    name: { type: String, default: null },
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
