import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import {
    KeyboardDatePicker, MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import {FormHelperText} from "@material-ui/core";
import MomentUtils from '@date-io/moment';
// core components
import customInputStyle from "../../assets/jss/material-dashboard-react/components/customInputStyle";
import {isValidControl} from "../../utils/FieldValidators";
import {handleControlChange, getEmptyControl} from "../../utils/index";

/*.MuiInputLabel-outlined .MuiInputLabel-outlined*/

const CustomDatePicker = ({...props}) => {
    const {
        classes,
        labelText,
        id,
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
        >
            <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardDatePicker
                id={id}
                label={labelText}
                format={'DD/MM/YYYY'}
                value={control.value}
                inputVariant={variant}
                onChange={(e) => handleControlChange({target:{value: e, id: id}}, control, onChange)}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
            {control.error ? (
                <FormHelperText id="component-error-text">{control.mensaje}</FormHelperText>
            ) : null}
            </MuiPickersUtilsProvider>
        </FormControl>
    );
}

CustomDatePicker.propTypes = {
    classes: PropTypes.object.isRequired,
    labelText: PropTypes.node,
    labelProps: PropTypes.object,
    id: PropTypes.string.isRequired,
    control: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
};

export default withStyles(customInputStyle)(CustomDatePicker);
