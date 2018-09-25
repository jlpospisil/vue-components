import { storiesOf } from '@storybook/vue';
import { CheckBox } from '../../components';

storiesOf('General|CheckBoxes', module)
.add('Default', () => ({
  components: { CheckBox },
  template: `<div>
                <check-box :checked="false" color="#e64a19"></check-box>
                <check-box :checked="true" color="#e64a19"></check-box>
                <check-box :checked="false" :size=1.5 class="ml-3" color="#5e35b1"></check-box>
                <check-box :checked="true" :size=1.5 color="#5e35b1"></check-box>
                <check-box :checked="false" :size=2 class="ml-3" color="#607d8b"></check-box>
                <check-box :checked="true" :size=2 color="#607d8b"></check-box>
              </div>`
}));