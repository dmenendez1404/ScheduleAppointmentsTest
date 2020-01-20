import React from 'react';
import { mount } from 'enzyme';
import { CustomTable } from '..';
import MuiTheme from '../customTheme';
import { MuiThemeProvider } from '@material-ui/core';
import globalTheme from '../../../theme';
import { VpnKey } from '@material-ui/icons';

describe('Grid Container Component', () => {
    const props = {

    };
    it('should render Custom Table Component with no properties', () => {
        const component = mount(
            <MuiThemeProvider theme={globalTheme}>
                <CustomTable {...props} />
            </MuiThemeProvider>);
        expect(component).toMatchSnapshot();
    });

    it('should render Custom Table with data property', () => {
        const columns = [
            { text: "Id", key: "id" },
            { text: "Name", key: "name" }
        ];
        const data = [
            { id: 1, name: 'Juan' }
        ]
        const component = mount(
            <MuiThemeProvider theme={globalTheme}>
                <CustomTable {...props} data={data}
                    columns={columns} />
            </MuiThemeProvider>);

        expect(component).toMatchSnapshot();

    });

    it('should render Custom Table with items options properties', () => {
        const columns = [
            { text: "Id", key: "id" },
            { text: "Name", key: "name" }
        ];
        const data = [
            { id: 1, name: 'Juan' }
        ];
        const customItemOptions = [
            {
                Title: 'My Custom Option',
                Icon: VpnKey,
                Click: () => {
                },
            }
        ];
        const component = mount(
            <MuiThemeProvider theme={globalTheme}>
                <CustomTable {...props} data={data} customItemOptions={customItemOptions} customMultipleItemOptions={customItemOptions}
                    columns={columns} />
            </MuiThemeProvider>);

        expect(component).toMatchSnapshot();
    });
});