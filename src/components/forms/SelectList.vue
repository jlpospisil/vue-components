<style lang="scss" scoped>
@import "~vue-multiselect/dist/vue-multiselect.min.css";
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
    'close-on-select': { type: Boolean, default: true },
    selectLabel: { type: String, default: null },
    selectGroupLabel: { type: String, default: null },
    deselectLabel: { type: String, default: null },
    deselectGroupLabel: { type: String, default: null },
    placeholder: { type: String, default: null },
  },
};
</script>
