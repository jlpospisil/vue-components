import { storiesOf } from '@storybook/vue';
import { Icon } from '../../components';

storiesOf('General|Icons', module)
.add('Regular', () => ({
  components: { Icon },
  template: `<div>
                <icon name="grin-tears" class="mr-2" :size=1 color="#e64a19"></icon>
                <icon name="grin-tears" class="mr-2" :size=1.5 color="#5e35b1"></icon>
                <icon name="grin-tears" class="mr-2" :size=2 color="#607d8b"></icon>
                <icon name="grin-tears" :size=2.5 color="#43a047"></icon>
              </div>`
}))
.add('Solid', () => ({
  components: { Icon },
  template: `<div>
                <icon type="solid" name="grin-tears" class="mr-2" :size=1 color="#e64a19"></icon>
                <icon type="solid" name="grin-tears" class="mr-2" :size=1.5 color="#5e35b1"></icon>
                <icon type="solid" name="grin-tears" class="mr-2" :size=2 color="#607d8b"></icon>
                <icon type="solid" name="grin-tears" :size=2.5 color="#43a047"></icon>
              </div>`
}));
