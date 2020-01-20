import React from 'react';
import { mount } from 'enzyme';
import CardAvatar from '../CardAvatar';

describe('CardAvatar', () => {

    it('should render plain cardAvatar', () => {
        const component = mount(<CardAvatar plain={true} />);

        expect(component).toMatchSnapshot();
    });

    it('should render chart cardAvatar', () => {
        const component = mount(<CardAvatar chart={true} />);

        expect(component).toMatchSnapshot();
    });
});