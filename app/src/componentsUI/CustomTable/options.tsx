import React from "react";
import CustomTableToolbar from "./CustomTableToolbar";
import CustomToolbarSelect from "./CustomToolbarSelect";


export const MUIDataTableOptions = (addFunction: any, itemOptions: any, multipleItemOptions: any, onRowsSelect: any,
                                    rowsSelected: any, selectableRows: any, isServerSide: any, changePageAction: any,
                                    rowsPerPage: number, count: number, loading: boolean) => {
    return {
        filter: true,
        selectableRows: selectableRows,
        filterType: 'dropdown',
        responsive: 'stacked',
        rowsSelected: rowsSelected,
        serverSide: isServerSide,
        customToolbar: () => {
            return (
                <CustomTableToolbar handleClick={addFunction} />
            );
        },
        customToolbarSelect: (selectedRows: any) => {
            return (
                <CustomToolbarSelect itemOptions={itemOptions} multipleItemOptions={multipleItemOptions} selectedRows={selectedRows}/>
            )
        },
        onChangePage: (page:number) => {
            changePageAction(page);
        },
        rowsPerPage: rowsPerPage,
        count: count,
        onRowsSelect: onRowsSelect,
        textLabels: {
            body: {
                noMatch: loading? 'Loading...' : 'Sorry, there is no matching data to display'
            }
        }

    };
};