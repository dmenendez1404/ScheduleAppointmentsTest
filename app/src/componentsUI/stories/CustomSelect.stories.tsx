import React from 'react';
import {CustomSelect} from "../CustomSelect";

export default {
    component: CustomSelect,
    title: 'Custom Select',
};

const options = [{label:'Black', value: '#00000'},{label:'White', value: '#FFFFF'}]


export const customSelectOutlinedStories = () => (
    <CustomSelect
        labelText={'Outlined Custom Select'}
        id="typeValue"
        options={options}
        variant="outlined"
    />
);
export const customSelectFilledStories = () => (
    <CustomSelect
        labelText={'Filled Custom Select'}
        id="typeValue"
        options={options}
        variant="filled"
    />
);
export const customSelectStandardStories = () => (
    <CustomSelect
        labelText={'Standard Custom Select'}
        id="typeValue"
        options={options}
        variant="standard"
    />
);