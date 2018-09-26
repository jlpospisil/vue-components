import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { ButtonItem } from '../../components';

const common = {
  components: { ButtonItem },
  propsDescription: {
    type: 'primary | secondary | info | warning | danger',
    icon_type: 'regular | solid',
  },
  methods: {
    click(btn_name) {
      action(`${btn_name} button clicked`)();
    },
  },
};

const components = {
  default: () => ({
    ...common,
    template: `<div>
            <button-item text="Primary" @click="click('Primary')"></button-item>
            <button-item text="Secondary" type="secondary" @click="click('Secondary')"></button-item>
            <button-item text="Info" type="info" @click="click('Info')"></button-item>
            <button-item text="Warning" type="warning" @click="click('Warning')"></button-item>
            <button-item text="Danger" type="danger" @click="click('Danger')"></button-item>
        </div>`,
  }),
  withIcon: () => ({
    ...common,
    template: `<div>
            <button-item text="Primary" icon_type="solid" icon="Save" @click="click('Primary')"></button-item>
            <button-item text="Secondary" type="secondary" icon_type="solid" icon="Save" @click="click('Secondary')"></button-item>
            <button-item text="Info" type="info" icon_type="solid" icon="Save" @click="click('Info')"></button-item>
            <button-item text="Warning" type="warning" icon_type="solid" icon="Save" @click="click('Warning')"></button-item>
            <button-item text="Danger" type="danger" icon_type="solid" icon="Save" @click="click('Danger')"></button-item>
        </div>`,
  }),
};

storiesOf('General|Buttons', module)
  .add('Without Icon', components.default)
  .add('With Icon', components.withIcon);
