import { addDecorator, configure } from '@storybook/vue';
import { withOptions } from '@storybook/addon-options';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs } from '@storybook/addon-knobs';
import createTheme from './create-theme';

// Add notes
addDecorator((getStory, context) => {
  const story = getStory(context);
  const addons = story.addons || {};
  const notes = addons.notes || {};
  if (notes.text || notes.markdown) {
    return withNotes(notes)(getStory)(context);
  }
  return story;
});

// Add info
addDecorator((getStory, context) => {
  const story = getStory(context);
  const addons = story.addons || {};
  const info = addons || {};
  return withInfo({
    propTablesExclude: ['storybook-container'],
    ...info,
  })(getStory)(context);
});

// Add knobs
addDecorator(withKnobs);

// Storybook options
addDecorator(withOptions({
  name: 'Style Guide',
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
  sortStoriesByKind: true,
  addonPanelInRight: true,
  selectedAddonPanel: 'storybooks/storybook-addon-knobs',
  theme: createTheme({
    mainBackground: '#e0e0e0',
    inputFill: '#eeeeee',
  }),
}));

// Load stories
const loadStories = () => {
  const stories = require.context('../src/stories', true, /.js$/);
  stories.keys().forEach(filename => stories(filename));
};

// Create storybook
configure(loadStories, module);
