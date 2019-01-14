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
      class="radio"
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
  },
};
</script>
