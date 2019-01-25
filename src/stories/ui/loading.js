import { storiesOf } from '@storybook/vue';
/* eslint-disable-next-line import/no-unresolved */
import { Loading as LoadingOriginal } from '@cdpjs/vue-components';
import StorybookContainer from '../../StorybookContainer.vue';

// Adjust style to accomodate storybook
const Loading = {
  components: {
    LoadingOriginal,
  },
  props: {
    ...LoadingOriginal.props,
  },
  template: `
  <loading-original 
    v-bind="$props"
    style="position: absolute; height: 100%; width: 100%;"  
   />
  `,
};

storiesOf('UI|Loading', module)
  .add('Default', () => ({
    components: {
      StorybookContainer,
      Loading,
    },
    template: `
      <storybook-container>
        <loading :loading="true" />
      </storybook-container>
    `,
  }));
