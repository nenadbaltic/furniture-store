import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem, addQuantity } from '../actions/cart';
import { itemOrQuantity } from '../selectors/cart';

class ShopItemPage extends React.Component {
    addSome = () => {
        if(itemOrQuantity(this.props.id, this.props.cart)) {
            this.props.addQuantity(this.props.id);
            // console.log('+');
        }
        else {
            this.props.addItem(this.props);
            // console.log('add');
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
        addItem: (item) => dispatch(addItem(item)),
        addQuantity: (id) => dispatch(addQuantity(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopItemPage);
