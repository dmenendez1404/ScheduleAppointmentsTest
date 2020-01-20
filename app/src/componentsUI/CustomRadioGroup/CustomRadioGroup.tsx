import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
// core components
import {FormHelperText} from "@material-ui/core";
import {isValidControl} from "../../utils/FieldValidators";
import {handleControlChange, getEmptyControl} from "../../utils/index";
import FormLabel from "@material-ui/core/FormLabel/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Radio from "@material-ui/core/Radio/Radio";
import customInputStyle from "../../assets/jss/material-dashboard-react/components/customInputStyle";


const CustomRadioGroup = ({...props}) => {
    const {
        classes,
        labelText,
        id,
        name,
        onChange,
        radios
    } = props;
    let {control = getEmptyControl()} = props;

    const labelClasses = classNames({
        [" " + classes.labelRootError]: control.error,
    });

    control = isValidControl(control);

    return (
        <FormControl component="fieldset" >
            {labelText !== undefined ? (
                    <FormLabel component="legend" className={classes.labelRoot + labelClasses}>{labelText}</FormLabel>) :
                null}
            <RadioGroup aria-label={name} name={name} id={id} 
                        value={control.value} onChange={(e) => { e.target.id= id; handleControlChange(e, control, onChange);}}>
                {radios.map((radio:any) =>
                    <FormControlLabel value={radio.value} control={<Radio/>} label={radio.label}/>
                )}
            </RadioGroup>
            {
                control.error ? (
                    <FormHelperText id="component-error-text">{control.mensaje}</FormHelperText>
                ) : null
            }
        </FormControl>

)
    ;
}

CustomRadioGroup.propTypes = {
    classes: PropTypes.object.isRequired,
    labelText: PropTypes.node,
    labelProps: PropTypes.object,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    control: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    radios: PropTypes.array.isRequired
};

export default withStyles(customInputStyle)(CustomRadioGroup);
