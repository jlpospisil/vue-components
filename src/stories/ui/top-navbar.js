import { storiesOf } from '@storybook/vue';
/* eslint-disable-next-line import/no-unresolved */
import { Icon, TopNavbar as TopNavbarOriginal, TopNavbarLink } from '@cdpjs/vue-components';
import StorybookContainer from '../../StorybookContainer.vue';

// "Extend" TopNavbar to add style/props for storybook
const TopNavbar = {
  props: TopNavbarOriginal.props,
  components: {
    TopNavbarOriginal,
  },
  template: `
  <top-navbar-original navType="" style="position: absolute; top: 0; width: 100%;">
    <slot />
    <slot name="brand" slot="brand" />
    <slot name="leftLinks" slot="leftLinks" />
    <slot name="rightLinks" slot="rightLinks" />
  </top-navbar-original>
  `,
};

// Example body content
const BodyContent = {
  template: `
  <div style="padding: 85px 25px;">Body content would go here.</div>
  `,
}

const components = {
  StorybookContainer,
  Icon,
  TopNavbar,
  TopNavbarLink,
  BodyContent,
};

const addons = {
  info: {
    propTablesExclude: ['storybook-container', 'icon', 'body-content'],
  },
};

const stories = storiesOf('UI|TopNavbar', module);

stories.add('Left links', () => ({
  addons,
  components,
  template: `
    <storybook-container>
        <top-navbar>
          <div slot="brand">Logo</div>
          
          <template slot="leftLinks">
            <top-navbar-link :active="true">Link 1</top-navbar-link>
            <top-navbar-link>Link 2</top-navbar-link>
          </template>
        </top-navbar>
        
        <body-content />
    </storybook-container>`,
}));

stories.add('Right links', () => ({
  addons,
  components,
  template: `
    <storybook-container>
        <top-navbar>
          <div slot="brand">Logo</div>
          
          <template slot="rightLinks">
            <top-navbar-link :active="true">Link 1</top-navbar-link>
            <top-navbar-link>Link 2</top-navbar-link>
          </template>
        </top-navbar>
        
        <body-content />
    </storybook-container>`,
}));

stories.add('Custom content', () => ({
  addons,
  components,
  template: `
    <storybook-container>
        <top-navbar>
          <div slot="brand">Logo</div>
          
          <template slot="leftLinks">
            <top-navbar-link :active="true">Link 1</top-navbar-link>
            <top-navbar-link>Link 2</top-navbar-link>
          </template>
          
          <div class="nav-item dropdown ml-auto">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-toggle="dropdown">
              User Name
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">
                <icon type="solid" name="fa-cog" />
                Settings
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                <icon type="solid" name="fa-sign-out-alt" />
                Logout
              </a>
            </div>
          </div>
        </top-navbar>
        
        <body-content />
    </storybook-container>`,
}));
