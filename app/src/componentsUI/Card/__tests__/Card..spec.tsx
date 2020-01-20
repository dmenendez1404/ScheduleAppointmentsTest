import React from 'react';
import { mount } from 'enzyme';
import Card from '../Card';

describe('Card', () => {

    it('should render plain card', () => {
        const component = mount(<Card plain={true} />);

        expect(component).toMatchSnapshot();
    });

    it('should render chart card', () => {
        const component = mount(<Card chart={true} />);

        expect(component).toMatchSnapshot();
    });
});