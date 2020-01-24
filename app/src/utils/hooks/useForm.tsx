import { useState, useEffect } from "react";

const useForm = (callback = (evt) => { }) => {
    const [inputs, setInputs] = useState({});
    const [valid, setValid] = useState(true);


    useEffect(() => {
        let isValid = true;
        if (Object.keys(inputs).find(k => inputs[k].error)) {
            isValid = false;
        }
        setValid(isValid);
    }, [inputs]);

    const handleSubmit = (event:any) => {
        if (event) {
            event.preventDefault();
        }
        callback(event);
    }

    const handleInputChange = (e, cb = ()=> {}) => {
        if (e.event.target.id) {
            setInputs(inputs => ({ ...inputs, [e.event.target.id]: e.control }));
        }
        cb();
    }

    const setForm = (values) => {
        setInputs(values);
    }

    const addInput = (input) => {
        setInputs({...inputs, input});

    }
    const removeInput = (key) => {
        delete inputs[key];
        setInputs(inputs);
    }

    const replaceInput = (key, input) => {
        inputs[key] = input;
        setInputs(inputs);
    }
    return {
        inputs,
        valid,
        handleInputChange,
        handleSubmit,
        setForm,
        addInput,
        removeInput,
        replaceInput
    };
}

export default useForm;