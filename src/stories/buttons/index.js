import { path } from 'path';
import { storiesOf } from '@storybook/vue';
import { ButtonItem } from '../../components';
import { action } from '@storybook/addon-actions';

const common = {
  components: { ButtonItem },
  propsDescription: {
    type: 'primary | secondary | info | warning | danger',
    icon_type: 'regular | solid'
  }
};

const components = {
  default: () => ({
    ...common,
    template: `<div>
            <button-item text="Primary"></button-item>
            <button-item text="Secondary" type="secondary"></button-item>
            <button-item text="Info" type="info"></button-item>
            <button-item text="Warning" type="warning"></button-item>
            <button-item text="Danger" type="danger"></button-item>
        </div>`,
    notes: {
      text: 'here is a note inside the story'
    }
  }),
  withIcon: () => ({
    ...common,
    template: `<div>
            <button-item text="Primary" icon_type="solid" icon="Save" @click="click"></button-item>
            <button-item text="Secondary" type="secondary" icon_type="solid" icon="Save" @click="click"></button-item>
            <button-item text="Info" type="info" icon_type="solid" icon="Save" @click="click"></button-item>
            <button-item text="Warning" type="warning" icon_type="solid" icon="Save" @click="click"></button-item>
            <button-item text="Danger" type="danger" icon_type="solid" icon="Save" @click="click"></button-item>
        </div>`,
    methods: {
      click () {
        console.log('click here', { action });
        action('button clicked');
      }
    },
    mounted () {
      action('mounted');
    }
  })
};

storiesOf('General|Buttons', module)
.add('Without Icon', components.default)
.add('With Icon', components.withIcon);