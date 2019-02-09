import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
/* eslint-disable-next-line import/no-unresolved */
import { TelephoneInput } from '@cdpjs/vue-components';

storiesOf('Forms|Inputs', module)
  .add('Telephone number input', () => ({
    components: { TelephoneInput },
    template: `
      <telephone-input
      />
    `,
    // watch: {
    //   inputValue() {
    //     const { inputValue } = this;
    //     action('input updated')(inputValue);
    //   },
    // },
  }));
