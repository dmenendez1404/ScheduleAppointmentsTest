import React from 'react';
import { mount } from 'enzyme';
import { ContentApp } from '..';

describe('ContentApp Component', () => {
    const props = {

    };
    it('should render ContentApp Component', () => {
        const component = mount(<ContentApp {...props}><h1>Hi Test</h1></ContentApp>);
        expect(component).toMatchSnapshot();
    });

});