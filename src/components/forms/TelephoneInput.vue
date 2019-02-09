<template>
  <div>
    <input-label v-if="label">
      {{ label }}
    </input-label>

    <text-input-input
      v-bind="inputProps"
      v-model="inputValue"
      class="form-control"
      type="tel"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
      @select="$emit('select', $event)"
      @click="$emit('click', $event)"
    />
  </div>
</template>

<style lang="scss">
    /* stylelint-disable-next-line no-empty-source error */
</style>

<script>
import Vue from 'vue';
import TextInputInput from './TextInputInput.vue';
import InputLabel from './InputLabel.vue';

// Destructure to remove unwanted properties
const {
  min, minLength, max, maxLength, size, type, pattern, ...textInputProps
} = TextInputInput.props;

export default {
  name: 'TelephoneInput',
  components: {
    InputLabel,
    TextInputInput,
  },
  props: {
    ...textInputProps,
    label: { type: String, default: null },
    value: { type: [String, Number], default: null },
  },
  data() {
    return {
      rawValue: null,
    };
  },
  computed: {
    inputProps() {
      const { label, value, ...props } = this.$props;
      return props;
    },
    inputValue: {
      get() {
        const { rawValue } = this;

        // TODO: format the value
        console.log({ formattedValue: rawValue });

        // TODO: why doesn't this get relayed to the input value everytime?

        return rawValue;
      },
      set(newValue) {
        const rawValue = newValue.replace(/\D/g, '');
        this.rawValue = rawValue;
        this.$emit('input', rawValue);
        console.log({ newValue, rawValue });
      },
    },
  },
  created() {
    const { rawValue } = this;
    const { value } = this.$props;

    if (value !== rawValue) {
      Vue.set(this, 'inputValue', value);
    }
  },
};
</script>
