import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect, RouteProps} from 'react-router-dom';
import { useSelector } from 'react-redux'

const GuestRoute: any = ({Component = () => {} , props}: Props) => {
    const isAuthenticated = useSelector((state:any) => state.app.User) != null;
    return (
    <Route {...props} render={props => !isAuthenticated ? <Component {...props} /> : <Redirect to="/" />}>
    </Route>
    )
};
interface Props extends RouteProps {
    Component: any;
    props: any;
}
GuestRoute.propTypes = {
    component: PropTypes.func,
};

export default GuestRoute;