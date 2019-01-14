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
      <file-input
        v-model="file"
        @input="fileChanged"
      />
    `,
    methods: {
      fileChanged(event) {
        const { file } = this;
        console.log({ event, file });
      },
    },
  }));
