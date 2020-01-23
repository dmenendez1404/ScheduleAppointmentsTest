import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Dialog, CircularProgress} from '@material-ui/core';

const LoadingApp = (props: any) => {

    const {classes, open} = props;

    const dialogProps = {
        open,
        PaperProps: {className: classes.paper}
    }
    const spinnerProps = {
        size: 100,
        className: classes.progress
    }
    return (
        <Dialog {...dialogProps}>
            <CircularProgress  {...spinnerProps} />
        </Dialog>
    );
}

const styles = theme => ({
    root: {
        backgroundColor: 'transparent',
        border: 'none',
        boxShadow: 'none',
        overflow: 'unset'
    },
    progress: {}
})


export default withStyles(styles)(LoadingApp);
