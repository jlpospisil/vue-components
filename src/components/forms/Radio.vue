<template>
  <span
    class="text-info"
    @click="$emit('click')"
  >
    <icon
      v-if="checked"
      :color="color"
      type="solid"
      name="fa-check-circle"
      :size="size"
    />
    <icon
      v-else
      :color="color"
      type="regular"
      name="fa-circle"
      :size="size"
    />
  </span>
</template>

<script>
import Icon from '../generic/Icon.vue';

export default {
  components: {
    Icon,
  },
  props: {
    checked: { type: Boolean, required: true },
    size: { type: Number, required: false, default: 1.25 },
    color: { type: String, required: false, default: null },
  },
};
</script>
