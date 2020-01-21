import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import {
    KeyboardTimePicker, MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import {FormHelperText} from "@material-ui/core";
// core components
import customInputStyle from "../../assets/jss/material-dashboard-react/components/customInputStyle";
import {isValidControl} from "../../utils/FieldValidators";
import {handleControlChange, getEmptyControl} from "../../utils/index";
import DaysUtils from '@date-io/dayjs'

const CustomTimePicker = ({...props}) => {
    const {
        labelText,
        id,
        onChange,
        variant = 'outlined',
    } = props;
    let {control = getEmptyControl()} = props;

    control = isValidControl(control);

    return (
            <MuiPickersUtilsProvider utils={DaysUtils}>
            <KeyboardTimePicker
                id={id}
                label={labelText}
                value={control.value}
                inputVariant={variant}
                onChange={(e) => handleControlChange({target:{value: e, id: id}}, control, onChange)}
                KeyboardButtonProps = {{
                    'aria-label': 'change time',
                }}
            />
            {control.error ? (
                <FormHelperText id="component-error-text">{control.mensaje}</FormHelperText>
            ) : null}
            </MuiPickersUtilsProvider>
    );
}

CustomTimePicker.propTypes = {
    classes: PropTypes.object.isRequired,
    labelText: PropTypes.node,
    labelProps: PropTypes.object,
    id: PropTypes.string.isRequired,
    control: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
};

export default withStyles(customInputStyle)(CustomTimePicker);
