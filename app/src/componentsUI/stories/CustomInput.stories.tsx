import React from 'react';
import {CustomInput} from "../CustomInput";

export default {
    component: CustomInput,
    title: 'Custom Input',
};

export const customInputOutlinedStories = () => (
    <CustomInput
        labelText={'Outlined Custom Input'}
        id="typeValue"
        type='text'
        variant="outlined"
    />
);

export const customInputFilledStories = () => (
    <CustomInput
        labelText={'Filled Custom Input'}
        id="typeValue"
        type='text'
        variant="filled"
    />
);

export const customInputStandardStories = () => (
    <CustomInput
        labelText={'Standard Custom Input'}
        id="typeValue"
        type='text'
        variant="standard"
    />
);