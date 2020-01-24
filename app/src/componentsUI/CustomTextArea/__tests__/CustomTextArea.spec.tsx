import React from 'react';
import {shallow, mount} from 'enzyme';
import CustomTextArea from '../CustomTextArea';
import {_isRequired} from "../../../utils/index";

describe('CustomTextArea', () => {
    const props = {
        labelText: 'test label',
        id: 'test',
        type: 'text',
        variant: 'outlined',
        onChange: jest.fn(),
        control: {value: '', error: false, validators: [_isRequired],}
    }

    it('should render CustomTextArea with specifics props', () => {
        const component = shallow(<CustomTextArea {...props}/>);

        expect(component).toMatchSnapshot();
        expect((component).prop('labelText')).toEqual('test label');
        expect((component).prop('id')).toEqual('test');
        expect((component).prop('variant')).toEqual('outlined');
    });

    it('should render without textLabel prop ', () => {
        const newProps = {
            id: 'test',
            type: 'text',
            variant: 'outlined',
            onChange: jest.fn(),
            control: {value: '', error: false, validators: [_isRequired],}
        }
        const component = mount(<CustomTextArea {...newProps}/>);
        expect(component).toMatchSnapshot();
    });


    it('should render error of control into label in CustomTextArea', () => {
        const props = {
            labelText: 'test label',
            id: 'test',
            type: 'text',
            variant: 'outlined',
            onChange: jest.fn(),
            control: {value: '', error: true, validators: [_isRequired],}
        }

        const component = mount(<CustomTextArea {...props}/>);

        expect(component.exists('#component-error-text')).toEqual(true)
    });

});