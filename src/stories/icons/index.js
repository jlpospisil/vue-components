import { storiesOf } from '@storybook/vue';
import { Icon } from '../../components';
import * as regular from '@fortawesome/free-regular-svg-icons';

const common = {
  components: { Icon },
  addons: {
    notes: { text: Object.keys(regular).filter(key => key.startsWith('fa') && key !== 'far').join(' | ') }
  },
  propsDescription: {
    type: 'regular | solid',
    name: 'see notes below'
  }
};

storiesOf('General|Icons', module)
.add('Regular', () => ({
  ...common,
  template: `<div>
                <icon name="grin-tears" class="mr-2" :size=1 color="#e64a19"></icon>
                <icon name="grin-tears" class="mr-2" :size=1.5 color="#5e35b1"></icon>
                <icon name="grin-tears" class="mr-2" :size=2 color="#607d8b"></icon>
                <icon name="grin-tears" :size=2.5 color="#43a047"></icon>
              </div>`
}))
.add('Solid', () => ({
  ...common,
  template: `<div>
                <icon type="solid" name="grin-tears" class="mr-2" :size=1 color="#e64a19"></icon>
                <icon type="solid" name="grin-tears" class="mr-2" :size=1.5 color="#5e35b1"></icon>
                <icon type="solid" name="grin-tears" class="mr-2" :size=2 color="#607d8b"></icon>
                <icon type="solid" name="grin-tears" :size=2.5 color="#43a047"></icon>
              </div>`
}));
