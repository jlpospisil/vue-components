import { mount } from '@vue/test-utils'
import { ButtonItem } from '../../src/components/generic';

describe('ButtonItem.test.js', () => {
  const component = mount(ButtonItem, {
    propsData: {
      text: 'Test Button'
    }
  });

  test('is a Vue instance', () => expect(component.isVueInstance()).toBeTruthy() );
});