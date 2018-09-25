import { storiesOf } from '@storybook/vue';
import { Icon } from '../../components';

storiesOf('General|Icons', module)
.add('Regular', () => ({
  components: { Icon },
  template: '<icon name="grin-tears"></icon>'
}))
.add('Solid', () => ({
  components: { Icon },
  template: '<icon type="solid" name="grin-tears"></icon>'
}));
