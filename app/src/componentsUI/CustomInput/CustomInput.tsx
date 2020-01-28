import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import {FormHelperText, TextField} from "@material-ui/core";
// core components
import customInputStyle from "../../assets/jss/material-dashboard-react/components/customInputStyle";
import {isValidControl} from "../../utils/FieldValidators";
import {handleControlChange, getEmptyControl} from "../../utils/index";

/*.MuiInputLabel-outlined .MuiInputLabel-outlined*/

const CustomInput = ({...props}) => {
    const {
        classes,
        labelText,
        id,
        type,
        onChange,
        variant = 'outlined',
    } = props;
    let {control = getEmptyControl()} = props;

    control = isValidControl(control);

    return (
        <FormControl
            error={control.error}
            fullWidth={true}
            className={classes.formControl}
            variant={variant}
        >
            <TextField
                id={id}
                type={type}
                value={control.value || ''}
                variant={variant}
                label={labelText}
                autoComplete='off'
                onChange={(e) => handleControlChange(e, control, onChange)}
            />
            {control.error ? (
                <FormHelperText id="component-error-text">{control.mensaje}</FormHelperText>
            ) : null}
        </FormControl>
    );
}

CustomInput.propTypes = {
    classes: PropTypes.object.isRequired,
    labelText: PropTypes.node,
    labelProps: PropTypes.object,
    id: PropTypes.string.isRequired,
    control: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
};

export default withStyles(customInputStyle)(CustomInput);
