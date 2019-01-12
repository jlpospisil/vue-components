import { storiesOf } from '@storybook/vue';
import { boolean, number, text } from '@storybook/addon-knobs';
/* eslint-disable-next-line import/no-unresolved */
import { CheckBox } from '@csgactuarial/style-guide';

storiesOf('Forms|CheckBox', module)
  .add('Default', () => ({
    components: { CheckBox },
    props: {
      isChecked: { type: Boolean, default: boolean('checked', true) },
      color: { type: String, default: text('color', '') },
      size: { type: Number, default: number('size', 1.25) },
      className: { type: String, default: text('class', '') },
    },
    template: `
      <check-box :class="className" :checked="isChecked" :color="color" :size="size"></check-box>
    `,
  }));
