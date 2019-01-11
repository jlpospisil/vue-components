<template>
  <div ref="infoWindow">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
export default {
  props: {
    google: { type: Object, default: () => {} },
    map: { type: Object, default: () => {} },
    visible: { type: Boolean, default: false },
    position: { type: Object, default: () => ({ lat: 38, lng: -99 }) },
  },
  data() {
    return {
      infoWindow: null,
    };
  },
  computed: {
    content() {
      const { infoWindow } = this.$refs;
      return infoWindow.innerHTML;
    },
  },
  watch: {
    position() {
      const { positon } = this;
    },
    visible() {
      const { infoWindow, visible } = this;
      if (infoWindow) {
        if (visible) {
          infoWindow.open();
        } else {
          infoWindow.close();
        }
      }
    },
  },
  mounted() {
    const {
      content, position, google, map,
    } = this;

    this.infoWindow = new google.maps.InfoWindow({
      content,
      position,
    });

    this.infoWindow.setMap(map);
  },
  updated() {
    const { content, infoWindow } = this;
    if (infoWindow) {
      infoWindow.setContent(content);
    }
  },
};
</script>
