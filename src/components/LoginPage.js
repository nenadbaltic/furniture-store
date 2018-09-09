import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const LoginPage = (props) => {
    return (
        <div className="bg">
            <div className="login">
                <h1>Furniture Store</h1>
                <button onClick={props.startLogin}>Login with Google</button>
            </div>
        </div>
        
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: () => dispatch(startLogin())
    }
}

export default connect(undefined, mapDispatchToProps)(LoginPage);