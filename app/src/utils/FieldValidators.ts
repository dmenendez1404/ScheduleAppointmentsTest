import Validator from 'validator';
import { VALIDATOR_MESSAGES } from '.';

export const isValidControl = (control:any) => {
    for(let i=0; i < control.validators.length; i++) { 
        control.error = false; 
        control.mensaje = '';      
        control = control.validators[i](control);
        if(control.error) {
            return control;
        }

    }
    return control;
}

export const _isEmpty = (control:any) => {
    if(Validator.isEmpty(control.value)) {
        control.error = true;
        control.mensaje = VALIDATOR_MESSAGES.Required_field;
    }
    return control;
}

export const _isEmail = (control:any) => {
    if(!Validator.isEmail(control.value)) {
        control.error = true;
        control.mensaje = VALIDATOR_MESSAGES.Email_wrong_format;
    }
    return control;
}
export const _isRequired = (control:any) => {
    if(control.value === null || control.value === undefined || control.value === '') {
        control.error = true;
        control.mensaje =  VALIDATOR_MESSAGES.Required_field;
    }
    return control;
}



