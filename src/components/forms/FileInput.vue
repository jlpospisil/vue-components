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

    <input-label v-if="label">
      {{ label }}
    </input-label>

    <div class="input-group">
      <text-input
        class="file-input-value"
        :value="value"
        readonly="true"
        @focus="openFileSelector"
        inputStyle="background-color: transparent;"
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

<style lang="scss">
.file-input {
  cursor: pointer;

  .form-control[readonly] {
    background-color: #fff;
  }

  .input-group-text {
    background-color: #fff;
  }
}
</style>

<script>
import TextInput from './TextInputInput.vue';
import InputLabel from './InputLabel.vue';
import { Icon } from '../generic';

export default {
  name: 'FileInput',
  components: {
    InputLabel,
    TextInput,
    Icon,
  },
  props: {
    label: { type: String, default: null },
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
