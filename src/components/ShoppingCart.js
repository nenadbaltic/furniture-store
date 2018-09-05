import React from 'react';
import { connect } from 'react-redux';
import ShoppingCartItem from './ShoppingCartItem';
import { totalItems, totalPrice } from '../selectors/cart';

class ShoppingCart extends React.Component {
    render() {
        return (
            <div>
                <div className="container checkout">
                    {
                        this.props.cart.length === 0 ?
                        <div className="empty-cart">
                            <div className="s-cart"><i className="fas fa-shopping-cart"></i></div>
                            <h2>Your cart is empty</h2>
                            <button onClick={(e) => this.props.history.push('/shop')}>Keep Shopping</button>
                        </div>
                        :
                        <div>
                            <h3>Shopping Cart</h3>
                            <div className="cart">
                                <ul>
                                    <li>Product</li>
                                    <li>Price</li>
                                    <li>Quantity</li>
                                    <li>Sub-total</li>
                                </ul>
                                {
                                    this.props.cart.map((item, index) => {
                                        return <ShoppingCartItem key={index} {...item} />
                                    })
                                }
                            </div>   
                            <div className="cart-total">
                                <h2>Cart Totals</h2>
                                <ul>
                                    <li>
                                        <h4>Items:</h4>
                                        <h5>{this.props.total}</h5>
                                    </li>
                                    <li>
                                        <h4>Order Total:</h4>
                                        <h5>${this.props.totalPrice}</h5>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        total: totalItems(state.cart),
        totalPrice: totalPrice(state.cart)
    }
}

export default connect(mapStateToProps)(ShoppingCart);