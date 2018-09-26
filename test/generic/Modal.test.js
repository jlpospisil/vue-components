import { mount } from '@vue/test-utils'
import { Modal } from '../../src/components/generic';

describe('Modal.test.js', () => {
  const component = mount(Modal, {
    propsData: {
      title: 'Test Modal'
    }
  });

  test('is a Vue instance', () => expect(component.isVueInstance()).toBeTruthy() );
});