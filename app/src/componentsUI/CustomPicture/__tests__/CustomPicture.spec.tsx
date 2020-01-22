import React from 'react';
import {mount} from 'enzyme';
import {_isRequired} from "../../../utils/index";
import CustomPictureComponent from "../CustomPicture";

describe('CustomPictureComponent', () => {
    const props = {
        labelText: 'test label',
        id: 'test',
        type: 'text',
        variant: 'outlined',
        onChange: jest.fn(),
        control: {value: '', error: false, validators: [_isRequired],}
    }

    it('should render CustomPicture with specifics props', () => {
        const component = mount(<CustomPictureComponent {...props}/>);

        expect(component).toMatchSnapshot();
        expect((component).prop('labelText')).toEqual('test label');
        expect((component).prop('id')).toEqual('test');
        expect((component).prop('variant')).toEqual('outlined');
    });

    it('should render textLabel prop into label in CustomInput', () => {
        const component = mount(<CustomPictureComponent {...props}/>);

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
        const component = mount(<CustomPictureComponent {...newProps}/>);
        expect(component).toMatchSnapshot();
    });

    it('should render input with specific value prop', () => {
        const component = mount(<CustomPictureComponent {...props}/>);
        expect(component.find('input').text()).toEqual(component.prop('control').value)
    });


    it('should render error of control into label in CustomInput', () => {
        const props = {
            labelText: 'test label',
            id: 'test',
            type: 'text',
            variant: 'outlined',
            onChange: jest.fn(),
            control: {value: '', error: true, validators: [_isRequired],}
        }

        const component = mount(<CustomPictureComponent {...props}/>);

        expect(component.exists('#component-error-text')).toEqual(true)
    });

});