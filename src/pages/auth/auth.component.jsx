import React from 'react'
import './auth.style.scss'
import SignIn from '../../components/sign-in/sign-in.component'
import Register from '../../components/register/register.component'

const AuthPage = () => {
    return (<div className="auth">
        <SignIn />
        <Register />
    </div>)
}

export default AuthPage