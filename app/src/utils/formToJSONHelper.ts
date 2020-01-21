//import moment from "moment";

const FormToJSONHelper = (form:any) => {
    let _d:any = {};
    Object.keys(form).forEach(key => {
        if (form[key].value)
        _d[key] = form[key].value;
    });
    return _d;
};

export default FormToJSONHelper;