<template>
  <div class="telephone-input">
    <input-label v-if="label">
      {{ label }}
    </input-label>

    <div class="input-group">
      <text-input
        class="file-input-value"
        :value="value"
        readonly="true"
        input-style="background-color: transparent;"
        @input="$emit('input', $event)"
      />

      <div
        v-if="changeCountry"
        class="input-group-append"
      >
        <span
          class="input-group-text text-primary dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <icon
            type="solid"
            name="fa-globe"
          />
          <span class="mx-2">
            Country
          </span>
        </span>
        <div class="dropdown-menu dropdown-menu-right">
          <div class="country-list">
            <button
              v-for="country in countries"
              :key="country.iso2"
              class="dropdown-item"
              type="button"
              @click="changeSelectedCountry(country)"
            >
              {{ country.name }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.telephone-input {
  .input-group-text {
    background-color: #fff;
  }

  .dropdown-menu {
    max-height: 200px;
    overflow-y: auto;
  }
}
</style>

<script>
import TextInput from './TextInputInput.vue';
import InputLabel from './InputLabel.vue';
import { Icon } from '../general';
import { locationsHelper } from '../../helpers';

export default {
  name: 'TelephoneInput',
  components: {
    InputLabel,
    TextInput,
    Icon,
  },
  props: {
    label: { type: String, default: null },
    name: { type: String, default: null },
    value: { type: String, default: null },
    changeCountry: { type: Boolean, default: true },
    defaultCountry: { type: String, default: null },
  },
  data() {
    return {
      countries: locationsHelper.countries,
      selectedCountry: null,
    };
  },
  computed: {

  },
  mounted() {
    const {
      countries, defaultCountry, changeSelectedCountry, setCountryFromLocationData,
    } = this;

    if (defaultCountry) {
      // Set the current country to the country passed in
      const selectedCountry = countries.find(country => country === defaultCountry);
      changeSelectedCountry(selectedCountry);
    } else {
      // Set the current country based on geolocation
      locationsHelper.getLocationDataFromIp().then(setCountryFromLocationData);
    }
  },
  methods: {
    changeSelectedCountry(country) {
      this.selectedCountry = country;
      console.log('TODO: implement formatting based on selected country: ', { selectedCountry: this.selectedCountry });
    },
    setCountryFromLocationData(locationData) {
      const { countries, changeSelectedCountry } = this;
      const countryCode = locationData.countryCode.toUpperCase();
      const selectedCountry = countries.find(country => country.iso2 === countryCode);
      changeSelectedCountry(selectedCountry);
    },
  },
};
</script>
