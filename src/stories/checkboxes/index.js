import { storiesOf } from '@storybook/vue';
import { CheckBox } from '../../components';
import { action } from '@storybook/addon-actions';

storiesOf('General|CheckBoxes', module)
.add('Default', () => ({
  components: { CheckBox },
  data () {
    return {
      cb1: false,
      cb2: true,
      cb3: false
    }
  },
  watch: {
    cb1 () {
      const { cb1 } = this;
      action('Checkbox 1 changed')(cb1);
    },
    cb2 () {
      const { cb2 } = this;
      action('Checkbox 2 changed')(cb2);
    },
    cb3 () {
      const { cb3 } = this;
      action('Checkbox 3 changed')(cb3);
    }
  },
  template: `<div>
                <check-box :checked="cb1" @click="cb1 = !cb1" color="#e64a19"></check-box>
                <check-box :checked="cb2" @click="cb2 = !cb2" :size=1.5 class="ml-3" color="#5e35b1"></check-box>
                <check-box :checked="cb3" @click="cb3 = !cb3" :size=2 class="ml-3" color="#607d8b"></check-box>
              </div>`
}));