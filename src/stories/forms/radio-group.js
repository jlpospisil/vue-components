import { storiesOf } from '@storybook/vue';
import { boolean, number, text, select } from '@storybook/addon-knobs';
/* eslint-disable-next-line import/no-unresolved */
import { RadioGroup } from '@cdpjs/vue-components';

const common = {
  components: { RadioGroup },
  data() {
    return {
      options: ['Option 1', 'Option 2', 'Option 3'],
      selected: 'Option 2',
    };
  },
  methods: {
    radioUpdated(newVal) {
      this.selected = newVal;
    },
  },
};

storiesOf('Forms|Radios', module)
  .add('Group', () => ({
    ...common,
    template: `
      <radio-group
        :options="options"
        :selected="selected"
        @change="radioUpdated"
      />
    `,
  }))
  .add('Stacked Group', () => ({
    ...common,
    template: `
      <radio-group
        :stacked="true"
        :options="options"
        :selected="selected"
        @change="radioUpdated"
      />
    `,
  }));
