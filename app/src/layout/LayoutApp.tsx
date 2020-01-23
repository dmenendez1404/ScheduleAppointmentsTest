import React, {useEffect, useState} from 'react';
import {withStyles} from '@material-ui/core/styles';
import HeaderApp from './Header/HeaderApp';
import ContentApp from './ContentApp';
import Sidebar from './SideBar/Sidebar';
import LoadingApp from "./LoadingApp";
import {Snackbar} from "../componentsUI/Snackbar";
import {Slide} from "@material-ui/core";
import {useSelector} from "react-redux";
import useWindowSize from "@rehooks/window-size";

const LayoutApp = (props) => {
    const [open, setOpen] = useState(true);
    const loading = useSelector((state:any) => state.app.LOADING);
    const notifier = useSelector((state:any) => state.app.NOTIFIER);

    const size = useWindowSize();

    const {children, classes} = props;

    useEffect(() => {
       if(size.innerWidth < 775)
           setOpen(false)
        else
           setOpen(true)
    }, [size]);



    function handleSideBarChange(evt) {
        setOpen(!open);
    }

    return (
        <div className={classes.root}>
            <HeaderApp
                onSideBarChange={handleSideBarChange}
                open={open}
            />
            <Sidebar
                location={props.location}
                open={open}
            />

            <ContentApp>
                {children}
            </ContentApp>
            <LoadingApp classes={classes} open={loading}/>

            <Snackbar
                classes={classes}
                place={'br'}
                TransitionComponent={<Slide direction="up"/>}
                open={notifier.open}
                message={notifier.message}
                color={notifier.type}/>
        </div>
    )
}

const styles = theme => ({
    root: {
        display: 'flex',
    }

})

export default withStyles(styles)(LayoutApp)
