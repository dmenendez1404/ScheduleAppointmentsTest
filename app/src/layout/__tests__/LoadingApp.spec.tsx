import React from 'react';
import { mount } from 'enzyme';
import { LoadingApp } from '..';

describe('LoadingApp Component', () => {
    let component;

    beforeEach(() => {
        component = mount(
            <LoadingApp open={true}/>
        );
    });

    it('should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

});