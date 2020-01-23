import React, {useCallback, useEffect, useRef} from 'react';
import {_isRequired, FormToJSONHelper, useForm} from "../../../utils";
import GridContainer from "../../../componentsUI/Grid/GridContainer";
import {GridItem} from "../../../componentsUI/Grid";
import {Card, CardBody, CardFooter, CardHeader} from "../../../componentsUI/Card";
import {CustomInput} from "../../../componentsUI/CustomInput";
import {Button} from "../../../componentsUI/CustomButtons";
import CustomTextArea from "../../../componentsUI/CustomTextArea/CustomTextArea";
import CustomDatePicker from "../../../componentsUI/CustomDatePicker/CustomDatePicker";
import CustomTimePicker from "../../../componentsUI/CustomTimePicker/CustomTimePicker";
import CustomSelect from "../../../componentsUI/CustomSelect/CustomSelect";
import moment from "moment";
import CustomColorPicker from "../../../componentsUI/CustomColorPicker/CustomColorPicker";

const AppointmentFormModal = (props) => {

    const {inputs, valid, handleInputChange, handleSubmit, setForm}: any = useForm(saveData);

    const mounted = useRef(false);

    const loadEmptyForm = useCallback(function EmptyForm() {
        return {
            _id:{value: props.event._id || null, error: false, validators: []},
            title: {value: props.event.title || '', error: false, validators: [_isRequired]},
            description: {value: props.event.description || '', error: false, validators: []},
            date: {value: moment(props.event.start), error: false, validators: [_isRequired]},
            clothing: {value: props.event.clothing || '', error: false, validators: [_isRequired]},
            color: {value: props.event.color || '#265985', error: false, validators: [_isRequired]},
            start: {value: moment(props.event.start), error: false, validators: [_isRequired]},
            end: {value:  moment(props.event.end), error: false, validators: [_isRequired]},
            createdAt: {value: props.event.createdAt || moment(), error: false, validators: []},
            updatedAt: {value:  moment(), error: false, validators: []},
        };
    },[props]);

    useEffect(() => {
        if (!mounted.current) {
            setForm(loadEmptyForm());
        }
        mounted.current = true;
    }, [setForm, props, mounted, loadEmptyForm]);

    function saveData(e) {
        const data = FormToJSONHelper(inputs);
        const {date, start, end} = data;
        data.start = moment(date).set({hour: start.hour(), minute: start.minute})
        data.end = moment(date).set({hour: end.hour(), minute: end.minute})
        props.onSubmit(data);
        props.referenceToSwal.close();
    }

    const handleCancel = () => {
        props.referenceToSwal.close();
    }

    const handleDelete = () => {
        props.onRemove(props.event._id);
        props.referenceToSwal.close();
    }

    const clothing = [
        {label: 'Formal', value: 'formal'},
        {label: 'Informal', value: 'informal'},
        {label: 'Sports', value: 'sports'},
    ];

    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="info">
                        <h4 style={{
                            color: "#FFFFFF",
                            marginTop: "0px",
                            minHeight: "auto",
                            fontWeight: 300,
                            fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
                            marginBottom: "3px",
                            textDecoration: "none"
                        }}>{props.title}</h4>
                        <p style={{
                            color: "rgba(255,255,255,.62)",
                            margin: "0",
                            fontSize: "14px",
                            marginTop: "0",
                            marginBottom: "0"
                        }}>
                            {'Complete Form'}
                        </p>
                    </CardHeader>
                    <CardBody>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={7}>
                                <CustomInput
                                    labelText="Title"
                                    id="title"
                                    onChange={handleInputChange}
                                    type='text'
                                    control={inputs.title}
                                />
                            </GridItem>
                            <GridItem xs={6} sm={12} md={5}>
                                <CustomDatePicker
                                    labelText="Date"
                                    id="date"
                                    onChange={handleInputChange}
                                    control={inputs.date}
                                />
                            </GridItem>
                            <GridItem xs={4} sm={12} md={3}>
                                <CustomTimePicker
                                    labelText="Start Time"
                                    id="start"
                                    onChange={handleInputChange}
                                    control={inputs.start}
                                />
                            </GridItem>
                            <GridItem xs={4} sm={12} md={3}>
                                <CustomTimePicker
                                    labelText="End Time"
                                    id="end"
                                    name="end"
                                    onChange={handleInputChange}
                                    control={inputs.end}
                                />
                            </GridItem>
                            <GridItem xs={4} sm={12} md={3}>
                                <CustomSelect
                                    labelText="Clothing"
                                    id="clothing"
                                    name="clothing"
                                    onChange={handleInputChange}
                                    control={inputs.clothing}
                                    options={clothing}
                                >
                                </CustomSelect>
                            </GridItem>
                            <GridItem xs={4} sm={12} md={3}>
                                <CustomColorPicker
                                    labelText="Choose a Color"
                                    id="color"
                                    name="color"
                                    onChange={handleInputChange}
                                    control={inputs.color}
                                >
                                </CustomColorPicker>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12}>
                                <CustomTextArea
                                    placeholder="Description"
                                    id="description"
                                    rows={3}
                                    onChange={handleInputChange}
                                    type='text'
                                    control={inputs.description}
                                />
                            </GridItem>

                        </GridContainer>
                    </CardBody>
                    <CardFooter>
                        <div>
                            <Button color="info" onClick={handleCancel}>Cancel</Button>
                            {props.event._id &&
                            <Button color="danger" onClick={handleDelete}>Delete</Button>
                            }
                        </div>
                        <Button color="success" disabled={!valid} onClick={handleSubmit}>Save</Button>
                    </CardFooter>
                </Card>
            </GridItem>
        </GridContainer>

    )
}

export default AppointmentFormModal;
