<template>
  <div class="map-container">
    <div
      ref="map"
      class="map"
    >
      <template v-if="!!this.google && !!this.map">
        <slot
          :google="google"
          :map="map"
        />
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.map-container {
  height: 500px;
  width: 500px;
  border: 1px solid #cdcdcd;

  .map {
    height: 100%;
    width: 100%;
  }
}
</style>

<script>
import GoogleMapsApiLoader from 'google-maps-api-loader';

export default {
  props: {
    libraries: { type: Array, default: () => [] },
    options: { type: Object, default: () => {} },
  },
  data() {
    return {
      google: null,
      map: null,
      defaultOptions: {
        center: {
          lat: 38,
          lng: -99,
        },
        zoom: 4,
      },
    };
  },
  mounted() {
    const { libraries, initializeMap } = this;

    GoogleMapsApiLoader({
      apiKey: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
      libraries,
    }).then((google) => {
      this.google = google;
      initializeMap();
    });
  },
  methods: {
    initializeMap() {
      const { defaultOptions, google, options, $refs } = this;
      const { Map } = google.maps;
      this.map = new Map($refs.map, {
        ...defaultOptions,
        ...options,
      });
    },
  },
};
</script>
