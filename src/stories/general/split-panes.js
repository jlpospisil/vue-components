import { storiesOf } from '@storybook/vue';
/* eslint-disable-next-line import/no-unresolved */
import { SplitPane } from '@cdpjs/vue-components';
import StorybookContainer from '../../StorybookContainer.vue';

const addons = {
  info: {
    components: { SplitPane },
  },
};

const stories = storiesOf('General|SplitPanes', module);

stories.add('Horizontal', () => ({
  components: {
    StorybookContainer,
    SplitPane,
  },
  template: `
    <storybook-container>
      <split-pane horizontal>
        <div>Top</div>  
        <div>Bottom</div>  
      </split-pane>
    </storybook-container>`,
}), addons);

stories.add('Vertical', () => ({
  components: {
    StorybookContainer,
    SplitPane,
  },
  template: `
    <storybook-container>
      <split-pane>
        <div>Left</div>  
        <div>Right</div>  
      </split-pane>
    </storybook-container>`,
}), addons);

stories.add('Nested', () => ({
  components: {
    StorybookContainer,
    SplitPane,
  },
  template: `
    <storybook-container>
      <split-pane>
        <split-pane horizontal>
          <div>Left Top</div>  
          <div>Left Middle</div>  
          <div>Left Bottom</div>  
        </split-pane>
        
        <split-pane horizontal>
          <div>Right Top</div>  
          <div>Right Bottom</div>  
        </split-pane>
      </split-pane>
    </storybook-container>`,
}), addons);
