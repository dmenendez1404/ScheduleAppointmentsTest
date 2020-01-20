import React from 'react';
import { mount } from 'enzyme';
import { VpnKey } from '@material-ui/icons';
import CustomToolbarSelect from '../CustomToolbarSelect';


describe('Custom Toolbar Select Component', () => {
    it('should render Custom Toolbar Select Component', () => {
        const customItemOptions = [{ Title: 'My Custom Option', Icon: VpnKey, Click: () => { } }];
        const component = mount(
            <CustomToolbarSelect selectedRows={{ data: [1, 2, 3] }} itemOptions={customItemOptions} customItemOptions={customItemOptions} />)
        expect(component).toMatchSnapshot();
    });

    it('should render Custom Toolbar Select Component with one item', () => {
        const customItemOptions = [{ Title: 'My Custom Option', Icon: VpnKey, Click: () => { } }];
        const component = mount(
            <CustomToolbarSelect selectedRows={{ data: [1] }} itemOptions={customItemOptions} customItemOptions={customItemOptions} />)
        expect(component).toMatchSnapshot();
    });

});