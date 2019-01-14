<template>
  <span class="file-input">
    <input
      type="file"
      :name="name"
      @input="$emit('input', $event.target.value)"
      v-show="false"
      :value="value"
      ref="input"
    />
    <input
      class="form-control file-input-value"
      :value="value"
      readonly="true"
    />
    <button-item
      class="file-input-button"
      text="Select File"
      icon="fa-file-upload"
      icon_type="solid"
      @click="openFileSelector"
    />
  </span>
</template>

<style lang="scss" scoped>
.file-input {
  display: flex;

  .file-input-button {
    margin-left: 1rem;
    white-space: nowrap;
  }
}
</style>

<script>
import { ButtonItem } from '../generic';

export default {
  name: 'FileInput',
  components: {
    ButtonItem,
  },
  props: {
    name: { type: String, default: null },
    value: { type: String, default: null },
  },
  methods: {
    openFileSelector() {
      const { $refs } = this;
      const { input } = $refs;
      input.click();
    },
  },
};
</script>
