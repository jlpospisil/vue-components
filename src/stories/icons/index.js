import { storiesOf } from '@storybook/vue';
import { Icon } from '../../components';

const templates = {
  regular: ''
}
storiesOf('General|Icons', module)
.add('Regular', () => ({
  components: { Icon },
  template: `<div>
                <icon name="grin-tears" class="mr-2" :size=1></icon>
                <icon name="grin-tears" class="mr-2" :size=1.5></icon>
                <icon name="grin-tears" class="mr-2" :size=2></icon>
                <icon name="grin-tears" :size=2.5></icon>
              </div>`
}))
.add('Solid', () => ({
  components: { Icon },
  template: `<div>
                <icon type="solid" name="grin-tears" class="mr-2" :size=1></icon>
                <icon type="solid" name="grin-tears" class="mr-2" :size=1.5></icon>
                <icon type="solid" name="grin-tears" class="mr-2" :size=2></icon>
                <icon type="solid" name="grin-tears" :size=2.5></icon>
              </div>`
}));
