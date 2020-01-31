import React from 'react';
import {shallow, mount} from 'enzyme';
import CustomInput from '../CustomInput';
import {_isRequired} from "../../../utils/index";

describe('CustomInput', () => {
    const props = {
        labelText: 'test label',
        id: 'test',
        type: 'text',
        variant: 'outlined',
        onChange: jest.fn(),
        control: {value: '', error: false, validators: [_isRequired],}
    }

    it('should render CustomInput with specifics props', () => {
        const component = mount(<CustomInput {...props}/>);

        expect(component).toMatchSnapshot();
        expect((component).prop('labelText')).toEqual('test label');
        expect((component).prop('id')).toEqual('test');
        expect((component).prop('variant')).toEqual('outlined');
    });

    it('should render textLabel prop into label in CustomInput', () => {
        const component = mount(<CustomInput {...props}/>);

        expect(component.find('.MuiInputLabel-outlined').at(0).text()).toEqual(component.prop('labelText'))
    });

    it('should render without textLabel prop ', () => {
        const newProps = {
            id: 'test',
            type: 'text',
            variant: 'outlined',
            onChange: jest.fn(),
            control: {value: '', error: false, validators: [_isRequired],}
        }
        const component = mount(<CustomInput {...newProps}/>);
        expect(component).toMatchSnapshot();
    });

    it('should render input with specific value prop', () => {
        const component = mount(<CustomInput {...props}/>);
        expect(component.find('input').text()).toEqual(component.prop('control').value)
    });


    it('should render error of control into label in CustomInput', () => {
        const props = {
            labelText: 'test label',
            id: 'test',
            type: 'text',
            variant: 'outlined',
            onChange: jest.fn(),
            control: {value: '', error: true, dirty: true, validators: [_isRequired],}
        }

        const component = mount(<CustomInput {...props}/>);

        expect(component.exists('#component-error-text')).toEqual(true)
    });

});