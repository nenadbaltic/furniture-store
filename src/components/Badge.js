import React from 'react';
import { connect } from 'react-redux';
import { totalItems } from '../selectors/cart';

const Badge = (props) => {
    return (
        props.total ? <div className="badge">{props.total}</div> : ''
    );
}

const mapStateToProps = (state) => {
    return {
        total: totalItems(state.cart)
    }
}

export default connect(mapStateToProps)(Badge);