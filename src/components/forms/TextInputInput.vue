<template>
  <input
    class="form-control"
    @input="$emit('input', $event.target.value)"
    @focus="$emit('focus', $event)"
    @blur="$emit('blur', $event)"
    @select="$emit('select', $event)"
    @click="$emit('click', $event)"
    v-bind="$props"
  />
</template>

<style lang="scss">
/* stylelint-disable-next-line no-empty-source error */
</style>

<script>
export default {
  name: 'TextInputInput',
  props: {
    autofocus: { type: [Boolean, String], default: false },
    disabled: { type: [Boolean, String], default: false },
    label: { type: String, default: null },
    max: { type: [Number, String], default: null },
    maxLength: { type: [Number, String], default: null },
    min: { type: [Number, String], default: null },
    minLength: { type: [Number, String], default: null },
    name: { type: String, default: null },
    pattern: { type: String, default: null },
    placeholder: { type: String, default: null },
    readonly: { type: [Boolean, String], default: false },
    required: { type: [Boolean, String], default: false },
    size: { type: Number, default: null },
    type: { type: String, default: 'text' },
    value: { type: [Number, String], default: null },
  },
};
</script>
