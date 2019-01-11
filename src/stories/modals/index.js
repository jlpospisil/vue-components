import { storiesOf } from '@storybook/vue';
import { Modal, ButtonItem } from '@csgactuarial/style-guide';

storiesOf('General|Modals', module)
  .add('Default', () => ({
    components: { Modal, ButtonItem },
    addons: {
      info: {
        propTables: ['modal'],
      },
    },
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
  }));
