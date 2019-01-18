<style lang="scss" scoped>
@import '../../scss/app';
@import "~vue-multiselect/dist/vue-multiselect.min.css";

$multiselect-highlight-color: map-get($theme-colors, primary);
$multiselect-tag-text-color: #ffffff;

.multiselect {
  .multiselect__tag {
    background-color: $multiselect-highlight-color;
    color: $multiselect-tag-text-color;

    .multiselect__tag-icon {
      &:after {
        color: darken($multiselect-tag-text-color, 15%);
      }

      &:hover {
        background-color: darken($multiselect-highlight-color, 15%);

        &:after {
          color: darken($multiselect-tag-text-color, 25%);
        }
      }
    }
  }

  .multiselect__option--highlight {
    background-color: $multiselect-highlight-color;
  }
}
</style>

<script>
import Multiselect from 'vue-multiselect';

// https://vue-multiselect.js.org/

export default {
  name: 'SelectList',
  extends: Multiselect,
  props: {
    ...Multiselect.props,
    options: { type: Array, default: () => [] },
    multiple: { type: Boolean, default: false },
    searchable: { type: Boolean, default: false },
    closeOnSelect: { type: Boolean, default: true },
    selectLabel: { type: String, default: null },
    selectGroupLabel: { type: String, default: null },
    deselectLabel: { type: String, default: null },
    deselectGroupLabel: { type: String, default: null },
    placeholder: { type: String, default: null },
  },
};
</script>
