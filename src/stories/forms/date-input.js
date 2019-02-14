import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
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
  }));
