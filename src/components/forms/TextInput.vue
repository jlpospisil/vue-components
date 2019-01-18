<template>
  <div>
    <label class="input-label" v-if="label">
      {{ label }}
    </label>

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

<style lang="scss" scoped>
.input-label {
  font-weight: 500;
}
</style>
<script>
import TextInputInput from './TextInputInput.vue';

export default {
  name: 'TextInput',
  components: {
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
