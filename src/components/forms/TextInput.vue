<template>
  <input
    :type="type"
    class="form-control"
    @input="$emit('input', $event.target.value)"
    @focus="$emit('focus', $event)"
    @blur="$emit('blur', $event)"
  />
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    type: { type: String, default: 'text' },
  },
};
</script>
