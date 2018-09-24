import { addDecorator, configure } from '@storybook/vue';
import { setOptions } from '@storybook/addon-options';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';
// import { withStorySource } from '@storybook/addon-storysource';

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

// Add story source
// addDecorator((getStory, context) => {
//   return withStorySource('how do we get the story source here?')(getStory, context);
// });

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


// function withNotes(textOrOptions) {
//   var channel = _addons2.default.getChannel();
//   var options = typeof textOrOptions === 'string' ? { text: textOrOptions } : textOrOptions;
//
//   return function (getStory) {
//     return function (context) {
//       // send the notes to the channel before the story is rendered
//       channel.emit('storybook/notes/add_notes', options.text);
//       return getStory(context);
//     };
//   };
// }



// function withInfo(textOrOptions) {
//   var options = typeof textOrOptions === 'string' ? { text: textOrOptions } : textOrOptions;
//   return function (storyFn) {
//     return function (context) {
//       return addInfo(storyFn, context, options);
//     };
//   };
// }