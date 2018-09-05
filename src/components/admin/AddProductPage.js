import React from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import { startAddProduct } from '../../actions/products'


class AddProductPage extends React.Component {
    onSubmit = (product) => {
        this.props.startAddProduct(product);
        this.props.history.push('/view');
    }

    render() {
        return (
            <div>
                <AdminHeader />
                <div className="admin-container">
                    <div className="admin-content">
                        <Form onSubmit={this.onSubmit}/>
                    </div>
                 <AdminSidebar />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startAddProduct: (product) => dispatch(startAddProduct(product))
    }
}

export default connect(undefined, mapDispatchToProps)(AddProductPage);

