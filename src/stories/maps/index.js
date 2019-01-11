import { storiesOf } from '@storybook/vue';
import { GoogleMap, MapPolygon } from '@csgactuarial/style-guide';

const story = storiesOf('Maps|Map', module);

story.add('Default', () => ({
  components: { GoogleMap },
  template: `<google-map style="width: 400px; height: 400px;"></google-map>`,
}));

const nebraskaPolygon = [
  { lat: 42.9986, lng: -104.0543 },
  { lat: 41.0027, lng: -104.0543 },
  { lat: 41.0006, lng: -102.0506 },
  { lat: 40.0034, lng: -102.0493 },
  { lat: 39.9992, lng: -95.3091 },
  { lat: 40.2397, lng: -95.4808 },
  { lat: 40.313, lng: -95.647 },
  { lat: 40.4302, lng: -95.6689 },
  { lat: 40.59, lng: -95.75 },
  { lat: 40.6827, lng: -95.8543 },
  { lat: 40.8138, lng: -95.8447 },
  { lat: 40.9654, lng: -95.8324 },
  { lat: 41.0794, lng: -95.8667 },
  { lat: 41.2923, lng: -95.8722 },
  { lat: 41.4458, lng: -95.9354 },
  { lat: 41.5261, lng: -95.9999 },
  { lat: 41.638, lng: -96.0988 },
  { lat: 41.7703, lng: -96.0686 },
  { lat: 41.8368, lng: -96.1084 },
  { lat: 41.9677, lng: -96.1372 },
  { lat: 42.033, lng: -96.2402 },
  { lat: 42.1155, lng: -96.2746 },
  { lat: 42.2021, lng: -96.3583 },
  { lat: 42.2448, lng: -96.3281 },
  { lat: 42.389, lng: -96.4188 },
  { lat: 42.4731, lng: -96.4037 },
  { lat: 42.5369, lng: -96.6357 },
  { lat: 42.6057, lng: -96.7099 },
  { lat: 42.6532, lng: -96.6893 },
  { lat: 42.6602, lng: -96.7621 },
  { lat: 42.7147, lng: -96.839 },
  { lat: 42.7571, lng: -96.9763 },
  { lat: 42.8085, lng: -97.2029 },
  { lat: 42.8458, lng: -97.229 },
  { lat: 42.8629, lng: -97.3979 },
  { lat: 42.8427, lng: -97.5133 },
  { lat: 42.8488, lng: -97.6149 },
  { lat: 42.8659, lng: -97.8456 },
  { lat: 42.747, lng: -97.998 },
  { lat: 42.8337, lng: -98.145 },
  { lat: 42.9293, lng: -98.4485 },
  { lat: 42.9966, lng: -98.502 },
  { lat: 43.0006, lng: -104.0543 },
];

const coloradoPolygon = [
  { lat: 37.0004, lng: -109.0448 },
  { lat: 36.9949, lng: -102.0424 },
  { lat: 41.0006, lng: -102.0534 },
  { lat: 40.9996, lng: -109.0489 },
  { lat: 37.0004, lng: -109.0448 },
];

const randomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

story.add('With polygon', () => ({
  components: { GoogleMap, MapPolygon },
  data() {
    return {
      polygons: [
        { id: 'ne', paths: nebraskaPolygon, color: randomHexColor() },
        { id: 'co', paths: coloradoPolygon, color: randomHexColor() },
      ],
    };
  },
  template: `<google-map style="width: 400px; height: 400px;">
    <template slot-scope="scopeProps">
        <map-polygon
          v-for="polygon in polygons"
          :key="polygon.id"
          :paths="polygon.paths"
          :google="scopeProps.google"
          :map="scopeProps.map"
          :options="{
           strokeColor: polygon.color,
           fillColor: polygon.color,
          }"
        />
    </template>
  </google-map>`,
}));
