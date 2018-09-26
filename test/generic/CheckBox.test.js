import { mount } from '@vue/test-utils'
import { CheckBox } from '../../src/components/generic';

describe('CheckBox.test.js', () => {
  const component = mount(CheckBox, {
    propsData: {
      checked: true
    }
  });

  test('is a Vue instance', () => expect(component.isVueInstance()).toBeTruthy() );
});