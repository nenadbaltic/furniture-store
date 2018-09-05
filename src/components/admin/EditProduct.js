import React from 'react';
import { connect } from 'react-redux';
import EditForm from './EditForm';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import { startEditProduct } from '../../actions/products'


class EditProduct extends React.Component {
    onSubmit = (product) => {
        this.props.startEditProduct(this.props.product.id, product);
        this.props.history.push('/view');
    }

    render() {
        return (
            <div>
                <AdminHeader />
                <div className="admin-container">
                    <div className="admin-content">
                        <EditForm product={this.props.product} onSubmit={this.onSubmit} />
                    </div>
                 <AdminSidebar />
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state, props) => {
    return {
        product: state.products.find((product) => {
            return product.id === props.match.params.id;
        })
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startEditProduct: (id, product) => dispatch(startEditProduct(id, product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);