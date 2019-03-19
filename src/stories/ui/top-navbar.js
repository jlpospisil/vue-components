import { storiesOf } from '@storybook/vue';
/* eslint-disable-next-line import/no-unresolved */
import { Icon, TopNavbar, TopNavbarLink } from '@cdpjs/vue-components';
import StorybookContainer from '../../StorybookContainer.vue';

// Example body content
const BodyContent = {
  template: `
  <div style="padding: 25px; height: 1000px;">Body content would go here.  Header should remain fixed when scrolling.</div>
  `,
};

const components = {
  StorybookContainer,
  Icon,
  TopNavbar,
  TopNavbarLink,
  BodyContent,
};

const addons = {
  info: {
    components: { TopNavbar },
  },
};

const notes = {
  markdown: `
  * navType="sticky-top" is being used to mimic the default fixed-top because the nav is in a container with relative positioning.
  
  * This could be used similarly to place a "fixed" navbar inside a container in an app, but keep in mind that position: sticky is not supported in all browsers
  `,
};

const stories = storiesOf('UI|TopNavbar', module);

stories.add('Left links', () => ({
  addons,
  components,
  template: `
    <storybook-container>
        <top-navbar navType="sticky-top">
          <div slot="brand">Logo</div>
          
          <template slot="leftLinks">
            <top-navbar-link :active="true">Link 1</top-navbar-link>
            <top-navbar-link>Link 2</top-navbar-link>
          </template>
        </top-navbar>
        
        <body-content />
    </storybook-container>`,
}), { notes });

stories.add('Right links', () => ({
  addons,
  components,
  template: `
    <storybook-container>
        <top-navbar navType="sticky-top">
          <div slot="brand">Logo</div>
          
          <template slot="rightLinks">
            <top-navbar-link :active="true">Link 1</top-navbar-link>
            <top-navbar-link>Link 2</top-navbar-link>
          </template>
        </top-navbar>
        
        <body-content />
    </storybook-container>`,
}), { notes });

stories.add('Custom content', () => ({
  addons,
  components,
  template: `
    <storybook-container>
        <top-navbar navType="sticky-top">
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
}), { notes });
