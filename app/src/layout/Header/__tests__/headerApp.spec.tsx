import React from 'react';
import {mount} from 'enzyme';
import HeaderApp from "../HeaderApp";
import {Store} from "../../../store";
import {Provider} from "react-redux";

describe('HeaderApp Component', () => {
    const props = {};
    it('should render HeaderApp Component', () => {
        const component = mount(
            <Provider store={Store}>
                <HeaderApp {...props}><h1>Hi Test</h1></HeaderApp>
            </Provider>);
        expect(component).toMatchSnapshot();
    });

});