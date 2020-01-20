import React from 'react';
import { mount } from 'enzyme';
import CardFooter from '../CardFooter';

describe('CardFooter', () => {

    it('should render plain cardBody', () => {
        const component = mount(<CardFooter plain={true} />);

        expect(component).toMatchSnapshot();
    });

    it('should render profile CardFooter', () => {
        const component = mount(<CardFooter profile={true} />);

        expect(component).toMatchSnapshot();
    });
    it('should render stats cardBody', () => {
        const component = mount(<CardFooter stats={true} />);

        expect(component).toMatchSnapshot();
    });

    it('should render chart CardFooter', () => {
        const component = mount(<CardFooter chart={true} />);

        expect(component).toMatchSnapshot();
    });
});