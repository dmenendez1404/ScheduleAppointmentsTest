import React from 'react';
import { mount } from 'enzyme';
import HeaderApp from "../HeaderApp";

describe('HeaderApp Component', () => {
    const props = {

    };
    it('should render HeaderApp Component', () => {
        const component = mount(<HeaderApp {...props}/>);
        expect(component).toMatchSnapshot();
    });

});