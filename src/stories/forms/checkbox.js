import { storiesOf } from '@storybook/vue';
import { boolean, number, select, text } from '@storybook/addon-knobs';
/* eslint-disable-next-line import/no-unresolved */
import { CheckBox } from '@cdpjs/vue-components';

storiesOf('Forms|CheckBoxes', module)
  .add('Single', () => ({
    components: { CheckBox },
    props: {
      isChecked: { type: Boolean, default: boolean('checked', true) },
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
      />
    `,
  }));
