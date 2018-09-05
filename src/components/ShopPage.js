import React from 'react';
import { connect } from 'react-redux';
import ShopItemPage from './ShopItemPage';

const ShopPage = (props) => {
    return (
        <div className="container">
            <div className="content content-full">
                {
                    props.products.length === 0 ?
                    <h3>No Products</h3>
                    :
                    <div>
                        <h3>All Products</h3>
                        <ul>
                            {
                                props.products.map((product, index) => {
                                    return <ShopItemPage key={index} {...product} />
                                })
                            }
                        </ul>
                    </div>
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(ShopPage);
