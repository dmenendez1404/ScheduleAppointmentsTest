import React, {useCallback, useEffect} from 'react';
import {withStyles} from '@material-ui/core/styles';
import { CircularProgress} from '@material-ui/core';
import withReactContent from "sweetalert2-react-content";
import swal from "sweetalert2";

const LoadingApp = (props: any) => {

    const {classes, open} = props;


    const SwalWithReactContent = withReactContent(swal);


    const spinnerProps = {
        size: 100,
        className: classes.progress
    }

    const showLoading =  useCallback(() => {
        SwalWithReactContent.fire({
            html: (
                <CircularProgress  {...spinnerProps} />
            ),
            showConfirmButton: false,
            width: '65%',
            background: 'transparent'
        });
    },[SwalWithReactContent, spinnerProps])

    useEffect(()=>{
        if(open)
            showLoading()
        else{
            SwalWithReactContent.close()
        }
    },[open, SwalWithReactContent, showLoading])

    return (
            <></>
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
