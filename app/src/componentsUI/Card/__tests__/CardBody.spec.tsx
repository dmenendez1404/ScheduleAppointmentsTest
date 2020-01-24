import React from 'react';
import { mount } from 'enzyme';
import CardBody from '../CardBody';

describe('CardBody', () => {

    it('should render plain cardBody', () => {
        const component = mount(<CardBody plain={true} />);

        expect(component).toMatchSnapshot();
    });

    it('should render profile cardBody', () => {
        const component = mount(<CardBody profile={true} />);

        expect(component).toMatchSnapshot();
    });
});