import { mount } from '@vue/test-utils'
import { Icon } from '../../src/components/general';

describe('Icon.test.js', () => {
  const component = mount(Icon, {
    propsData: {
      name: 'faGrinTears'
    }
  });

  test('is a Vue instance', () => expect(component.isVueInstance()).toBeTruthy() );
});
