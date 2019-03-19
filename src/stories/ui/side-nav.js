import { storiesOf } from '@storybook/vue';
import {
  SideNav as SideNavOriginal, SideNavGroup, SideNavGroupHeader, SideNavLink,
} from '@cdpjs/vue-components'; /* eslint-disable-line import/no-unresolved */
import StorybookContainer from '../../StorybookContainer.vue';

const addons = {
  info: {
    components: { SideNav: SideNavOriginal },
  },
};
const SideNav = {
  components: {
    SideNavOriginal,
  },
  props: SideNavOriginal.props,
  template: `
    <side-nav-original v-bind="$props" style="position: absolute;">
      <slot name="header" slot="header" />
      <slot name="content" slot="content" />
      <slot name="footer" slot="footer" />
    </side-nav-original>  
  `,
};

const navGroups = [
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
];

storiesOf('UI|SideNav', module)
  .add('Default', () => ({
    components: {
      StorybookContainer,
      SideNav,
      SideNavGroup,
      SideNavGroupHeader,
      SideNavLink,
    },
    data() {
      return {
        sideNavOpen: true,
        navGroups,
      };
    },
    template: `
      <storybook-container>
        <side-nav :open="sideNavOpen">
          <div slot="header">
            Header Here
          </div>
          
          <div slot="content">
            <side-nav-group
              v-for="(navGroup, groupIndex) in navGroups"
              :key="navGroup.key"
            >
              <side-nav-group-header v-if="navGroup.header">
                {{ navGroup.header }}
              </side-nav-group-header>
        
              <side-nav-link
                v-for="(navItem, itemIndex) in navGroup.items"
                :key="navItem.key"
                :icon="navItem.icon"
                :label="navItem.label"
              />
            </side-nav-group>
          </div>
          
          <div slot="footer">
            Footer Here
          </div>
        </side-nav>
      </storybook-container>
    `,
    mounted() {
      const { toggleSideNav } = this;
      setInterval(toggleSideNav, 5000);
    },
    methods: {
      toggleSideNav() {
        this.sideNavOpen = !this.sideNavOpen;
      },
    },
  }), addons);
