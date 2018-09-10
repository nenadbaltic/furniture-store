import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../../actions/auth';

const AdminSidebar = (props) => {
    return (
        <div className="admin-sidebar">
            <h3>Manage Content</h3>
            <ul>
                <li><Link to="/admin">Home</Link></li>
                <li><Link to="/create">Add Product</Link></li>
                <li><Link to="/view">View Products</Link></li>
                <li className="admin-logout" onClick={props.startLogout}>Admin Logout</li>
             </ul>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        startLogout: () => dispatch(startLogout())
    }
}

export default connect(undefined, mapDispatchToProps)(AdminSidebar);