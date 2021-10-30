import React from "react";
import './checkout-menu-item.style.scss'

import { connect } from "react-redux";
import { clearItem, decrementItem, incrementItem } from "../../redux/cart/cart.actions";

const CheckoutMenuItem = ({ cartItem, clearItem, decrementItem, incrementItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt="Item" />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => decrementItem(cartItem)}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={() => incrementItem(cartItem)}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10006;</div>
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItem(item)),
    decrementItem: item => dispatch(decrementItem(item)),
    incrementItem: item => dispatch(incrementItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutMenuItem)