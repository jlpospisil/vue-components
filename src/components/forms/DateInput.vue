<template>
  <div class="date-input">
    <input-label v-if="label">
      {{ label }}
    </input-label>

    <div class="input-group">
      <text-input />

      <div class="input-group-append">
        <span class="input-group-text text-primary" @click="showCalendar">
          <icon type="solid" name="fa-calendar-alt" />
          <span class="ml-2 d-none d-sm-flex date-input-btn-text">Select Date</span>
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .date-input {
    cursor: pointer;

    .input-group-text {
      background-color: #fff;

      .date-input-btn-text {
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
  name: 'DateInput',
  components: {
    InputLabel,
    TextInput,
    Icon,
  },
  props: {
    label: { type: String, default: null },
    name: { type: String, default: null },
    value: { type: String, default: null },
    format: { type: String, default: 'YYYY-MM-DD' },
  },
  methods: {
    showCalendar() {
      console.log('TODO: show calendar here');
    },
    formatDate() {
      let { value } = this;

      // TODO: format date here

      this.$emit('input', value);
    },
  },
};
</script>
