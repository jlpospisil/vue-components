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
  name: 'SsnInput',
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

        const { length } = v;

        switch (true) {
            case (length >= 9):
              return `${v.substr(0, 3)}-${v.substr(3, 2)}-${v.substr(5, 4)}`;
            case (length > 5):
              return `${v.substr(0, 3)}-${v.substr(3, 2)}-${v.substr(5)}`;
            case (length > 3):
              return `${v.substr(0, 3)}-${v.substr(3)}`;
            default:
              return v;
        }
      },
      set(value) {
        let newValue = value;

        // Is the user trying to delete a non-numeric character?  If so, let them.
        const { inputValue: currentValue } = this;
        if (currentValue && currentValue.length) {
          const lastChar = currentValue.substr(-1);

          if (`${newValue}${lastChar}` === currentValue && lastChar.match(/\D/)) {
            newValue = newValue.replace(/\D$/g, '').slice(0, -1);
          }
        }

        // Update the value
        this.rawValue = newValue;

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
