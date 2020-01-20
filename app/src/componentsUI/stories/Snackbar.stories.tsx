import React from 'react';
import { action } from '@storybook/addon-actions';
import {Button} from "../CustomButtons";
import {Snackbar} from "../Snackbar";

export default {
    component: Snackbar,
    title: 'Snackbar Stories',
};

export const snackBarStories = () => (
    <Snackbar open={true} color={'success'} message={'Hi SnackBar Component'} place={'tr'}></Snackbar>
);