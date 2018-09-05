import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <div className="admin-sidebar">
            <h3>Manage Content</h3>
            <ul>
                <li><Link to="/create">Add Product</Link></li>
                <li><Link to="/view">View Products</Link></li>
                <li><Link to="/">Admin Logout</Link></li>
             </ul>
        </div>
    );
}

export default AdminSidebar;