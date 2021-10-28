import React from 'react'
import './button.style.scss'

const Button = ({children, isGoogleSignIn, invert, ...otherProps}) => (
    <button className={`
    ${invert ? 'invert' : ''}
    ${isGoogleSignIn ? 'google-sign-in' : ''} 
    button`} 
    {...otherProps}>
        {children}
    </button>
)

export default Button