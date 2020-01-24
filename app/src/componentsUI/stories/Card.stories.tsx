import React from 'react';
import { action } from '@storybook/addon-actions';
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import CardBody from "../Card/CardBody";
import CardFooter from "../Card/CardFooter";

export default {
    component: Card,
    title: 'Card Stories',
};

export const cardStories = () => (
    <Card onClick={action('clicked')}>
        <CardHeader onClick={action('clicked')} color={'success'}>
            Card Header
        </CardHeader>
        <CardBody onClick={action('clicked')}>
            Card Body
        </CardBody>
        <CardFooter onClick={action('clicked')}>
            Card Footer
        </CardFooter>
    </Card>
);