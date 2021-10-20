import React from 'react'
import Button from '../button/button.component'
import './cart-menu.style.scss'


const CartMenu = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            <Button>Checkout</Button>
        </div>
    </div>
)

export default CartMenu