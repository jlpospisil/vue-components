import { addDecorator, configure } from '@storybook/vue';
import { withOptions } from '@storybook/addon-options';
import { withNotes } from '@storybook/addon-notes';
import VueInfoAddon from 'storybook-addon-vue-info';
import { withKnobs } from '@storybook/addon-knobs';
import createTheme from './create-theme';

// Import your custom components
// import { Application } from '../src/components';

// Storybook options
addDecorator(withOptions({
  name: 'CSG Style Guide',
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

// TODO: get info and knobs addon working together
// https://github.com/storybooks/storybook/issues/4947
// https://github.com/storybooks/storybook/issues/5129

// Add info
addDecorator(VueInfoAddon);

// Add knobs
addDecorator(withKnobs);

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

// TODO: remove this if it is not needed
// Add theme to storybook
// addDecorator(story => ({
//   components: { Application, story },
//   template: '<application><story /></application>',
// }));

// Load stories
const loadStories = () => {
  const stories = require.context('../src/stories', true, /.js$/);
  stories.keys().forEach(filename => stories(filename));
};

// Create storybook
configure(loadStories, module);
