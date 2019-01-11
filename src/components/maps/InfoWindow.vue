<template>
  <div ref="infoWindow">
    <div class="info-window">
      <div class="info-window-title">
        <slot name="title" />
      </div>
      <div class="info-window-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.info-window {
  .info-window-title {
    font-weight: bold;
    padding-bottom: 0.5rem;
  }
}
</style>

<script>
export default {
  props: {
    google: { type: Object, default: () => {} },
    map: { type: Object, default: () => {} },
    visible: { type: Boolean, default: true },
    position: { type: Object, default: () => ({ lat: 38, lng: -99 }) },
  },
  data() {
    return {
      infoWindow: null,
    };
  },
  computed: {
    content: {
      cache: false,
      get() {
        const { infoWindow } = this.$refs;
        return infoWindow.innerHTML;
      },
    },
  },
  watch: {
    position: {
      deep: true,
      handler() {
        const { infoWindow, position } = this;
        if (infoWindow) {
          infoWindow.setPosition(position);
        }
      },
    },
    visible() {
      const { infoWindow, map, visible } = this;
      if (infoWindow) {
        if (visible) {
          infoWindow.open(map);
        } else {
          infoWindow.close();
        }
      }
    },
  },
  mounted() {
    const { maybeCreateOrUpdateInfoWindow } = this;
    maybeCreateOrUpdateInfoWindow();
  },
  updated() {
    const { maybeCreateOrUpdateInfoWindow } = this;
    maybeCreateOrUpdateInfoWindow();
  },
  methods: {
    createInfoWindow() {
      const {
        content, position, google, map,
      } = this;

      this.infoWindow = new google.maps.InfoWindow({
        content,
        position,
      });

      // Add the info window to the map and add event listeners
      const { infoWindow, infoWindowClosed } = this;

      infoWindow.setMap(map);
      google.maps.event.addListener(infoWindow, 'closeclick', infoWindowClosed);
    },
    createOrUpdateInfoWindow() {
      const { infoWindow, createInfoWindow, updateInfoWindow } = this;
      if (infoWindow) {
        updateInfoWindow();
      } else {
        createInfoWindow();
      }
    },
    infoWindowClosed() {
      this.$emit('closed');
    },
    maybeCreateOrUpdateInfoWindow() {
      const { visible, createOrUpdateInfoWindow } = this;
      if (visible) {
        createOrUpdateInfoWindow();
      }
    },
    updateInfoWindow() {
      const { content, infoWindow } = this;
      if (infoWindow) {
        infoWindow.setContent(content);
      }
    },
  },
};
</script>
