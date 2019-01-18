<template>
  <div>
    <input-label v-if="label">
      {{ label }}
    </input-label>

    <text-input-input
      v-bind="inputProps"
      class="form-control"
      @input="$emit('input', $event)"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
      @select="$emit('select', $event)"
      @click="$emit('click', $event)"
    />
  </div>
</template>

<script>
import TextInputInput from './TextInputInput.vue';
import InputLabel from './InputLabel.vue';

export default {
  name: 'TextInput',
  components: {
    InputLabel,
    TextInputInput,
  },
  props: {
    ...TextInputInput.props,
    label: { type: String, default: null },
    type: { type: String, default: 'text' },
    value: { type: [String, Number], default: null },
  },
  computed: {
    inputProps() {
      const { label, ...props } = this.$props;
      return props;
    },
  },
};
</script>
