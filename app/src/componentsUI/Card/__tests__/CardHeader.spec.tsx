import React from 'react';
import { mount } from 'enzyme';
import CardHeader from '../CardHeader';

describe('CardHeader', () => {

    it('should render plain CardHeader', () => {
        const component = mount(<CardHeader plain={true} />);
        expect(component).toMatchSnapshot();
    });

    it('should render profile CardHeader', () => {
        const component = mount(<CardHeader/>);
        expect(component).toMatchSnapshot();
    });
    it('should render stats CardHeader', () => {
        const component = mount(<CardHeader stats={true} />);
        expect(component).toMatchSnapshot();
    });

    it('should render CardHeader with icon', () => {
        const component = mount(<CardHeader icon={true} />);
        expect(component).toMatchSnapshot();
    });

    it('should render CardHeader with specific color', () => {
        const component = mount(<CardHeader color={'success'} />);
        expect(component).toMatchSnapshot();
    });
});