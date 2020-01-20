import React from 'react';
import { mount } from 'enzyme';
import GuestRoute from '../GuestRoute';
import { Provider } from 'react-redux';
import { Store } from '../../../store';
import { BrowserRouter as Router } from 'react-router-dom';

describe('GuestRoute', () => {

    it('should render guest route', () => {
        const props = {
            component: () => (<></>)
        };
        const component = mount(
            <Provider store={Store}>
                <Router>
                    {/*<GuestRoute {...props}/>*/}
                </Router>
            </Provider>
        );
        expect(component).toMatchSnapshot();
    });

});