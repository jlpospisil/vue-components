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
        :value="formattedValue"
        readonly="true"
        @focus="openFileSelector"
        inputStyle="background-color: transparent;"
      />

      <div class="input-group-append" @click="openFileSelector">
        <span class="input-group-text text-primary">
          <icon type="solid" name="fa-file-upload" />
          <span class="ml-2 d-none d-sm-flex file-input-btn-text" v-if="showButtonText">Select File</span>
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

    .file-input-btn-text {
      width: 5.5rem;
    }
  }
}
</style>

<script>
import TextInput from './TextInputInput.vue';
import InputLabel from './InputLabel.vue';
import { Icon } from '../general';

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
    showButtonText: { type: Boolean, default: true },
  },
  computed: {
    formattedValue() {
      const { value } = this;
      return (value || '').replace(/^.+[/|\\]/, '');
    },
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
