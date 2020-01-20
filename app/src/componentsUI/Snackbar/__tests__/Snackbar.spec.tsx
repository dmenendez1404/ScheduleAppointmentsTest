import React from 'react';
import {mount} from 'enzyme';
import {Snackbar} from '..';

describe('Snackbar Component', () => {
    const props = {
        messages: 'TEST',
        place: 'tl'
    };
    it('should render Snackbar Component', () => {
        const component = mount(<Snackbar {...props}/>);
        expect(component).toMatchSnapshot();
    });


});