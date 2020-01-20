import React from 'react';
import {MuiThemeProvider} from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import {isNullOrUndefined} from 'util';
import {MUIDataTableOptions} from './options';
import {Edit, RemoveRedEye, Delete} from '@material-ui/icons';
import MuiTheme from './customTheme';

export const CustomTable = ({
                                data, columns, classes, handleDetails, handleEdit, handleDelete, defaultOptions = true,
                                addFunction, customItemOptions, customMultipleItemOptions,
                                onRowsSelect, rowsSelected, selectableRows = 'multiple'
                                , isServerSide, changePageAction, rowsPerPage, count, loading
                            }: any) => {

    if (!isNullOrUndefined(columns) && !isNullOrUndefined(data)) {
        const keys = columns.map((_map: any) => _map.key);
        columns = columns.map((_map: any) => _map.text);
        data = data.map((_map: any) => {
            let item: any = [];
            keys.forEach((key:any) => {
                item.push(_map[key]);
            });
            return item;
        })
    }

    let itemOptions = customItemOptions || [];
    let multipleItemOptions = customMultipleItemOptions || [];

    if (defaultOptions) {
        if(handleDetails) {
            itemOptions.push({
                Title: 'Details',
                Icon: RemoveRedEye,
                Click: handleDetails,
            });
        }
        if(handleEdit) {
            itemOptions.push({
                Title: 'Edit',
                Icon: Edit,
                Click: handleEdit,
            });
        }
      
        if(handleDelete) {
            multipleItemOptions.push( {
                Title: 'Delete',
                Icon: Delete,
                Click: handleDelete,
            });
        }
       
    }


    const options: any = MUIDataTableOptions(addFunction, itemOptions, multipleItemOptions, onRowsSelect,
        rowsSelected, selectableRows,isServerSide, changePageAction, rowsPerPage, count, loading);

    return (
        <div>
            <MuiThemeProvider theme={MuiTheme}>
                <MUIDataTable
                    title={''}
                    data={data}
                    columns={columns}
                    options={options}
                />
            </MuiThemeProvider>
        </div>


    )

}

CustomTable.defaultProps = {
    labelWidth: 3
}

export default CustomTable;