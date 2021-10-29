import React from "react";
import './cart-menu-item.style.scss'

const CartMenuItem = ({ item: {imageUrl, price, name, quantity} }) => (
    <div className='cart-menu-item'>
        <img src={imageUrl} alt='Product' />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x ${price}</span>
        </div>
    </div>
)

export default CartMenuItem

