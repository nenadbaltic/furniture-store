import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startRemoveProduct } from '../../actions/products'

class ViewProductItem extends React.Component {
    remove = () => {
        this.props.startRemoveProduct(this.props.id);
    }

    render() {
            return (
                <ul>
                    <li>{this.props.count}</li>
                    <li>{this.props.title}</li>
                    <li><img src={this.props.image} width="50" /></li>
                    <li><Link to={`/edit/${this.props.id}`}>Edit</Link></li>
                    <li><a onClick={this.remove}>Delete</a></li>
                </ul>
            );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        startRemoveProduct: (id) => dispatch(startRemoveProduct(id))
    }
}

export default connect(undefined, mapDispatchToProps)(ViewProductItem);