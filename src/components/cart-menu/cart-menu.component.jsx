import React from 'react'
import { connect } from 'react-redux'
import './cart-menu.style.scss'

import Button from '../button/button.component'
import CartMenuItem from '../cart-menu-item/cart-menu-item.component'

const CartMenu = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>

            {
                cartItems.map(item => (
                    <CartMenuItem key={item.id} item={item} />
                ) )
            }

            <Button>Checkout</Button>
        </div>
    </div>
)

const mapStateToProps = ({ cart: {cartItems} }) => ({
    cartItems
})

export default connect(mapStateToProps)(CartMenu)