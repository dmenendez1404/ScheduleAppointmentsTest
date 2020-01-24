import React from 'react';
import { mount } from 'enzyme';
import AppointmentFormModal from "../components/AppointmentFormModal";
import {Button} from "../../../componentsUI/CustomButtons";
import moment from "moment";


describe('Appointment FormModal Component', () => {
    const props = {
        event:{
            _id:'123423',
            title: 'test event',
            description: '',
            clothing: 'Formal',
            date: moment().toDate(),
            start: moment().toDate(),
            end: moment().add(30, 'minutes').toDate(),
        },
        referenceToSwal:{
            close: jest.fn()
        }
    }
    it('should render correctly with no data props', () => {
        const component = mount(
                <AppointmentFormModal onSubmit={() => { }} {...props} />
        );
        expect(component).toMatchSnapshot();
    });


    it('should have call click on remove', () => {
        const click = jest.fn();
        const component = mount(
            <AppointmentFormModal onRemove={click} {...props}
            />
        );
        const button = component.find(Button).at(1);
        button.simulate('click');
        expect(click).toHaveBeenCalled();
    });

    it('should have call click on submit', () => {
        const click = jest.fn();
        const component = mount(
                <AppointmentFormModal onSubmit={click} {...props}
                />
        );
        const button = component.find(Button).at(2);
        button.simulate('click');
        expect(click).toHaveBeenCalled();
    });

});