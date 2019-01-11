import { storiesOf } from '@storybook/vue';
import { GoogleMap } from '@csgactuarial/style-guide';

storiesOf('Maps|Map', module)
  .add('Default', () => ({
    components: { GoogleMap },
    template: `<google-map style="width: 400px; height: 400px;"></google-map>`,
  }));
