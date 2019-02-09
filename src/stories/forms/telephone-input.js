import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
/* eslint-disable-next-line import/no-unresolved */
import { TelephoneInput } from '@cdpjs/vue-components';

storiesOf('Forms|Inputs', module)
  .add('Telephone number input', () => ({
    components: { TelephoneInput },
    data() {
      return {
        telephoneNumber: null,
      };
    },
    watch: {
      telephoneNumber() {
        const { telephoneNumber } = this;
        action('telephone number updated')(telephoneNumber);
      },
    },
    template: `
      <telephone-input
        label="Telephone Number Label"
        v-model="telephoneNumber"
      />
    `,
  }));
