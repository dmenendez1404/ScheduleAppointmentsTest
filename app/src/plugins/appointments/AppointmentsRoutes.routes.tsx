import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Switch } from 'react-router-dom';
import {GuestRoute} from "../../layout/routes";
import AppointmentsContainer from "./container/AppointmentsContainer";

const AppointmentsRoutesRoutes = (props: any) => {

        const { location, history, match } = this.props;

        return (
            <>
                <Switch>
                    <GuestRoute location={location} history={history} path={`${match.path}/`} Component={AppointmentsContainer} />
                </Switch>
            </>
        )
    }

const styles = theme => ({
    container: {
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            padding: '30px 10px',
        },
        [theme.breakpoints.up('md')]: {
            padding: '30px 0',
        },
    },

});


export default withStyles(styles)(AppointmentsRoutesRoutes);
