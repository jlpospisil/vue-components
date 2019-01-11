import { storiesOf } from '@storybook/vue';
import { boolean, number, text } from '@storybook/addon-knobs';
/* eslint-disable-next-line import/no-unresolved */
import { Radio } from '@csgactuarial/style-guide';

storiesOf('Forms|Radio', module)
  .add('Default', () => ({
    components: { Radio },
    props: {
      isChecked: { type: Boolean, default: boolean('checked', true) },
      color: { type: String, default: text('color', null) },
      size: { type: Number, default: number('size', 1.25) },
      className: { type: String, default: text('class', '') },
    },
    template: `
      <radio :class="className" :checked="isChecked" :color="color" :size="size"></radio>
    `,
  }));
