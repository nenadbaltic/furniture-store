import React from 'react';
import { connect } from 'react-redux';
import { addItem, addQuantity } from '../actions/cart';
import { itemOrQuantity } from '../selectors/cart';


class SingleItemPage extends React.Component {
    addSome = () => {
        if(itemOrQuantity(this.props.product.id, this.props.cart)) {
            this.props.addQuantity(this.props.product.id);
            // console.log('+');
        }
        else {
            this.props.addItem(this.props.product);
            // console.log('add');
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
        addItem: (item) => dispatch(addItem(item)),
        addQuantity: (id) => dispatch(addQuantity(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleItemPage);
