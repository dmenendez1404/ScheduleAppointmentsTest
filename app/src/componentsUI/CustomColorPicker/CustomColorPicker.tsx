import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import {FormHelperText} from "@material-ui/core";
// core components
import customInputStyle from "../../assets/jss/material-dashboard-react/components/customInputStyle";
import {isValidControl} from "../../utils/FieldValidators";
import {handleControlChange, getEmptyControl} from "../../utils/index";
import ColorPicker from "material-ui-color-picker";

/*.MuiInputLabel-outlined .MuiInputLabel-outlined*/

const CustomColorPicker = ({...props}) => {
    const {
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
            variant={variant}
        >
            <ColorPicker
                id={id}
                defaultValue={'#265985'}
                value={control.value}
                variant={variant}
                label={labelText}
                onChange={(e) => handleControlChange({target:{value: e, id: id}}, control, onChange)}
            />
            {control.error ? (
                <FormHelperText id="component-error-text">{control.mensaje}</FormHelperText>
            ) : null}
        </FormControl>
    );
}

CustomColorPicker.propTypes = {
    classes: PropTypes.object.isRequired,
    labelText: PropTypes.node,
    labelProps: PropTypes.object,
    id: PropTypes.string.isRequired,
    control: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
};

export default withStyles(customInputStyle)(CustomColorPicker);
