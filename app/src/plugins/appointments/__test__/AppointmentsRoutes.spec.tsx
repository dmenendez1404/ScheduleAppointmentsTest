import React from 'react';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import {Store} from '../../../store';
import {MemoryRouter} from 'react-router-dom';
import AppointmentsRoutes from '../AppointmentsRoutes';

describe('AppointmentsRoute', () => {

    it('should render Appointments route', () => {
        const props = {}
        const component = mount(
            <Provider store={Store}>
                    <MemoryRouter>
                        <AppointmentsRoutes {...props} />
                    </MemoryRouter>
            </Provider>
        );
        expect(component).toMatchSnapshot();
    });

});