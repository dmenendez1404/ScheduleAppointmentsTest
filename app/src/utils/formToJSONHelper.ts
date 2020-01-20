const FormToJSONHelper = (form:any) => {
    let _d:any = {};
    Object.keys(form).forEach(key => {
        _d[key] = form[key].value;
    });
    return _d;
};

export default FormToJSONHelper;