import React from 'react'
import './sign-in.style.scss'

import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'

import { auth, signInWithGoogle } from '../../firebase/firebase.util'

class SignIn extends React.Component {
    constructor(props){
        
        super(props)
        
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()
        const { email, password } = this.state
        
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: '', password: ''})
        } catch (err) {
            console.error(err)
        }
    }

    handleInput = event => {
        const { value, name } = event.target

        this.setState({ [name]: value})
    }

    render(){
        return (
            <div className="sign-in">
                <h2 className="title">Already have an acccount?</h2>
                <span>Sign in with your email and password:</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label="email" type="email" name="email" value={this.state.email} required handleChange={this.handleInput} />
                    <FormInput label="password" type="password" name="password" value={this.state.password} required handleChange={this.handleInput} />
                    <div className='btn-div'>
                        <Button type="submit">Sign In</Button> 
                        <Button type='button' onClick={signInWithGoogle} isGoogleSignIn>Sign In W/ Google</Button> 
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn