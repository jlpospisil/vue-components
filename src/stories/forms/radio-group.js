import { storiesOf } from '@storybook/vue';
import { boolean, number, text, select } from '@storybook/addon-knobs';
/* eslint-disable-next-line import/no-unresolved */
import { RadioGroup } from '@cdpjs/vue-components';

const common = {
  components: { RadioGroup },
  props: {
    options: { type: Array, default: () => ['Option 1', 'Option 2', 'Option 3'] },
    selected: { type: String, default: 'Option 2' },
  },
};

storiesOf('Forms|Radios', module)
  .add('Group', () => ({
    ...common,
    template: `
      <radio-group
        :options="options"
        selected="Option 2"
      />
    `,
  }))
  .add('Stacked Group', () => ({
    ...common,
    template: `
      <radio-group
        :stacked="true"
        :options="options"
        selected="Option 2"
      />
    `,
  }));
