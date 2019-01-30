<template>
  <div
    ref="modal"
    class="modal"
    tabindex="-1"
    role="dialog">
    <div
      class="modal-dialog modal-lg"
      role="document">
      <div class="modal-content">
        <div class="modal-header bg-info text-white border-bottom-0">
          <h5 class="modal-title font-weight-bold">
            {{ title }}
          </h5>
          <icon
            :size="1.25"
            name="fa-window-close"
            class="cursor-pointer"
            data-dismiss="modal"
            aria-label="Close" />
        </div>

        <div
          v-if="$slots.info"
          class="modal-info p-3">
          <slot name="info"/>
        </div>

        <div class="modal-body p-0">
          <slot name="body"/>
        </div>

        <div class="modal-footer">
          <slot name="additional-buttons"/>
          <button-item
            type="secondary"
            icon_type="solid"
            icon="fa-times"
            text="Close"
            data-dismiss="modal"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../scss/_variables';

.modal {
  .modal-content {
    .modal-info {
      background-color: lighten(map-get($theme-colors, secondary), 25%);
    }

    .modal-body {
      max-height: 65vh;
      overflow-y: auto;
    }
  }
}
</style>

<script>
import jQuery from 'jquery';
import ButtonItem from './ButtonItem.vue';
import Icon from './Icon.vue';

const $ = jQuery;

export default {
  name: 'Modal',
  components: {
    ButtonItem,
    Icon,
  },
  props: {
    title: { type: String, required: true },
  },
  data() {
    return {
      modal: null,
      auto_focus_el: null,
    };
  },
  mounted() {
    this.modal = $(this.$refs.modal);
    this.auto_focus_el = this.modal.find('[autofocus]').first();
    this.modal.on('shown.bs.modal', this.autoFocus);
  },
  methods: {
    hide() {
      this.modal.modal('hide');
    },
    show() {
      this.modal.modal('show');
    },
    toggle() {
      this.modal.modal('toggle');
    },
    autoFocus() {
      if (this.auto_focus_el) {
        this.auto_focus_el.focus();
      }
    },
  },
};
</script>
