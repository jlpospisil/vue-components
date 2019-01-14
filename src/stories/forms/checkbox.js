import { storiesOf } from '@storybook/vue';
import { number, select, text } from '@storybook/addon-knobs';
/* eslint-disable-next-line import/no-unresolved */
import { CheckBox } from '@cdpjs/vue-components';

storiesOf('Forms|Inputs', module)
  .add('Checkbox', () => ({
    components: { CheckBox },
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
          text: text('label text', 'Check box label'),
          position: select('label position', ['left', 'right'], 'right'),
        }),
      },
    },
    template: `
      <check-box 
        :class="className" 
        :checked="isChecked" 
        :color="color" 
        :size="size"
        :label="label"
        @click="isChecked = !isChecked"
      />
    `,
  }));
