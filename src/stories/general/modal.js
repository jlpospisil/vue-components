import { storiesOf } from '@storybook/vue';
/* eslint-disable-next-line import/no-unresolved */
import { Modal, ButtonItem } from '@cdpjs/vue-components';

storiesOf('General|Modals', module)
  .add('Default', () => ({
    components: { Modal, ButtonItem },
    template: `<div>
                <button-item text="Show Modal" @click="showModal"></button-item>

                <modal title="Example Modal" ref="modal">
                  <div slot="info">
                    Additional information would go here
                  </div>
                  
                  <div slot="body" class="p-3">
                    The important information would be here
                  </div>
                  
                  <div slot="additional-buttons">
                    <button-item text="Save" icon_type="solid" icon="fa-save"></button-item>
                  </div>
                </modal>
              </div>`,
    methods: {
      showModal() {
        const { modal } = this.$refs;
        modal.show();
      },
    },
  }),
  {
    info: {
      components: {
        Modal,
      },
    },
  });
