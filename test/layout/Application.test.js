import { mount } from '@vue/test-utils'
import { Application } from '../../src/components/ui';

describe('Application.test.js', () => {
  const component = mount(Application, {
    propsData: {
      checked: true
    }
  });

  test('is a Vue instance', () => expect(component.isVueInstance()).toBeTruthy() );
});
