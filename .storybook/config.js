import { addDecorator, configure } from '@storybook/vue';
import { withOptions } from '@storybook/addon-options';
import { withNotes } from '@storybook/addon-notes';
import VueInfoAddon, { withInfo } from 'storybook-addon-vue-info';
import { withKnobs } from '@storybook/addon-knobs';
import createTheme from './create-theme';

// Storybook options
addDecorator(withOptions({
  name: 'Style Guide',
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
  sortStoriesByKind: true,
  addonPanelInRight: true,
  // selectedAddonPanel: 'storybooks/storybook-addon-knobs',
  selectedAddonPanel: 'storybook/notes/panel',
  theme: createTheme({
    mainBackground: '#e0e0e0',
    inputFill: '#eeeeee',
  }),
}));

// Add notes
addDecorator(withNotes);

// Add info
// addDecorator(VueInfoAddon);
addDecorator((getStory, context) => {
  const story = getStory(context);
  const addons = story.addons || {};
  const info = addons.info || {};
  return withInfo({
    propTablesExclude: ['storybook-container'],
    ...info,
  })(getStory)(context);
});

// Add knobs
addDecorator(withKnobs);

// Load stories
const loadStories = () => {
  const stories = require.context('../src/stories', true, /.js$/);
  stories.keys().forEach(filename => stories(filename));
};

// Create storybook
configure(loadStories, module);
