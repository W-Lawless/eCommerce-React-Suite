import React from "react";
import './checkout-menu-item.style.scss'

import { connect } from "react-redux";

const CheckoutMenuItem = ({ cartItem: { name, imageUrl, price, quantity}}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt="Item" />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div className='remove-button'>&#10006;</div>
    </div>
)

export default connect()(CheckoutMenuItem)