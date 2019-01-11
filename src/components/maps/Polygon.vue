<template>
  <div />
</template>

<style lang="scss" scoped>

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
  mounted() {
    const {
      defaultOptions, google, map, options, paths,
    } = this;

    this.polygon = new google.maps.Polygon({
      paths,
      ...defaultOptions,
      ...options,
    });

    this.polygon.setMap(map);
  },
};
</script>
