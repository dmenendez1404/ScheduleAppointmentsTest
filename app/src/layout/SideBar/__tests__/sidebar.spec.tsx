import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { mount } from 'enzyme';
import Sidebar from '../Sidebar';
import { IconButton, Popover } from '@material-ui/core';


describe('Schedule Appointments Create Component', () => {
    it('should render correctly with props', () => {
        const component = mount(
            <Router>
                <Sidebar open={true} location={{pathname: '/'}} />
            </Router>,
        );
        expect(component).toMatchSnapshot();
    });

    it('should show popover on icon button click event', async () => {
        const component = mount(
            <Router>
                <Sidebar open={true} location={{pathname: '/'}} />
            </Router>
        );
        const buttons = component.find(IconButton);
        buttons.at(0).simulate('click');
        const popover = component.find(Popover);            
        expect(popover).toBeTruthy();
    });

    it('should hide popover on icon button click event', async () => {
        const component = mount(
            <Router>
                <Sidebar open={true} location={{pathname: '/'}} />
            </Router>
        );
        const buttons = component.find(IconButton);
        buttons.at(0).simulate('click');
        const popover = component.find(Popover);            
        expect(popover).toBeTruthy();
        const closebtn = component.find(IconButton).at(1);
        closebtn.simulate('click');
        const popoverhidden = component.find(Popover);            
        expect(popoverhidden).toEqual({});

    });
});