import { storiesOf } from '@storybook/vue';
/* eslint-disable-next-line import/no-unresolved */
import { DateInput } from '@cdpjs/vue-components';

storiesOf('Forms|Inputs', module)
  .add('Date input', () => ({
    components: { DateInput },
    template: `
      <date-input
        label="Date Label"
      />
    `,
  }),
  {
    info: {
      components: { DateInput },
    },
  });
