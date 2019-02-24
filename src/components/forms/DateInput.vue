<template>
  <div class="date-input">
    <input-label v-if="label">
      {{ label }}
    </input-label>

    <div class="input-group">
      <text-input
        v-model="inputValue"
        @blur="inputBlur"
        @click="stopPropagation"
      />

      <div class="input-group-append">
        <span
          class="input-group-text text-primary"
          @click="toggleSelector"
        >
          <icon
            type="solid"
            name="fa-calendar-alt"
          />
          <span class="ml-2 d-none d-sm-flex date-input-btn-text">Select Date</span>
        </span>
      </div>
    </div>

    <transition name="fade">
      <div
        v-show="selectorVisible"
        class="date-input-selector"
        @click="stopPropagation"
      >
        <div class="date-input-selector-tip" />

        <div class="date-input-selector-content">
          <div class="row m-0 p-1 flex-wrap">
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
                  {{ selectorValues[item].value || '&nbsp;' }}
                </div>
                <div>
                  {{ selectorValues[item].label || '&nbsp;' }}
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
    </transition>
  </div>
</template>

<style lang="scss">
@import '../../scss/variables';
$selector-item-overlay-color: #fff;
$selector-item-overlay-gradient-color: map-get($theme-colors, secondary);
$selector-background-color: lighten(map-get($theme-colors, secondary), 50%);
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
    background-color: $selector-background-color;
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
        background-color: $selector-background-color;
        transform: translate(10px, -8px) rotate(45deg);
        box-shadow: $selector-box-shadow;
      }
    }

    .date-input-selector-content {
      position: relative;
      width: 100%;
      height: 100%;
      background-color: $selector-background-color;

      .date-input-selector-item {
        position: relative;
        height: $selector-item-height;
        width: $selector-item-width;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-color: $selector-item-overlay-color;
        margin: 5px;

        &::before {
          content: '';
          position: absolute;
          display: block;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background:
            linear-gradient(
              to bottom,
              rgba($selector-item-overlay-gradient-color, 0.5) 0%,
              rgba($selector-item-overlay-gradient-color, 0.15) 25%,
              rgba($selector-item-overlay-gradient-color, 0) 45%,
              rgba($selector-item-overlay-gradient-color, 0.15) 80%,
              rgba($selector-item-overlay-gradient-color, 0.5) 100%
            );
          box-shadow: $selector-box-shadow;
        }
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
import Vue from 'vue';
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
    format: { type: String, default: 'YYYY-MM-DD' },
  },
  data() {
    return {
      inputValue: null,
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
  created() {
    const { inputValue } = this;
    const { value } = this.$props;

    if (value !== inputValue) {
      Vue.set(this, 'inputValue', value);
    }
  },
  methods: {
    addEventListeners() {
      const { hideSelector } = this;
      document.addEventListener('click', hideSelector);
    },
    inputBlur() {
      const { format, hideSelector } = this;
      let { inputValue } = this;

      hideSelector();

      if (!moment(inputValue).isValid()) {
        inputValue = null;
      } else {
        inputValue = moment(inputValue).format(format);
      }

      Vue.set(this, 'inputValue', inputValue);
      this.$emit('input', inputValue);
    },
    hideSelector() {
      this.selectorVisible = false;
    },
    toggleSelector(event) {
      event.stopPropagation();
      this.selectorVisible = !this.selectorVisible;
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
