import {BrowserRouter as Router} from 'react-router-dom';
import React from 'react';
import {mount} from 'enzyme';
import Sidebar from '../Sidebar';
import {IconButton, Popover} from '@material-ui/core';
import {Store} from "../../../store";
import {Provider} from "react-redux";


describe('Schedule Appointments Create Component', () => {
    it('should render correctly with props', () => {
        const component = mount(
            <Router>
                <Provider store={Store}>
                    <Sidebar open={true} location={{pathname: '/'}}/>
                </Provider>
            </Router>,
        );
        expect(component).toMatchSnapshot();
    });
});