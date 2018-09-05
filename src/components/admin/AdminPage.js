import React from 'react';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';

const AdminPage = () => {
    return (
        <div>
            <AdminHeader />
            <div className="admin-container">
                <div className="admin-content">
                    <h1>Welcome to the Admin</h1>
                </div>
                <AdminSidebar />
            </div>
        </div>
    );
}

export default AdminPage;