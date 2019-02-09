<template>
  <div>
    <input-label v-if="label">
      {{ label }}
    </input-label>

    <text-input-input
      v-model="inputValue"
      v-bind="inputProps"
      :min-length="forceUpdateInputValue ? 0 : 1"
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
      // Toggle this to force input value to update.  // TODO: find a better way
      // to force value to update when the getter is unchanged after formatting in setter
      forceUpdateInputValue: true,
    };
  },
  computed: {
    inputProps() {
      const { label, value, ...props } = this.$props;
      return props;
    },
    inputValue: {
      get() {
        let { rawValue: v } = this;
        v = v ? v.replace(/\D/g, '') : '';

        if (v.length > 0 && v.substr(0, 1) !== '1') {
          v = `1${v}`;
        }

        const { length } = v;

        // TODO: allow user to use backspace to delete numbers

        switch (true) {
            case (length >= 11):
              return `+${v.substr(0, 1)} (${v.substr(1, 3)}) ${v.substr(4, 3)}-${v.substr(7, 4)}`;
            case (length > 6):
              return `+${v.substr(0, 1)} (${v.substr(1, 3)}) ${v.substr(4, 3)}-${v.substr(7)}`;
            case (length > 3):
              return `+${v.substr(0, 1)} (${v.substr(1, 3)}) ${v.substr(4)}`;
            case (length > 1):
              return `+${v.substr(0, 1)} (${v.substr(1)}`;
            default:
              return v;
        }
      },
      set(rawValue) {
        // Update the value
        this.rawValue = rawValue;

        // Force the visible input value to be updated
        this.forceUpdateInputValue = !this.forceUpdateInputValue;

        // Emit the change
        let { inputValue } = this;
        inputValue = inputValue ? inputValue.replace(/\D/g, '') : null;
        this.$emit('input', inputValue);
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
