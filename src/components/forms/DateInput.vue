<template>
  <div class="file-input">
    <input-label v-if="label">
      {{ label }}
    </input-label>

    <div class="input-group">
      <text-input />

      <div class="input-group-append">
        <span class="input-group-text text-primary" @click="showCalendar">
          <icon type="solid" name="fa-calendar-alt" />
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

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
  },
  methods: {
    showCalendar() {
      console.log('TODO: show calendar here');
    },
  },
};
</script>
