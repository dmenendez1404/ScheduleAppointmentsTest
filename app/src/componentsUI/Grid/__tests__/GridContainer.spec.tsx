import React from 'react';
import { mount } from 'enzyme';
import { GridContainer } from '..';

describe('Grid Container Component', () => {
    const props = {

    };
    it('should render Grid Container Component', () => {
        const component = mount(<GridContainer {...props}/>);
        expect(component).toMatchSnapshot();
    });



});