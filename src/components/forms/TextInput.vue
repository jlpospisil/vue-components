<template>
  <input
    :type="type"
    class="form-control"
    @input="$emit('input', $event.target.value)"
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
