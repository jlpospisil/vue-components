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

const story = storiesOf('Forms|Inputs', module);

story.add('SelectList single', () => ({
  ...common,
  template: `
    <select-list 
      :options="options"
      v-model="selected"
    />
  `,
}));

story.add('SelectList multiple', () => ({
  ...common,
  template: `
    <select-list 
      :options="options"
      :multiple="true"
      :close-on-select="false"
      v-model="selected"
    />
  `,
}));
