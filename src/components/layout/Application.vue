<template>
  <div class="application">
    <slot/>
  </div>
</template>

<style lang="scss">
@import '../../scss/app';
</style>

<script>
import bootstrap from 'bootstrap';

export default {
  name: 'Application',
};
</script>
