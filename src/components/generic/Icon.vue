<template>
    <font-awesome-icon
        :icon="icon"
        :style="{ fontSize: `${size}em`, color }"
        :color="color"
        @click="$emit('click')"
        fixed-width
    ></font-awesome-icon>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import * as regular from '@fortawesome/free-regular-svg-icons';
import * as solid from '@fortawesome/free-solid-svg-icons';

export default {
  components: {
    FontAwesomeIcon
  },
  props: {
    type: { type: String, default: 'regular' },
    name: { type: String, required: true },
    color: { type: String, required: false },
    size: { type: Number, required: false, default: 1 },
    color: { type: String, default: null }
  },
  computed: {
    iconName () {
      const { name } = this;
      const parts = name.replace(/^fa-/i, '').split('-');
      return `fa${parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('')}`;
    },
    icon () {
      const { type, iconName } = this;

      switch (type.toLowerCase()) {
        case 'solid':
          return solid[iconName];

        default:
          return regular[iconName];
      }
    }
  }
}
</script>
