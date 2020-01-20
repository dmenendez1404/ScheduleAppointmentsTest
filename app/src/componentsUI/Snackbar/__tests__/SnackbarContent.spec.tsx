import React from 'react';
import { mount } from 'enzyme';
import { SnackbarContent } from '..';

describe('SnackbarContent Component', () => {
    const props = {
        message: 'Hello'
    };
    it('should render SnackbarContent Component', () => {
        const component = mount(<SnackbarContent {...props}/>);
        expect(component).toMatchSnapshot();
    });



});