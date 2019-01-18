<template>
  <input
    :type="type"
    class="form-control"
  />
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    type: { type: String, default: 'text' },
  },
};
</script>
