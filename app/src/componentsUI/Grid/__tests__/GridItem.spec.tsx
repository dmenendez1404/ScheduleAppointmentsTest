import React from 'react';
import { mount } from 'enzyme';
import GridItem from '../GridItem';

describe('Grid Item Component', () => {
    const props = {

    };
    it('should render Grid Item Component', () => {
        const component = mount(<GridItem {...props}/>);
        expect(component).toMatchSnapshot();
    });



});