import { storiesOf } from '@storybook/vue';
/* eslint-disable-next-line import/no-unresolved */
import { SideNav } from '@cdpjs/vue-components';
import StorybookContainer from '../../StorybookContainer.vue';

storiesOf('UI|SideNav', module)
  .add('Default', () => ({
    components: { StorybookContainer, SideNav },
    data() {
      return {
        navGroups: [
          {
            header: 'Group 1',
            key: 'group1',
            items: [
              {
                key: 'group1-item1',
                to: '/link1',
                label: 'Link 1',
                icon: {
                  type: 'solid',
                  name: 'fa-bone',
                },
              },
              {
                key: 'group1-item2',
                to: '/link2',
                label: 'Link 2',
                icon: {
                  type: 'solid',
                  name: 'fa-book-dead',
                },
              },
              {
                key: 'group1-item3',
                to: '/link3',
                label: 'Link 3',
                icon: {
                  type: 'solid',
                  name: 'fa-dumpster-fire',
                },
              },
            ],
          },
        ],
      };
    },
    template: `
      <storybook-container>
        <side-nav :navGroups="navGroups" />
      </storybook-container>
    `,
  }));
