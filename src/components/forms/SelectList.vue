<template>
    <div
        class="select-list"
        :class="{ 'allow-multiple': multiple }"
    >
        <input-label v-if="label">
            {{ label }}
        </input-label>

        <multiselect
            v-bind="multiselectProps"
            @input="$emit('input', $event)"
            @select="$emit('select', $event)"
            @remove="$emit('remove', $event)"
            @search-change="$emit('search-change', $event)"
            @tag="$emit('tag', $event)"
            @open="$emit('open', $event)"
            @close="$emit('close', $event)"
        />
    </div>
</template>

<style lang="scss">
@import '../../scss/app';
@import "~vue-multiselect/dist/vue-multiselect.min.css";

$multiselect-highlight-color: map-get($theme-colors, primary);
$multiselect-tag-text-color: #ffffff;

.select-list {
  &.allow-multiple {
    .multiselect__single {
        display: none;
    }
  }

  &:not(.allow-multiple) {
    .multiselect__strong {
      display: none;
    }
  }

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
          color: $multiselect-tag-text-color;
        }
      }
    }
  }

  .multiselect__option--highlight {
    background-color: $multiselect-highlight-color;

    &.multiselect__option--selected {
        background-color: $multiselect-highlight-color;
    }
  }
}
</style>

<script>
import Multiselect from 'vue-multiselect';
import InputLabel from './InputLabel.vue';

// https://vue-multiselect.js.org/

export default {
  name: 'SelectList',
  components: {
    Multiselect,
    InputLabel,
  },
  props: {
    ...Multiselect.props,
    closeOnSelect: { type: Boolean, default: true },
    deselectLabel: { type: String, default: null },
    deselectGroupLabel: { type: String, default: null },
    itemLabel: { type: String, default: null },
    label: { type: String, default: null },
    limit: { type: Number, default: 0 },
    limitText: {
      type: Function,
      default: count => `${count} Selected`,
    },
    multiple: { type: Boolean, default: false },
    options: { type: Array, default: () => [] },
    placeholder: { type: String, default: null },
    searchable: { type: Boolean, default: false },
    selectLabel: { type: String, default: null },
    selectGroupLabel: { type: String, default: null },
    value: {
      type: [Object, Array, String, Number],
      default: null,
    },
  },
  computed: {
    multiselectProps() {
      const { label, itemLabel, ...props } = this.$props;
      return {
        ...props,
        label: itemLabel,
      };
    },
  },
};
</script>
