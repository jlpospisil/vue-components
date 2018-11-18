import { addDecorator, configure } from '@storybook/vue';
import { setOptions } from '@storybook/addon-options';
import { withNotes } from '@storybook/addon-notes';
import { setDefaults, withInfo } from 'storybook-addon-vue-info';
import createTheme from './create-theme';

// Import your custom components
import { Application } from '../src/components';

// Storybook options
setOptions({
  name: 'Vue Components',
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
  sortStoriesByKind: true,
  addonPanelInRight: true,
  // selectedAddonPanel: 'storybooks/storybook-addon-knobs',
  theme: createTheme({
    mainBackground: '#e0e0e0',
    inputFill: '#eeeeee',
  }),
});

// Info addon options
setDefaults({
  source: false,
});

// Add notes
addDecorator((getStory, context) => {
  const story = getStory(context);
  const addons = story.addons || {};
  const notes = addons.notes || {};
  if (notes.text || notes.markdown) {
    return withNotes(notes)(getStory)(context);
  }
  return getStory(context);
});

// Add info
addDecorator((getStory, context) => {
  const story = getStory(context);
  const addons = story.addons || {};
  return withInfo(addons.info || {})(getStory)(context);
});

// Add theme to storybook
// eslint-disable-next-line no-unused-vars
addDecorator(story => ({
  components: { Application },
  template: '<application><story /></application>',
}));

// Load stories
const loadStories = () => {
  const stories = require.context('../src/stories', true, /.js$/);
  stories.keys().forEach(filename => stories(filename));
};

// Create storybook
configure(loadStories, module);
