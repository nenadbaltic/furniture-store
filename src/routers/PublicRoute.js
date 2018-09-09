import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => {
    return (
        <Route {...rest} component={(props) => {
            return (
                isAuthenticated ?
                <Redirect to="/home" />
                :
                <Component {...props} />         
            )           
        }}/>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: Boolean(state.auth.uid)
    }
}

export default connect(mapStateToProps)(PublicRoute);