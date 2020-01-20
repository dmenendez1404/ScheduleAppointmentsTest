import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
// core components
import {FormHelperText} from "@material-ui/core";
import {handleControlChange, getEmptyControl} from "../../utils/index";
import customInputStyle from "../../assets/jss/material-dashboard-react/components/customInputStyle";
import TextField from "@material-ui/core/TextField/TextField";


const CustomTextArea = ({...props}) => {
    const {
        classes,
        id,
        rows,
        placeholder,
        onChange,
        variant
    } = props;
    let {control = getEmptyControl()} = props;


    return (
        <FormControl
            error={control.error}
            fullWidth={true}
            className={classes.formControl}
            variant={variant}
        >
            <TextField
                id={id}
                label={placeholder}
                multiline
                rows={rows}
                value={control.value}
                onChange={(e) => handleControlChange(e, control, onChange)}
                className={classes.textField}
                margin="normal"
                variant="outlined"
            />
            {control.error ? (
                <FormHelperText id="component-error-text">{control.mensaje}</FormHelperText>
            ) : null}
        </FormControl>
    );
}

CustomTextArea.propTypes = {
    classes: PropTypes.object.isRequired,
    labelText: PropTypes.node,
    labelProps: PropTypes.object,
    id: PropTypes.string.isRequired,
    rows: PropTypes.number,
    placeholder: PropTypes.string,
    control: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
};

export default withStyles(customInputStyle)(CustomTextArea);
