import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

const CustomToolbarSelect = (props: any) => {

    const {selectedRows, itemOptions, multipleItemOptions} = props;
    const disabled = selectedRows.data.length !== 1;
    return (
        <div>
            {
                !disabled
                    ?
                    <React.Fragment>
                        {itemOptions
                            ? itemOptions.map((Map: any, index: number) => (
                                <Tooltip title={Map.Title} key={index}>
                                    <IconButton onClick={Map.Click}>
                                        <Map.Icon/>
                                    </IconButton>
                                </Tooltip>
                            ))
                            : null}
                    </React.Fragment>

                    : null
            }

            <React.Fragment>
                {multipleItemOptions
                    ? multipleItemOptions.map((Map: any, index: number) => (
                        <Tooltip title={Map.Title} key={index}>
                            <IconButton onClick={Map.Click}>
                                <Map.Icon/>
                            </IconButton>
                        </Tooltip>
                    ))
                    : null}
            </React.Fragment>

        </div>

    );
}

export default CustomToolbarSelect;