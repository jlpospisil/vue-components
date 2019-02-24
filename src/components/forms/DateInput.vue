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
          <div class="row m-0 p-2 flex-wrap">
            <div
              v-for="item in dateParts"
              :key="item"
              class="date-input-selector-item col"
              :class="{ focused: focusedItem === item }"
            >
              <icon
                class="selector-item-control"
                :class="{ disabled: false }"
                type="solid"
                name="fa-caret-up"
              />

              <div class="date-input-selector-item-value">
                <div>
                  {{ selectorDate[item].value || '&nbsp;' }}
                </div>
                <div>
                  {{ selectorDate[item].label || '&nbsp;' }}
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
$selector-item-overlay-gradient-color: #999;
$selector-background-color: #fff;
$selector-box-shadow: 0 0 2px $box-shadow-color;
$focused-box-shadow: 0 0 2px 1px map-get($theme-colors, primary);
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

        &.focused {
          &::before {
            box-shadow: $focused-box-shadow;
          }

          .date-input-selector-item-value {
            color: map-get($theme-colors, primary);
          }
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
      focusedItem: 'month',
      rawSelectorDate: null,
      dateParts: ['month', 'date', 'year'],
    };
  },
  computed: {
    selectorDate: {
      set(newDate) {
        const selectorDate = moment(newDate);

        if (selectorDate.isValid()) {
          Vue.set(this, 'rawSelectorDate', selectorDate);
          Vue.set(this, 'inputValue', this.selectorDate.formatted);
          this.$emit('input', this.selectorDate.formatted);
        }
      },
      get() {
        const { rawSelectorDate, format } = this;
        const date = moment(rawSelectorDate);

        if (!date.isValid()) {
          return { month: {}, date: {}, year: {} };
        }

        return {
          month: {
            value: date.format('MM'),
            label: date.format('MMMM'),
          },
          date: {
            value: date.format('DD'),
            label: date.format('dddd'),
          },
          year: {
            value: date.format('YYYY'),
          },
          formatted: date.format(format),
        };
      },
    },
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

    this.selectorDate = value;
  },
  methods: {
    addEventListeners() {
      const { hideSelector, keyDown } = this;
      document.addEventListener('click', hideSelector);
      document.addEventListener('keydown', keyDown);
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

      Vue.set(this, 'selectorDate', inputValue);
    },
    keyDown(event) {
      const {
        selectorVisible, selectorDate, dateParts, focusedItem,
      } = this;
      const { keyCode } = event;

      console.log({ keyCode });

      if (selectorVisible && selectorDate.formatted) {
        let focusedItemIndex = dateParts.indexOf(focusedItem);

        switch (keyCode) {
            case 27: {  // Esc
              const { hideSelector } = this;
              hideSelector();
              break;
            }
            case 37: { // Left
              focusedItemIndex = Math.max(0, focusedItemIndex - 1);
              Vue.set(this, 'focusedItem', dateParts[focusedItemIndex]);
              break;
            }
            case 38: { // Up
              const { [focusedItem]: unit } = { month: 'months', date: 'days', year: 'years' };
              const itemValue = moment(selectorDate.formatted)[focusedItem]();
              const incrementedItem = moment(selectorDate.formatted).add(1, unit);
              const incrementedItemValue = incrementedItem[focusedItem]();
              let newValue = Math.max(itemValue, incrementedItemValue);

              if (newValue > itemValue) {
                if (focusedItem === 'month') {
                  newValue += 1;
                }

                this.selectorDate = incrementedItem;
              }

              break;
            }
            case 9: { // Tab
              // TODO: if shift is held down move left instead
              event.preventDefault();
            }
            case 39: { // Right
              focusedItemIndex = Math.min(dateParts.length - 1, focusedItemIndex + 1);
              Vue.set(this, 'focusedItem', dateParts[focusedItemIndex]);
              break;
            }
            case 40: { // Down
              const { [focusedItem]: unit } = { month: 'months', date: 'days', year: 'years' };
              const itemValue = moment(selectorDate.formatted)[focusedItem]();
              const incrementedItem = moment(selectorDate.formatted).subtract(1, unit);
              const incrementedItemValue = incrementedItem[focusedItem]();
              let newValue = Math.min(itemValue, incrementedItemValue);

              if (newValue < itemValue) {
                if (focusedItem === 'month') {
                  newValue += 1;
                }

                this.selectorDate = incrementedItem;
              }

              break;
            }
            default: {

            }
        }
      }
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
      const { hideSelector, keyDown } = this;
      document.removeEventListener('click', hideSelector);
      document.removeEventListener('keydown', keyDown);
    },
  },
};
</script>
