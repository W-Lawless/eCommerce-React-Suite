import React from 'react'
import { connect } from 'react-redux'
import './cart-menu.style.scss'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router'

import Button from '../button/button.component'
import CartMenuItem from '../cart-menu-item/cart-menu-item.component'

import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartMenu = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>

            {   

                cartItems.length 
                ? 
                cartItems.map(item => (
                    <CartMenuItem key={item.id} item={item} />
                ) )
                : 
                (<span className='empty-message'>Your cart is empty</span>)
            }

            <Button onClick={()=>{
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }}>Checkout</Button>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartMenu))