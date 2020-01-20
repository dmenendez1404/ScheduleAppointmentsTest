import React from 'react';
import {  mount } from 'enzyme';
import CustomRadioGroup from '../CustomRadioGroup';
import {_isRequired} from "../../../utils/index";
import CustomInput from "../../CustomInput/CustomInput";

describe('CustomRadioGroup', () => {
    const radios = [{label: 'Radio 1', value: '1'},
        {label: 'Radio 2', value: '2'},
        {label: 'Radio 3', value: '3'},
    ];
    const props = {
        name: 'test-radio-group',
        onChange: jest.fn(),
        radios: radios,
        labelText:'test label',
        id:'test',
        type: 'text',
        variant : 'outlined',
        control: { value: '', error: false, validators: [_isRequired], }
    }

    it('should render CustomRadioGroup with specifics props', () => {
        const component = mount(<CustomRadioGroup {...props}/>);

        expect(component).toMatchSnapshot();
        expect((component).prop('labelText')).toEqual('test label');
        expect((component).prop('id')).toEqual('test');
        expect((component).prop('variant')).toEqual('outlined');
    });

    it('should render textLabel prop into label in CustomRadioGroup', () => {
        const component = mount(<CustomRadioGroup {...props}/>);

        expect(component.find('.MuiFormControlLabel-label').at(0).text()).toEqual('Radio 1')
    });
    it('should render error of control into label in CustomInput', () => {
        const props = {
            name: 'test-radio-group',
            onChange: jest.fn(),
            radios: radios,
            labelText:'test label',
            id:'test',
            type: 'text',
            variant : 'outlined',
            control: { value: '', error: true, validators: [_isRequired], }
        }

        const component = mount(<CustomInput {...props}/>);

        expect(component.exists('#component-error-text')).toEqual(true)
    });
});