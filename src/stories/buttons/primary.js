import { storiesOf } from '@storybook/vue';
import { ButtonItem } from '../../components';

storiesOf('General|Buttons/Primary', module)
.add('Default', () => ({
  components: { ButtonItem },
  template: '<button-item text="Primary"></button-item>'
}))
.add('With Icon', () => ({
  components: { ButtonItem },
  template: '<button-item text="Primary" icon_type="solid" icon="Save"></button-item>'
}));