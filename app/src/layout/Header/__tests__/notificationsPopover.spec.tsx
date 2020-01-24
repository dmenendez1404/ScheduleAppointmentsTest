import React from 'react';
import { mount } from 'enzyme';
import NotificationsPopover from "../NotificationsPopover";

describe('NotificationsPopover Component', () => {
    const props = {

    };
    it('should render NotificationsPopover Component', () => {
        const component = mount(<NotificationsPopover {...props}/>);
        expect(component).toMatchSnapshot();
    });

});