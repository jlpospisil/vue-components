import { path } from 'path';
import { storiesOf } from '@storybook/vue';
import { ButtonItem } from '../../components';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';

const notes = {
  default: `default note`,
  withIcon: `with icon note`
};

const components = {
  default: () => ({
    components: { ButtonItem },
    template: '<button-item text="Primary"></button-item>',
    notes: {
      text: 'here is a note inside the story'
    }
  }),
  withIcon: () => ({
    components: { ButtonItem },
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
.add('Default', components.default)
.add('With Icon', components.withIcon);