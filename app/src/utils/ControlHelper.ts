import {isValidControl} from './FieldValidators'

export const getEmptyControl = () => {
    return {
        value: '', mensaje: '', validators: [], error: false
    }
}
export const handleControlChange = (event: any, control: any, callback: any) => {
    event.persist();
    control.value = event.target.value;
    control = isValidControl(control);
    return callback({event, control});
}