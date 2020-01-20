import React, {useState} from 'react';
import {withStyles} from '@material-ui/core/styles';
import HeaderApp from './Header/HeaderApp';
import ContentApp from './ContentApp';
import Sidebar from './SideBar/Sidebar';
// import {useSelector} from 'react-redux';
// import {Slide} from '@material-ui/core';
// import {Snackbar} from "../componentsUI/Snackbar";

const LayoutApp = (props) => {
    const [open, setOpen] = useState(true);
    // const loading = useSelector(state => state.app.LOADING);
    // const notifier = useSelector(state => state.app.NOTIFIER);

    function handleSideBarChange(evt) {
        setOpen(!open);
    }

    const {children, classes} = props;

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
            {/*<LoadingApp classes={classes} open={loading}/>*/}

            {/*<Snackbar*/}
                {/*classes={classes}*/}
                {/*place={'br'}*/}
                {/*TransitionComponent={<Slide direction="up"/>}*/}
                {/*open={notifier.open}*/}
                {/*message={notifier.message}*/}
                {/*color={notifier.type}/>*/}
        </div>
    )
}

const styles = theme => ({
    root: {
        display: 'flex',
    }

})

export default withStyles(styles)(LayoutApp)
