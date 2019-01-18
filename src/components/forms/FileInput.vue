<template>
  <div class="file-input">
    <input
      type="file"
      :name="name"
      :value="value"
      @input="$emit('input', $event.target.value)"
      ref="input"
      v-show="false"
    />

    <div class="input-group">
      <text-input
        class="file-input-value"
        :value="value"
        readonly="true"
        @focus="openFileSelector"
      />

      <div class="input-group-append" @click="openFileSelector">
        <span class="input-group-text text-primary">
          <icon type="solid" name="fa-file-upload" />
          <span class="ml-2">Select File</span>
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input-group-text {
  cursor: default;
}
</style>

<script>
import TextInput from './TextInput.vue';
import { Icon } from '../generic';

export default {
  name: 'FileInput',
  components: {
    TextInput,
    Icon,
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
