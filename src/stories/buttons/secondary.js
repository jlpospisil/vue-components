import { storiesOf } from '@storybook/vue';
import { ButtonItem } from '../../components';

storiesOf('General|Buttons/Secondary', module)
.add('Default', () => ({
  components: { ButtonItem },
  template: '<button-item type="secondary" text="Secondary"></button-item>'
}))
.add('With Icon', () => ({
  components: { ButtonItem },
  template: '<button-item type="secondary" text="Secondary" icon_type="solid" icon="Save" ></button-item>'
}));