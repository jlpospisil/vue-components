import { addDecorator, configure } from '@storybook/vue';
import { setOptions } from '@storybook/addon-options';
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