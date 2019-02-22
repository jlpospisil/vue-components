<template>
  <div class="date-input">
    <input-label v-if="label">
      {{ label }}
    </input-label>

    <div class="input-group">
      <text-input
        @focus="showSelector"
        @blur_xxxx="hideSelector"
        @blur="formatDate"
        @click="stopPropagation"
      />

      <div class="input-group-append">
        <span
          class="input-group-text text-primary"
          @click="showSelector"
        >
          <icon
            type="solid"
            name="fa-calendar-alt"
          />
          <span class="ml-2 d-none d-sm-flex date-input-btn-text">Select Date</span>
        </span>
      </div>
    </div>

    <div
      v-show="selectorVisible"
      class="date-input-selector"
      @click="stopPropagation"
    >
      <div class="date-input-selector-tip" />

      <div class="date-input-selector-content">
        <div class="row py-1 flex-wrap">
          <div
            v-for="item in ['month', 'day', 'year']"
            :key="item"
            class="date-input-selector-item col"
          >
            <icon
              class="selector-item-control"
              :class="{ disabled: false }"
              type="solid"
              name="fa-caret-up"
            />

            <div class="date-input-selector-item-value">
              <div>
                {{ selectorValues[item].value || '' }}
              </div>
              <div>
                {{ selectorValues[item].label || '' }}
              </div>
            </div>

            <icon
              class="selector-item-control"
              :class="{ disabled: false }"
              type="solid"
              name="fa-caret-down"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../scss/variables';
$selector-bg-color: #fff;
$selector-border-color: map-get($theme-colors, primary);
$selector-box-shadow: 0 0 2px $box-shadow-color;
$selector-item-width: 8rem;
$selector-item-height: 8rem;

.date-input {
  position: relative;

  .input-group-text {
    background-color: #fff;

    .date-input-btn-text {
      width: 5.5rem;
    }
  }

  .date-input-selector {
    position: absolute;
    margin-top: 10px;
    min-height: $selector-item-height + 0.8rem;
    max-height: 3 * $selector-item-height + 0.8rem;
    width: 100%;
    min-width: $selector-item-width;
    max-width: 3 * $selector-item-width;
    background-color: $selector-bg-color;
    box-shadow: $selector-box-shadow;
    z-index: 400;

    .date-input-selector-tip {
      position: relative;

      &::before {
        content: ' ';
        position: absolute;
        display: block;
        width: 20px;
        height: 20px;
        background-color: $selector-bg-color;
        transform: translate(10px, -8px) rotate(45deg);
        box-shadow: $selector-box-shadow;
      }
    }

    .date-input-selector-content {
      position: relative;
      width: 100%;
      height: 100%;
      background-color: $selector-bg-color;

      .date-input-selector-item {
        height: $selector-item-height;
        width: $selector-item-width;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        .selector-item-control {
          color: rgba(0, 0, 0, 0.5);

          &.disabled {
            color: rgba(0, 0, 0, 0.2);
          }
        }

        .date-input-selector-item-value {
          div {
            text-align: center;

            &:first-child {
              font-size: 2rem;
            }

            &:nth-child(2) {
              font-size: 0.85rem;
              text-transform: uppercase;
            }
          }
        }
      }
    }
  }
}
</style>

<script>
import moment from 'moment';
import TextInput from './TextInputInput.vue';
import InputLabel from './InputLabel.vue';
import { Icon } from '../general';

export default {
  name: 'DateInput',
  components: {
    InputLabel,
    TextInput,
    Icon,
  },
  props: {
    label: { type: String, default: null },
    name: { type: String, default: null },
    value: { type: String, default: null },
    format: { type: String, default: 'YYYY-MM-DD' },
  },
  data() {
    return {
      selectorVisible: false,
      selectorValues: {
        month: {
          value: '02',
          label: 'February',
        },
        day: {
          value: '24',
          label: 'Tuesday',
        },
        year: {
          value: '2018',
        },
      },
    };
  },
  mounted() {
    const { addEventListeners } = this;
    addEventListeners();
  },
  beforeDestroy() {
    const { removeEventListeners } = this;
    removeEventListeners();
  },
  methods: {
    addEventListeners() {
      const { hideSelector } = this;
      document.addEventListener('click', hideSelector);
    },
    formatDate(event) {
      // const { value } = this.???
      // const formattedDate = moment(value).format('YYYY-MM-DD');
      console.log('TODO: get value from input');
    },
    hideSelector() {
      this.selectorVisible = false;
    },
    showSelector(event) {
      event.stopPropagation();
      this.selectorVisible = true;
    },
    stopPropagation(event) {
      event.stopPropagation();
    },
    removeEventListeners() {
      const { hideSelector } = this;
      document.removeEventListener('click', hideSelector);
    },
  },
};
</script>
