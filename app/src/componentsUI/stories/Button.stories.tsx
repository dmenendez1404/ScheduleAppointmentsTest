import React from 'react';
import { action } from '@storybook/addon-actions';
import {Button} from "../CustomButtons";

export default {
    component: Button,
    title: 'Button Stories',
};

export const buttonStories = () => (
    <Button onClick={action('clicked')} color={'success'} size={'lg'} round={true}>Aceptar</Button>
);