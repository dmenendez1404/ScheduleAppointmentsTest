import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
// core components
import customInputStyle from "../../assets/jss/material-dashboard-react/components/customInputStyle";
import {FormHelperText} from "@material-ui/core";
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

    const labelClasses = classNames({
        [" " + classes.labelRootError]: control.error,
    });
    const underlineClasses = classNames({
        [classes.underlineError]: control.error,
        [classes.underline]: true
    });
    const marginTop = classNames({
        [classes.marginTop]: labelText === undefined
    });

    control = isValidControl(control);

    return (
        <FormControl
            error={control.error}
            fullWidth={true}
            className={classes.formControl}
            variant={variant}
        >
            {labelText !== undefined ? (
                <InputLabel
                    className={classes.labelRoot + labelClasses}
                    htmlFor={id}
                >
                    {labelText}
                </InputLabel>
            ) : null}
            <Input
                classes={{
                    root: marginTop,
                    disabled: classes.disabled,
                    underline: underlineClasses
                }}

                id={id}
                type={type}
                value={control.value}
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
    control: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
};

export default withStyles(customInputStyle)(CustomInput);
