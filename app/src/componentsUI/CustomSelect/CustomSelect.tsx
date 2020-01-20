import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';// @material-ui/icons
// core components
import {FormHelperText} from "@material-ui/core";
import {handleControlChange, getEmptyControl} from "../../utils/index";
import customInputStyle from "../../assets/jss/material-dashboard-react/components/customInputStyle";


function CustomSelect({...props}) {
    const {
        labelText,
        id,
        labelProps,
        options,
        keyValue,
        keyText,
        onChange,
    } = props;

    let {control = getEmptyControl()} = props;


    return (
        <FormControl
            error={control.error}
            fullWidth={true}
        >
            {labelText !== undefined ? (
                <InputLabel
                    htmlFor={id}
                    {...labelProps}
                >
                    {labelText}
                </InputLabel>
            ) : null}
            <Select
                id={id}
                value={control.value}
                onChange={(e:any) => {e.target.id = id; handleControlChange(e, control, onChange);}}
            >
                {options.map((option:any, index: number) => (
                    !keyValue && !keyText ?
                        <MenuItem key={index} value={option}>
                            {option}
                        </MenuItem> :
                        <MenuItem key={index} value={option[keyValue]}>
                            {option[keyText]}
                        </MenuItem>
                ))}
            </Select>
            {control.error ? (
                <FormHelperText id="component-error-text">{control.mensaje}</FormHelperText>
            ) : null}
        </FormControl>
    );
}

CustomSelect.propTypes = {
    classes: PropTypes.object.isRequired,
    labelText: PropTypes.node,
    labelProps: PropTypes.object,
    id: PropTypes.string.isRequired,
    control: PropTypes.object.isRequired,
};

export default withStyles(customInputStyle)(CustomSelect);
