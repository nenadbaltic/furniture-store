import React from 'react';
import { connect } from 'react-redux';
import { subTotal } from '../selectors/cart';
import { addQuantity, removeQuantity, removeItem } from '../actions/cart';

class ShoppinCartItem extends React.Component {
    addQuantity = () => {
        this.props.addQuantity(this.props.id);
    }
    removeQuantity = () => {
        this.props.removeQuantity(this.props.id);
    }
    removeItem = () => {
        this.props.removeItem(this.props.id);
    }

    render() {
        return (
            <ul>
                <li>{this.props.title}</li>
                <li>${this.props.price}</li>
                <li>{this.props.quantity}</li>
                <li>${this.props.subTotal}</li>
                <li>
                    <i onClick={this.addQuantity} className="fas fa-plus-square"></i>
                    <i onClick={this.removeQuantity} id={this.props.quantity > 1 ? 'allowed' : 'disabled'} className="fas fa-minus-square"></i>
                    <i onClick={this.removeItem} className="fas fa-window-close"></i>
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
        addQuantity: (id) => dispatch(addQuantity(id)),
        removeQuantity: (id) => dispatch(removeQuantity(id)),
        removeItem: (id) => dispatch(removeItem(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppinCartItem);

