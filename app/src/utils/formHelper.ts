import { isValidControl } from "./FieldValidators";

const FormHelper = (data, form) => {
    let _f = form || {};
    Object.keys(data).forEach(key => {
        if(!_f[key]) {
            _f[key] = {value: data[key], error: false, validators: []};
        }
        _f[key].value = data[key] || '';
        _f[key]= isValidControl(_f[key]);
    });
    return _f;
};

export default FormHelper;