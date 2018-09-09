import React from 'react';
import { connect } from 'react-redux';
import { subTotal } from '../selectors/cart';
import { startAddQuantity, startRemoveQuantity, startRemoveItem } from '../actions/cart';

class ShoppinCartItem extends React.Component {
    startAddQuantity = () => {
        let quantity = this.props.quantity + 1;
        this.props.startAddQuantity(this.props.dbId, quantity);
    }
    startRemoveQuantity = () => {
        let quantity = this.props.quantity -1;
        this.props.startRemoveQuantity(this.props.dbId, quantity);
    }
    startRemoveItem = () => {
        this.props.startRemoveItem(this.props.dbId);
    }

    render() {
        return (
            <ul>
                <li>{this.props.title}</li>
                <li>${this.props.price}</li>
                <li>{this.props.quantity}</li>
                <li>${this.props.subTotal}</li>
                <li>
                    <i onClick={this.startAddQuantity} className="fas fa-plus-square"></i>
                    <i onClick={this.startRemoveQuantity} id={this.props.quantity > 1 ? 'allowed' : 'disabled'} className="fas fa-minus-square"></i>
                    <i onClick={this.startRemoveItem} className="fas fa-window-close"></i>
                </li>
            </ul>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        subTotal: subTotal(state.cart, props.id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startAddQuantity: (dbId, quantity) => dispatch(startAddQuantity(dbId, quantity)),
        startRemoveQuantity: (dbId, quantity) => dispatch(startRemoveQuantity(dbId, quantity)),
        startRemoveItem: (dbId) => dispatch(startRemoveItem(dbId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppinCartItem);

