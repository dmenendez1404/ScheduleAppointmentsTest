import React from 'react';
import {Snackbar} from "../Snackbar";

export default {
    component: Snackbar,
    title: 'Snackbar Stories',
};

export const snackBarStories = () => (
    <Snackbar open={true} color={'success'} message={'Hi SnackBar Component'} place={'tr'}></Snackbar>
);