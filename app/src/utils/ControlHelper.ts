import {isValidControl} from './FieldValidators'

export const getEmptyControl = () => {
    return {
        value: '', message: '', validators: [], error: false
    }
}
export const handleControlChange = (event: any, control: any, callback: any) => {
    if(event.target.persist)
        event.persist();
        control.value = event.target.value;
        control = isValidControl(control);
        return callback({event, control});
}