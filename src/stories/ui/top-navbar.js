import { storiesOf } from '@storybook/vue';
/* eslint-disable-next-line import/no-unresolved */
import { Icon, TopNavbar, TopNavbarLink } from '@cdpjs/vue-components';
import StorybookContainer from '../../StorybookContainer.vue';

const components = {
  StorybookContainer,
  Icon,
  TopNavbar,
  TopNavbarLink,
};

const stories = storiesOf('UI|TopNavbar', module);

stories.add('Left links', () => ({
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
    </storybook-container>`,
}));

stories.add('Right links', () => ({
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
    </storybook-container>`,
}));

stories.add('Custom content', () => ({
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
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
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
    </storybook-container>`,
}));
