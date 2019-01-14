<template>
  <div
    class="radio-group"
    :class="{ 'stacked-radio-group': stacked }"
  >
    <radio
      v-for="(option, optionIndex) in options"
      :key="`r${optionIndex}`"
      :label="option"
      :checked="selected === option"
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
    selected: { type: String, default: null },
    stacked: { type: Boolean, default: false },
    size: { type: Number, default: null },
    color: { type: String, default: null },
  },
  methods: {
    radioClicked(option) {
      const { selected } = this;

      if (option !== selected) {
        this.$emit('change', option);
      }
    },
  },
};
</script>
