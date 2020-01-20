import React from 'react';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import ClearIcon from '@material-ui/icons/Clear';
import {Box} from '@material-ui/core';
import Skeleton from 'react-loading-skeleton';
import {makeStyles} from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton/IconButton";
import { GridContainer, GridItem} from "../../componentsUI/Grid";
import globalTheme from "../../theme";

const NotificationPopover = (props) => {

    const classes = useStyles(globalTheme);
    const open = Boolean(props.anchorEl);
    const id = open ? 'notification-popover' : undefined;
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
            <GridContainer className={classes.containerFeatures}>
                <GridItem item xs={12}>
                    <IconButton color="inherit" className={classes.closePopover}
                                onClick={props.closePopover}>
                        <ClearIcon/>
                    </IconButton>
                    <Typography component="p" variant="h6" align={"center"}
                                noWrap>Notifications
                    </Typography>
                </GridItem>
                <GridItem item xs={12}>
                    <Typography component="p" variant="subtitle1"
                                className={classes.pleft12}
                                noWrap>News
                    </Typography>
                    <Box display={'flex'}>
                        <GridItem item xs={3}>
                            <Skeleton circle={true} height={38} width={38}/>
                        </GridItem>
                        <GridItem item xs={8}>
                            <Skeleton count={2}/>
                        </GridItem>
                    </Box>
                    <Box display={'flex'}>
                        <GridItem item xs={3}>
                            <Skeleton circle={true} height={38} width={38}/>
                        </GridItem>
                        <GridItem item xs={8}>
                            <Skeleton count={2}/>
                        </GridItem>
                    </Box>
                </GridItem>
                <GridItem item xs={12}>
                    <Typography component="p" variant="subtitle1"
                                className={classes.pleft12} noWrap>Before
                    </Typography>
                    <Box display={'flex'}>
                        <GridItem item xs={3}>
                            <Skeleton circle={true} height={38} width={38}/>
                        </GridItem>
                        <GridItem item xs={8}>
                            <Skeleton count={2}/>
                        </GridItem>
                    </Box>
                    <Box display={'flex'}>
                        <GridItem item xs={3}>
                            <Skeleton circle={true} height={38} width={38}/>
                        </GridItem>
                        <GridItem item xs={8}>
                            <Skeleton count={2}/>
                        </GridItem>
                    </Box>
                    <Box display={'flex'}>
                        <GridItem item xs={3}>
                            <Skeleton circle={true} height={38} width={38}/>
                        </GridItem>
                        <GridItem item xs={8}>
                            <Skeleton count={2}/>
                        </GridItem>
                    </Box>
                </GridItem>
            </GridContainer>
        </Box>
    </Popover>)
}


export default NotificationPopover;

const useStyles = makeStyles(theme => ({
    containerFeatures: {
        width: 320,
        padding: 8,
        margin: 0
    },
    m0: {
        margin: 0
    },
    infoUser: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 8
    },
    closePopover: {
        position: 'absolute',
        left: 12,
        top: 12,
    },
    pleft12:{
        paddingLeft:12
    }
}));
