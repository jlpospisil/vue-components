import { storiesOf } from '@storybook/vue';
/* eslint-disable-next-line import/no-unresolved */
import { SelectList } from '@cdpjs/vue-components';

const common = {
  components: { SelectList },
  data() {
    return {
      options: [
        'Option 1',
        'Option 2',
        'Option 3',
        'Option 4',
        'Option 5',
        'Option 6',
      ],
      selected: null,
    };
  },
};

const addons = {
  info: {
    components: { SelectList },
  },
};

const story = storiesOf('Forms|Inputs', module);

story.add('SelectList single', () => ({
  ...common,
  template: `
    <select-list 
      label="Select List Label"
      :options="options"
      v-model="selected"
    />
  `,
}), addons);

story.add('SelectList multiple', () => ({
  ...common,
  template: `
    <select-list 
      label="Select List Label"
      :options="options"
      :multiple="true"
      :close-on-select="false"
      v-model="selected"
    />
  `,
}), addons);
