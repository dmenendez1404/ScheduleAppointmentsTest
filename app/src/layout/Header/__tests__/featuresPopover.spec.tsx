import React from 'react';
import { mount } from 'enzyme';
import FeaturesPopover from "../FeaturesPopover";

describe('FeaturesPopover Component', () => {
    const props = {

    };
    it('should render FeaturesPopover Component', () => {
        const component = mount(<FeaturesPopover {...props}/>);
        expect(component).toMatchSnapshot();
    });

});