import React from 'react';
import CustomTextArea from "../CustomTextArea/CustomTextArea";

export default {
    component: CustomTextArea,
    title: 'Custom Text Area',
};

export const customTextAreaOutlinedStories = () => (
    <CustomTextArea
        placeholder={'Outlined Custom Text Area'}
        id="typeValue"
        type='text'
        variant="outlined"
    />
);
export const customTextAreaFilledStories = () => (
    <CustomTextArea
        placeholder={'Filled Custom Text Area'}
        id="typeValue"
        type='text'
        variant="filled"
    />
);
export const customTextAreaStandardStories = () => (
    <CustomTextArea
        placeholder={'Standard Custom Text Area'}
        id="typeValue"
        type='text'
        variant="standard"
    />
);