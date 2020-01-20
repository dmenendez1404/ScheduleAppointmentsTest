import React from 'react';
import { shallow, mount } from 'enzyme';
import {_isRequired} from "../../../utils/index";
import CustomSelect from "../CustomSelect";

describe('CustomSelect', () => {
    const radios = [{label: 'Radio 1', value: '1'},
        {label: 'Radio 2', value: '2'},
        {label: 'Radio 3', value: '3'},
    ];
    const props = {
        options:[
            {label: '10', value: 0},
            {label: '15', value: 1}
            ],
        keyValue: 'value',
        keyText: 'label',
        onChange: jest.fn(),
        radios: radios,
        labelText:'test label',
        id:'test',
        control: { value: '', error: false, validators: [_isRequired], }
    }

    it('should render CustomSelect with specifics props', () => {
        const component = shallow(<CustomSelect {...props}/>);

        expect(component).toMatchSnapshot();
        expect((component).prop('labelText')).toEqual('test label');
        expect((component).prop('id')).toEqual('test');
        expect((component).prop('keyValue')).toEqual('value');
        expect((component).prop('keyText')).toEqual('label');

    });

    it('should render textLabel prop into label in CustomSelect', () => {
        const component = mount(<CustomSelect {...props}/>);

        expect(component.find('label.MuiFormLabel-root').at(0).text()).toEqual(component.prop('labelText'))
    });
    it('should render error of control into label in CustomInput', () => {
        const props = {
            options:[
                {label: '10', value: 0},
                {label: '15', value: 1}
            ],
            keyValue: 'value',
            keyText: 'label',
            onChange: jest.fn(),
            radios: radios,
            labelText:'test label',
            id:'test',
            control: { value: '', error: true, validators: [_isRequired], }
        }

        const component = mount(<CustomSelect {...props}/>);

        expect(component.exists('#component-error-text')).toEqual(true)
    });
});