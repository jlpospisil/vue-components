import { storiesOf } from '@storybook/vue';
// import { action } from '@storybook/addon-actions';
// import * as regular from '@fortawesome/free-regular-svg-icons';
// import * as solid from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@csgactuarial/style-guide';

// // Function to filter icon sets
// function iconsFilter(icons) {
//   const ignored = ['far', 'fas'];
//   const filter = key => key.startsWith('fa') && !ignored.includes(key);
//   return Object.keys(icons).filter(key => filter(key));
// }
//
// // Icon sets
// const available_icons = {
//   regular: iconsFilter(regular),
//   solid: iconsFilter(solid),
// };

// Elements common to all stories
const common = {
  components: { Icon },
  // addons: {
  //   notes: {
  //     text: JSON.stringify(available_icons, null, 2),
  //   },
  // },
  propsDescription: {
    type: 'regular | solid',
    name: 'see notes below',
  },
  // mounted() {
  //   action('Available Icons')(available_icons);
  // },
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
