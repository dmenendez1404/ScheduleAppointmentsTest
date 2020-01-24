import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';// @material-ui/icons
// core components
import {FormHelperText, makeStyles} from "@material-ui/core";
import {handleControlChange, getEmptyControl} from "../../utils/index";
import customInputStyle from "../../assets/jss/material-dashboard-react/components/customInputStyle";
import globalTheme from "../../theme";


function CustomSelect({...props}) {
    const {
        labelText,
        id,
        options,
        keyValue='value',
        keyText='label',
        onChange,
        variant = 'outlined',
    } = props;

    let {control = getEmptyControl()} = props;
    const inputLabel = React.useRef<HTMLLabelElement>(null);

    const classes = useInputLabelStyle(globalTheme);

        return (
        <FormControl
            error={control.error}
            fullWidth={true}
            variant={variant}
        >
            {labelText !== undefined ? (
                <InputLabel classes={{
                    outlined: classes.outlined
                }}
                    ref={inputLabel} id="label"
                >
                    {labelText}
                </InputLabel>
            ) : null}
            <Select
                id={id}
                labelId={'label'}
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
    control: PropTypes.object,
    variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
};

export default withStyles(customInputStyle)(CustomSelect);

const useInputLabelStyle = makeStyles({
    outlined: {
        background: 'white !important',
    }
});