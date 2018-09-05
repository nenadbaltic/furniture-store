import React from 'react';
import { connect } from 'react-redux';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import ViewProductItem from './ViewProductItem';

class ViewProducts extends React.Component {
    render() {
        return (
            <div>
                <AdminHeader />
                <div className="admin-container">
                    <div className="admin-content">
                        {
                            this.props.products.length === 0 ?
                            <h3>No Products</h3>
                            :
                            <div>
                                <h3>View All Products</h3>
                                <div className="view-products">
                                    <ul>
                                        <li>S.N</li>
                                        <li>Product Title</li>
                                        <li>Image</li>
                                        <li>Edit</li>
                                        <li>Delete</li>
                                    </ul>
                                    {
                                        this.props.products.map((product, index) => {
                                            return <ViewProductItem key={index} count={index + 1} {...product} />
                                        })
                                    }
                                </div>
                            </div>
                        }
                    </div>
                    <AdminSidebar />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(ViewProducts);