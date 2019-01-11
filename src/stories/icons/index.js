import { storiesOf } from '@storybook/vue';
/* eslint-disable-next-line import/no-unresolved */
import { Icon } from '@csgactuarial/style-guide';

// Elements common to all stories
const common = {
  components: { Icon },
  propsDescription: {
    type: 'regular | solid',
    name: 'see notes below',
  },
};

// Create the stories
storiesOf('General|Icons', module)
  .add('Regular', () => ({
    ...common,
    template: `<div>
                <icon type="regular" name="fa-address-book" class="mr-2" :size=1 color="#e64a19"></icon>
                <icon type="regular" name="fa-address-book" class="mr-2" :size=1.5 color="#5e35b1"></icon>
                <icon type="regular" name="fa-address-book" class="mr-2" :size=2 color="#607d8b"></icon>
                <icon type="regular" name="fa-address-book" :size=2.5 color="#43a047"></icon>
              </div>`,
  }))
  .add('Solid', () => ({
    ...common,
    template: `<div>
                <icon type="solid" name="fa-address-book" class="mr-2" :size=1 color="#e64a19"></icon>
                <icon type="solid" name="fa-address-book" class="mr-2" :size=1.5 color="#5e35b1"></icon>
                <icon type="solid" name="fa-address-book" class="mr-2" :size=2 color="#607d8b"></icon>
                <icon type="solid" name="fa-address-book" :size=2.5 color="#43a047"></icon>
              </div>`,
  }));
