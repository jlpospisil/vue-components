import { addDecorator, configure } from '@storybook/vue';
import { setOptions } from '@storybook/addon-options';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';

// Import your custom components
import { Application } from '../src/components';

// Storybook options
setOptions({
  name: 'Vue Components',
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
  sortStoriesByKind: true
});

// Add notes
addDecorator((getStory, context) => {
  const story = getStory(context);
  return withNotes(story.notes || {})(getStory)(context);
});

// Add info
addDecorator((getStory, context) => {
  return withNotes('how do we get the note here?')(getStory)(context);
});

// Add theme to storybook
addDecorator(story => ({
  components: { Application },
  template: '<application><story /></application>'
}));

// Load stories
const loadStories = () => {
  const stories = require.context('../src/stories', true, /.js$/);
  stories.keys().forEach((filename) => stories(filename));
};

// Create storybook
configure(loadStories, module);