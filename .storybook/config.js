import { addDecorator, configure } from '@storybook/vue';
import { setOptions } from '@storybook/addon-options';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';

import Vue from 'vue';
// import Vuex from 'vuex'; // Vue plugins

// Import your custom components
import { Application } from '../src/components';

// Install Vue plugins.
// Vue.use(Vuex);

// Register custom components
Vue.component('application', Application);

// Storybook options
setOptions({
  name: 'Vue Components',
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
  sortStoriesByKind: true
});

// TODO: figure out why storysource webpack and these addons cause blank page

// Add info decorator
// addDecorator(withInfo);

// Add notes decorator
// addDecorator(withNotes);

// Add theme to storybook
addDecorator((story) => {
  return {
    template: '<application><story /></application>'
  };
});

// Load stories
const stories = require.context('../src/stories', true, /.js$/);
const loadStories = () => {
  stories.keys().forEach((filename) => stories(filename));
};

// Create storybook
configure(loadStories, module);