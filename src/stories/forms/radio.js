import { storiesOf } from '@storybook/vue';
import { boolean, number, text, select } from '@storybook/addon-knobs';
/* eslint-disable-next-line import/no-unresolved */
import { Radio } from '@cdpjs/vue-components';

storiesOf('Forms|Radios', module)
  .add('Single', () => ({
    components: { Radio },
    data() {
      return {
        isChecked: true,
      };
    },
    props: {
      color: { type: String, default: text('color', '') },
      size: { type: Number, default: number('size', 1.25) },
      className: { type: String, default: text('class', '') },
      label: {
        type: Object,
        default: () => ({
          text: text('label text', 'Radio label'),
          position: select('label position', ['left', 'right'], 'right'),
        }),
      },
    },
    template: `
      <radio 
        :class="className" 
        :checked="isChecked" 
        :color="color" 
        :size="size" 
        :label="label"
        @click="isChecked = !isChecked"
      />
    `,
  }));
