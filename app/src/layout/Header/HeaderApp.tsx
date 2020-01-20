import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';
import {makeStyles} from '@material-ui/core/styles';
import Divider from "@material-ui/core/Divider/Divider";
import NotificationPopover from "./NotificationsPopover";
import FeaturesPopover from "./FeaturesPopover";
import globalTheme from "../../theme";


const HeaderApp = (props:any) => {

    const classes = useStyles(globalTheme);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [anchorFeaturePopover, setAnchorFeaturePopover] = React.useState(null);

    const handleClickFeaturePopover = event => {
        setAnchorFeaturePopover(event.currentTarget);
    };

    const handleCloseFeaturePopover = () => {
        setAnchorFeaturePopover(null);
    };

    return (
        <div>
            <AppBar position="absolute" className={clsx(classes.appBar, props.open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    {
                        <IconButton
                            edge="start"
                            aria-label="open drawer"
                            onClick={props.onSideBarChange}
                            value={props.open}
                        >
                            <MenuIcon/>
                        </IconButton>
                    }
                    <Typography component="h1" variant="h6" noWrap className={classes.title}>
                    </Typography>
                    <IconButton onClick={handleClickFeaturePopover}>
                        <AppsIcon/>
                    </IconButton>
                    <FeaturesPopover anchorEl={anchorFeaturePopover}
                                     closePopover={handleCloseFeaturePopover}/>
                    <IconButton color="inherit" onClick={handleClick}>
                        <Badge badgeContent={4} color="secondary">
                            <img src={require('../../assets/icons/notification-1.svg')}
                                 alt={'notificationIcon'}/>
                        </Badge>
                        <Divider orientation={'vertical'}
                                 className={classes.verticalDivider}/>
                    </IconButton>
                    <NotificationPopover anchorEl={anchorEl} closePopover={handleClose}/>
                    <img src={require('../../assets/img/faces/marc.jpg')} alt={'userPicture'}
                         className={classes.picturePerfil}/>
                    <span>
                        <Typography component="p" variant="subtitle1"
                                    noWrap>Robert Dylan
                    </Typography>
                    </span>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default HeaderApp;

const useStyles = makeStyles(theme => ({
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        background: 'white',
        color: 'black',
    },
    appBarShift: {
        marginLeft: 240,
        width: `calc(100% - 240px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        background: 'white',
        color: 'black',
        borderLeft: '1px solid rgba(0, 0, 0, 0.12)'
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    textField: {
        border: '1px solid #707070'
    },
    picturePerfil: {
        width: 39,
        height: 39,
        borderRadius: '50%',
        marginLeft: 32,
        marginRight: 12
    },
    verticalDivider: {
        position: 'absolute',
        right: -16,
        width: 2,
        background: '#89229b',
    },

}));
