import { storiesOf } from '@storybook/vue';
/* eslint-disable-next-line import/no-unresolved */
import { SideNav } from '@cdpjs/vue-components';
import StorybookContainer from '@cdpjs/vue-components/StorybookContainer.vue';
// import StorybookContainer from '../StorybookContainer.vue';

storiesOf('UI|SideNav', module)
  .add('Default', () => ({
    components: { StorybookContainer, SideNav },
    template: `
      <storybook-container>
        <side-nav />
      </storybook-container>
    `,
  }));
