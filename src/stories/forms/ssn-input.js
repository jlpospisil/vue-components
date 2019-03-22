import { storiesOf } from '@storybook/vue';
/* eslint-disable-next-line import/no-unresolved */
import { SsnInput } from '@cdpjs/vue-components';

storiesOf('Forms|Inputs', module)
  .add('SSN input', () => ({
    components: { SsnInput },
    data() {
      return {
        ssn: null,
      };
    },
    template: `
      <ssn-input
        label="SSN Label"
        v-model="ssn"
      />
    `,
  }),
  {
    info: {
      components: { SsnInput },
    },
  });
