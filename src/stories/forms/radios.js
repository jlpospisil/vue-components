import { storiesOf } from '@storybook/vue';
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

storiesOf('Forms|Inputs', module)
  .add('Radios inline', () => ({
    ...common,
    template: `
      <radio-group
        label="Inline Radio Group Label"
        :options="options"
        v-model="selected"
      />
    `,
  }))
  .add('Radios stacked', () => ({
    ...common,
    template: `
      <radio-group
        label="Stacked Radio Group Label"
        :stacked="true"
        :options="options"
        v-model="selected"
      />
    `,
  }));
