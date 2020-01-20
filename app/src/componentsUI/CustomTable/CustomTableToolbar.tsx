import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import {withStyles} from "@material-ui/core/styles";

const defaultToolbarStyles = {
    iconButton: {},
};

const CustomTableToolbar = (props: any) => {

        const {classes, handleClick} = props;

        return (
            <Tooltip title={"Add"}>
                <IconButton className={classes.iconButton} onClick={handleClick}>
                    <AddIcon className={classes.deleteIcon}/>
                </IconButton>
            </Tooltip>
        );
    }

export default withStyles(defaultToolbarStyles, {name: "CustomTableToolbar"})(CustomTableToolbar);