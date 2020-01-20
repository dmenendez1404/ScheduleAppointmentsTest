import React from 'react';
import { mount } from 'enzyme';
import Button from '../Button';

describe('Button', () => {

  const props = {
      color:'warning',
      size:'sm',
      simple: false,
      round: true,
      disabled: false,
      block: false,
      link: false,
      justIcon: true
  }
    it('should render Custom Buttom with specifics props', () => {
        const component = mount(<Button {...props} />);

        expect(component).toMatchSnapshot();
        expect((component).prop('color')).toEqual('warning');
        expect((component).prop('size')).toEqual('sm');
        expect((component).prop('simple')).toEqual(false);
        expect((component).prop('round')).toEqual(true);
        expect((component).prop('disabled')).toEqual(false);
        expect((component).prop('block')).toEqual(false);
        expect((component).prop('link')).toEqual(false);
        expect((component).prop('justIcon')).toEqual(true);
    });

});