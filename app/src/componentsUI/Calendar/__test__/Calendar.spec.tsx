import React from 'react';
import { mount } from 'enzyme';
import CustomCalendar from "../Calendar";

describe('Calendar', () => {
    const props = {

    }
    it('should render Custom Buttom with specifics props', () => {
        const component = mount(<CustomCalendar {...props} />);
        expect(component).toMatchSnapshot();

    });

});