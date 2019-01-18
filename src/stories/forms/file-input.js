import { storiesOf } from '@storybook/vue';
/* eslint-disable-next-line import/no-unresolved */
import { FileInput } from '@cdpjs/vue-components';

storiesOf('Forms|Inputs', module)
  .add('File input', () => ({
    components: { FileInput },
    data() {
      return {
        file: null,
      };
    },
    template: `
      <file-input label="File Input Label" v-model="file" />
    `,
  }));
