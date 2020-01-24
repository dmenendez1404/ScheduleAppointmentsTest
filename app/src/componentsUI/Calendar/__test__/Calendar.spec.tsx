import React from 'react';
import { mount } from 'enzyme';
import CustomCalendar from "../Calendar";
import moment from "moment";

describe('Calendar', () => {
    const props = {
        events:[{
            title: 'test event',
            start: moment().toDate(),
            end: moment().add(30, 'minutes').toDate(),
        }]
    }
    it('should render Custom CustomCalendar with specifics props', () => {
        const component = mount(<CustomCalendar {...props} />);
        expect(component).toMatchSnapshot();

    });

});