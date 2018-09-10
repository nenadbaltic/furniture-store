import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const AdminRoute = ({ isAdmin, component: Component, ...rest }) => {
    return (
        <Route {...rest} component={(props) => {
            return (
                isAdmin ?
                <Component {...props} />
                :
                <Redirect to="/" />
            )
            
        }}/>
    );
}

const mapStateToProps = (state) => {
    return {
        isAdmin: Boolean(state.auth.email)
    }
}

export default connect(mapStateToProps)(AdminRoute);