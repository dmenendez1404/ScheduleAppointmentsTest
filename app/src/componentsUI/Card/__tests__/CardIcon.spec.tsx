import React from 'react';
import { mount } from 'enzyme';
import CardIcon from '../CardIcon';
import classNames from "classnames";

describe('CardIcon', () => {
    const cardIconClasses = classNames({
        ['myClass']: true,
        ["successCardHeader"]: 'success',
        ['myClass']: 'myClass' !== undefined
    });
    it('should render CardHeader with specific color', () => {
        const component = mount(<CardIcon className={cardIconClasses} />);

        expect(component.hasClass('myClass')).toEqual(true)
        expect(component.hasClass('successCardHeader')).toEqual(true)
    });
});