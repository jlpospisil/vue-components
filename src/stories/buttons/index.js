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
    template: '<button-item text="Primary"></button-item>',
    notes: {
      text: 'here is a note inside the story'
    }
  }),
  withIcon: () => ({
    ...common,
    template: '<button-item text="Primary" icon_type="solid" icon="Save" @click="click"></button-item>',
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