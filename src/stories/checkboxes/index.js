import { storiesOf } from '@storybook/vue';
import { boolean, number, text } from '@storybook/addon-knobs';
/* eslint-disable-next-line import/no-unresolved */
import { CheckBox } from '@csgactuarial/style-guide';

// TODO: get knobs working with storybook-addon-vue-info

storiesOf('Forms|CheckBoxes', module)
  .add('Default', () => ({
    components: { CheckBox },
    props: {
      isChecked: { type: Boolean, default: boolean('checked', true) },
      color: { type: String, default: text('color', '#e64a19') },
      size: { type: Number, default: number('size', 1.25) },
      className: { type: String, default: text('class', '') },
    },
    template: `
      <check-box :class="className" :checked="isChecked" :color="color" :size="size"></check-box>
    `,
  }));
