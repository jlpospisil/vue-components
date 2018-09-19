<template>
    <span class="text-info" @click="$emit('click')">
        <icon name="fa-check-square" :size="size" v-if="checked"></icon>
        <icon name="fa-square-o" :size="size" v-else></icon>
    </span>
</template>

<script>
import Icon from './Icon.vue';

export default {
  components: {
    Icon
  },
  props: {
    checked: { type: Boolean, required: true },
    size: { type: Number, required: false, default: 1.25}
  }
}
</script>
