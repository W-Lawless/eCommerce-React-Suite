import React from "react";
import './checkout.style.scss'

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import CheckoutMenuItem from "../../components/checkout-menu-item/checkout-menu-item.component";

const Checkout = ({ cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        <div>
            {
                cartItems.map(item => 
                    <CheckoutMenuItem cartItem={item} key={item.id} />
                    )
            }
        </div>
        <div className='total'>
            <span>TOTAL: ${total}</span>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout)