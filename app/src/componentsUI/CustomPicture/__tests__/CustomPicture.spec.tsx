import React from 'react';
import {mount} from 'enzyme';
import {_isRequired} from "../../../utils/index";
import CustomPictureComponent from "../CustomPicture";

describe('CustomPictureComponent', () => {
    const props = {
        labelText: 'test label',
        id: 'test',
        type: 'profile',
        image: {
            small:"https://images.unsplash.com/profile-1557568482234-4744c6b90987?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
            medium:"https://images.unsplash.com/profile-1557568482234-4744c6b90987?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
            large:"https://images.unsplash.com/profile-1557568482234-4744c6b90987?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
        },
        onChange: jest.fn(),
        control: {value: '', error: false, validators: [_isRequired],}
    }

    it('should render CustomPicture with profile type', () => {
        const component = mount(<CustomPictureComponent {...props}/>);

        expect(component).toMatchSnapshot();
        expect((component).prop('type')).toEqual('profile');
        expect((component).prop('id')).toEqual('test');
    });

    it('should render CustomPicture with banner type', () => {
       const props2 = {
            labelText: 'test label',
            id: 'test',
            type: 'banner',
            image: {
                raw: "https://images.unsplash.com/photo-1577303909762-9153604f4276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMjEyNH0",
                full:"https://images.unsplash.com/photo-1577303909762-9153604f4276?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjExMjEyNH0",
                regular:"https://images.unsplash.com/photo-1577303909762-9153604f4276?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExMjEyNH0",
                small:"https://images.unsplash.com/photo-1577303909762-9153604f4276?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjExMjEyNH0",
                thumb:"https://images.unsplash.com/photo-1577303909762-9153604f4276?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjExMjEyNH0",

            },
        }
        const component = mount(<CustomPictureComponent {...props2}/>);

        expect(component).toMatchSnapshot();
    });

});