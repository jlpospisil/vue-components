import { storiesOf } from '@storybook/vue';
/* eslint-disable-next-line import/no-unresolved */
import { ApplicationContent as ApplicationContentOriginal, TopNavbar, SideNav } from '@cdpjs/vue-components';
import StorybookContainer from '../../StorybookContainer.vue';

const { props } = ApplicationContentOriginal;

const ApplicationContent = {
  components: {
    ApplicationContentOriginal,
  },
  props,
  template: `
    <application-content-original
      style="position: absolute; top: 0; left: 0; right: 0; min-height: unset;"
      v-bind="$props"
    >
      <slot />
    </application-content-original>
  `,
};

const common = {
  components: {
    ApplicationContent,
    StorybookContainer,
    TopNavbar,
    SideNav,
  },
  props: {
    topNav: { type: Boolean, default: false },
    leftSideNavOpen: { type: Boolean, default: false },
    rightSideNavOpen: { type: Boolean, default: false },
  },
  template: `
    <storybook-container>
      <top-navbar navType="sticky-top" v-if="topNav" />
      
      <side-nav style="position: absolute;" v-if="leftSideNavOpen" />
      
      <side-nav :right="true" style="position: absolute;" v-if="rightSideNavOpen" />
      
      <application-content
        :topNav="topNav"
        :leftSideNavOpen="leftSideNavOpen"
        :rightSideNavOpen="rightSideNavOpen"
      >
        <p>
          <h4>Application Content</h4>
          This is a container for the main content of the application.  It will adjust the padding to account for the top navigation as well as a right or left sidebar.
        </p>
      </application-content>
    </storybook-container>`,
};

const story = storiesOf('UI|ApplicationContent', module);

story.add('Top nav (default)', () => ({
  ...common,
  props: {
    ...common.props,
    topNav: { type: Boolean, default: true },
  },
}));

story.add('Left nav open', () => ({
  ...common,
  props: {
    ...common.props,
    leftSideNavOpen: { type: Boolean, default: true },
  },
}));

story.add('Right nav open', () => ({
  ...common,
  props: {
    ...common.props,
    rightSideNavOpen: { type: Boolean, default: true },
  },
}));
