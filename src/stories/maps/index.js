import { storiesOf } from '@storybook/vue';
import { GoogleMap, InfoWindow, MapPolygon } from '@csgactuarial/style-guide';

const wyomingPolygon = [
  { lat: 41.0037, lng: -104.0556 },
  { lat: 44.9949, lng: -104.0584 },
  { lat: 44.9998, lng: -111.0539 },
  { lat: 40.9986, lng: -111.0457 },
  { lat: 41.0006, lng: -104.0556 },
];

const coloradoPolygon = [
  { lat: 37.0004, lng: -109.0448 },
  { lat: 36.9949, lng: -102.0424 },
  { lat: 41.0006, lng: -102.0534 },
  { lat: 40.9996, lng: -109.0489 },
  { lat: 37.0004, lng: -109.0448 },
];

const randomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const story = storiesOf('Maps|Map', module);

story.add('Default', () => ({
  components: { GoogleMap },
  template: `<google-map style="width: 400px; height: 400px;"></google-map>`,
}));

story.add('With polygon', () => ({
  components: { GoogleMap, MapPolygon },
  data() {
    return {
      polygons: [
        { id: 'wy', paths: wyomingPolygon, color: randomHexColor() },
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

story.add('With clickable polygon', () => ({
  components: { GoogleMap, InfoWindow, MapPolygon },
  data() {
    return {
      polygons: [
        { id: 'wy', paths: wyomingPolygon, color: randomHexColor() },
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
        
        <info-window
          :google="scopeProps.google"
          :map="scopeProps.map"
          :visible="true"
        >
            <div>hello there</div>
        </info-window>
    </template>
  </google-map>`,
}));
