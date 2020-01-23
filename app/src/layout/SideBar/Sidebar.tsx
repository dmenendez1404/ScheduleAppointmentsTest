import React, {useState} from 'react';
import clsx from 'clsx';
import {Drawer, List, ListItem, ListItemText} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import {Link} from 'react-router-dom';
import Collapse from '@material-ui/core/Collapse'
import {makeStyles} from '@material-ui/core/styles';
import globalTheme from "../../theme";
import {User} from "../../store/models/user.model";
import {useSelector} from "react-redux";
import CustomPicture from "../../componentsUI/CustomPicture/CustomPicture";

const Sidebar = (props) => {
    const user: User = useSelector((state: any) => state.app.USER)


    const classes = useStyles(globalTheme);
    const menuList = [
        {label: "Calendar", Icon: 'calendar.svg', url: "/", level: 0},
    ];

    return (
        <Drawer variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !props.open && classes.drawerPaperClose),
                }}
                open={props.open}>
            <div style={{height: 150}}>
                {user && props.open && user.banner_image &&
                <CustomPicture image={user.banner_image} type={'banner'}></CustomPicture>}
            </div>
            <h5 className={classes.menuText}>MENU</h5>
            <List className={classes.menuContainer}>
                <HandleItems items={menuList} location={props.location} open={props.open}/>
            </List>
        </Drawer>)

}
export default Sidebar;

const HandleItems = (props) => {

    const classes = useStyles(globalTheme);
    const [toogles, setToogles] = useState({})


    const handleClick = (item) => {
        setToogles(prevState => (
            {[item]: !prevState[item]}
        ))
    }

    return props.items.map((subOption, index) => {
        if (!subOption.childrens) {
            return (
                <ListItem button key={`side-menu-${index}`} to={subOption.url}
                          component={Link} className={classes.pleft32}>
                    {subOption.url === props.location.pathname &&
                    <Divider orientation={'vertical'}
                             className={classes.verticalDivider}/>}
                    {subOption.level === 0 && !!subOption.Icon &&
                    <img src={require(`../../assets/icons/${subOption.Icon}`)}
                         alt={'menuIcon'}/>}
                    <ListItemText primary={props.open ? subOption.label : ''} className={classes.itemText}/>
                </ListItem>
            )
        }
        return (
            <div key={`side-menu-${index}`}>
                <ListItem button
                          onClick={() => handleClick(subOption.label)}
                          className={classes.pleft32}>
                    {subOption.level === 0 &&
                    <img src={require(`../../assets/icons/${subOption.Icon}`)}
                         alt={'menuIcon'}/>}
                    <ListItemText primary={props.open ? subOption.label : ''} className={classes.itemText}/>
                    {toogles[subOption.label] ?
                        <ExpandLess/> :
                        <ExpandMore/>
                    }
                </ListItem>
                <Collapse
                    in={toogles[subOption.label]}
                    timeout="auto"
                    unmountOnExit
                >
                    <HandleItems items={subOption.childrens} location={props.location} open={props.open}/>
                </Collapse>
            </div>
        )
    })
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    title: {
        margin: '5%',
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    menuContainer: {
        height: `60%`,
        display: 'flex',
        flexDirection: 'column'
    },
    menuText: {
        textAlign: 'center',
        fontSize: 14,
        margin: '10% 0% 10% 0%'
    },
    itemText: {
        marginLeft: 16
    },
    verticalDivider: {
        position: 'absolute',
        left: 16,
        width: 2,
        background: '#89229b',
    },
    pleft32: {
        paddingLeft: 32,
    },
}));
