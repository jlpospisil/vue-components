import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
/* eslint-disable-next-line import/no-unresolved */
import { TextInput } from '@cdpjs/vue-components';

storiesOf('Forms|Inputs', module)
  .add('Text input', () => ({
    components: { TextInput },
    data() {
      return {
        inputValue: null,
      };
    },
    template: `
      <text-input
        name="inputName"
        v-model="inputValue"
      />
    `,
    watch: {
      inputValue() {
        const { inputValue } = this;
        action('input updated')(inputValue);
      },
    },
  }));
