import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import './header.style.scss'

import { auth } from '../../firebase/firebase.util'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartMenu from '../cart-menu/cart-menu.component'

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors'

const Header = ({currentUser, hidden}) => {
    console.log(hidden)
    return (
    <div className="header">
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            {
                currentUser ? 
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='auth'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartMenu />
        }
    </div>
    )
}


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)