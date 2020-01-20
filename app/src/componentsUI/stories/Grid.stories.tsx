import React from 'react';
import { action } from '@storybook/addon-actions';
import {GridContainer} from "../Grid";
import GridItem from "../Grid/GridItem";

export default {
    component: GridContainer,
    title: 'Grid Stories',
};

export const gridStories = () => (
    <GridContainer >
        <GridItem item xs={12} onClick={action('clicked')}>
            Item 1
        </GridItem>
        <GridItem item xs={6} onClick={action('clicked')}>
            Item 2
        </GridItem>
        <GridItem item xs={6} onClick={action('clicked')}>
            Item 3
        </GridItem>
        <GridItem item xs={12} onClick={action('clicked')}>
            Item 4
        </GridItem>
    </GridContainer>
);