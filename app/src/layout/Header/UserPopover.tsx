import React from 'react';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import ClearIcon from '@material-ui/icons/Clear';
import {Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton/IconButton";
import {GridContainer, GridItem} from "../../componentsUI/Grid";
import globalTheme from "../../theme";
import {SwapHoriz} from "@material-ui/icons";
import {CustomPicture} from "../../componentsUI/CustomPicture";

const UserPopover = (props: any) => {

    const classes = useStyles(globalTheme);
    const user = props.user;
    const open = Boolean(props.anchorEl);
    const id = open ? 'user-popover' : undefined;
    return (<Popover
        id={id}
        open={open}
        anchorEl={props.anchorEl}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
    >
        <Box p={1}>
            <GridContainer
                  className={classes.containerFeatures}>
                <GridItem item xs={12}>
                    <IconButton color="inherit" className={classes.closePopover}
                                onClick={props.closePopover}>
                        <ClearIcon/>
                    </IconButton>
                    <Typography component="p" variant="h6" align={"center"}
                                noWrap>User Info
                    </Typography>
                    <IconButton color="inherit" className={classes.changeUser}
                                onClick={props.onChangeUser}>
                        <SwapHoriz/>
                    </IconButton>
                </GridItem>
                <GridItem item xs={5}>
                    <Box className={classes.featureContainer}>
                        <CustomPicture image={user.profile_image} type={'profile'} width={90} heigth={90}/>
                    </Box>
                </GridItem>
                <GridItem item xs={6}>
                        <Typography component="p" variant="subtitle2"
                                    noWrap>name:</Typography>
                        <Typography component="p" variant="subtitle1"
                                    noWrap>{user ? user.name : 'Username'}</Typography>
                        <Typography component="p" variant="subtitle2"
                                    noWrap>from:</Typography>
                        <Typography component="p" variant="subtitle1"
                                    noWrap>{user ? user.location : ''}</Typography>
                </GridItem>
            </GridContainer>
        </Box>
    </Popover>)
}


export default UserPopover;

const useStyles = makeStyles((theme) => ({
    containerFeatures: {
        width: 320,
        padding: 8,
        margin: 0
    },
    infoUser: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 8
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 8
    },
    closePopover: {
        position: 'absolute',
        left: 12,
        top: 12,
    },
    changeUser: {
        position: 'absolute',
        right: 12,
        top: 12,
    },
    featureContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    p12:{
        padding:12
    }
}));
