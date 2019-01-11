<template>
    <span class="text-info" @click="$emit('click')">
        <icon :color="color" type="regular" name="fa-check-square" :size="size" v-if="checked"></icon>
        <icon :color="color" type="regular" name="fa-square" :size="size" v-else></icon>
    </span>
</template>

<script>
import Icon from '../generic/Icon.vue';

export default {
  components: {
    Icon
  },
  props: {
    checked: { type: Boolean, required: true },
    size: { type: Number, required: false, default: 1.25 },
    color: { type: String, required: false }
  }
}
</script>
