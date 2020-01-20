import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { LayoutApp } from '..';
import { BrowserRouter as Router } from 'react-router-dom';
import {Store} from "../../store";

describe('LoadingApp Component', () => {
    let component;
    const props = {
        location: {
            pathname: '/'
        }
    }

    beforeEach(() => {
        component = mount(
            <Provider store={Store}>
                <Router>
                    <LayoutApp {...props} />
                </Router>
            </Provider>
        );
    });

    it('should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

});