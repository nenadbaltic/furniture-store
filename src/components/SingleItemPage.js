import React from 'react';
import { connect } from 'react-redux';
import { startAddItem, startAddQuantity } from '../actions/cart';
import { itemOrQuantity } from '../selectors/cart';


class SingleItemPage extends React.Component {
    addSome = () => {
        if(itemOrQuantity(this.props.product.id, this.props.cart)) {
            let dbId;
            let q;

            // Get dbId and quantity 
            this.props.cart.forEach((item) => {
                if(item.id === this.props.product.id) {
                     dbId = item.dbId;
                     q = item.quantity;
                }
            })
            let quantity = q + 1;
            this.props.startAddQuantity(dbId, quantity);            
        }
        else {
            this.props.startAddItem(this.props.product);
        }      
    }

    render() {
        return (
            <div className="container">
                <div className="content-single">
                    <div className="single-left">
                        <img src={this.props.product.image} />
                    </div>
    
                    <div className="single-right">
                        <h3>{this.props.product.title}</h3>
                        <h5>${this.props.product.price}</h5>
                        <p>{this.props.product.description}</p>
                        <a onClick={this.addSome}>Add to Cart</a>			
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state, props) => {
    return {
        product: state.products.find((product) => {
            return product.id === props.match.params.id;
        }),
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startAddItem: (item) => dispatch(startAddItem(item)),
        startAddQuantity: (dbId, quantity) => dispatch(startAddQuantity(dbId, quantity))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleItemPage);
