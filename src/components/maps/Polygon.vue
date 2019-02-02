<template>
    <div></div>
</template>

<style lang="scss">
/* stylelint-disable-next-line no-empty-source error */
</style>

<script>
export default {
  props: {
    google: { type: Object, default: () => {} },
    map: { type: Object, default: () => {} },
    paths: { type: Array, default: () => [] },
    options: { type: Object, default: () => {} },
  },
  data() {
    return {
      polygon: null,
      defaultOptions: {
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
      },
    };
  },
  beforeDestroy() {
    const { polygon } = this;
    polygon.setMap(null);
  },
  mounted() {
    const {
      defaultOptions, google, map, options, paths, getCenter,
    } = this;

    this.polygon = new google.maps.Polygon({
      paths,
      ...defaultOptions,
      ...options,
      center: getCenter(),
    });

    // Add polygon to map and attach event listeners
    const { polygon, polygonClicked } = this;

    polygon.setMap(map);
    google.maps.event.addListener(polygon, 'click', function() {
      polygonClicked(this);
    });
  },
  methods: {
    getCenter() {
      const { paths } = this;
      const lats = paths.map(path => path.lat);
      const lngs = paths.map(path => path.lng);
      const latMin = Math.min(...lats);
      const latMax = Math.max(...lats);
      const lngMin = Math.min(...lngs);
      const lngMax = Math.max(...lngs);

      return {
        lat: latMin + ((latMax - latMin) / 2),
        lng: lngMin + ((lngMax - lngMin) / 2),
      };
    },
    polygonClicked(event) {
      this.$emit('click', event);
    },
  },
};
</script>
