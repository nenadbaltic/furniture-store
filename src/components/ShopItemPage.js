import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startAddItem, startAddQuantity } from '../actions/cart';
import { itemOrQuantity } from '../selectors/cart';

class ShopItemPage extends React.Component {
    addSome = () => {
        if(itemOrQuantity(this.props.id, this.props.cart)) {
            let dbId;
            let q;

            // Get dbId and quantity 
            this.props.cart.forEach((item) => {
                if(item.id === this.props.id) {
                     dbId = item.dbId;
                     q = item.quantity;
                }
            })
            let quantity = q + 1;           
            this.props.startAddQuantity(dbId, quantity);
        }
        else {
            this.props.startAddItem(this.props);
        }
        
    }

    render() {
        return (
            <li>
                <Link to={`/single/${this.props.id}`} className="image-holder"><img src={this.props.image} /></Link>
                <div className="product-desc">
                    <h4>{this.props.title}</h4>
                    <div className="p-add">
                        <h5>${this.props.price}</h5>
                        <a onClick={this.addSome}>Add to Cart</a>
                    </div>
                </div>
            </li>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startAddItem: (item) => dispatch(startAddItem(item)),
        startAddQuantity: (dbId, quantity) => dispatch(startAddQuantity(dbId, quantity))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopItemPage);
