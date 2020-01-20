import React from 'react';
import {CustomRadioGroup} from "../CustomRadioGroup";

export default {
    component: CustomRadioGroup,
    title: 'Custom Radio Group',
};

const radios = [{label:'Black', value: '#00000'},{label:'White', value: '#FFFFF'}]

export const CustomRadioGroupStories = () => (
    <CustomRadioGroup
        labelText={'Choose a color'}
        id="typeValue"
       radios={radios}
    />
);
