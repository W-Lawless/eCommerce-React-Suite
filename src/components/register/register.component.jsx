import React from 'react'

import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.util'

import './register.style.scss'

class Register extends React.Component {

    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state


        if(password !== confirmPassword){
            alert('Password mismatch.')
            return
        }

        try{

            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, { displayName })

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })



        } catch(err){
            console.error(err)
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value})
    }

    render(){
        const { displayName, email, password, confirmPassword } = this.state
        return(
            <div className='sign-up'>
                <h2 className='title'>Create a new account:</h2>
                <span>New email & password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        label='@Handle'
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='E-Mail'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        label='Confirm Password'
                        onChange={this.handleChange}
                        required
                    />
                    <Button type='submit'> Register Your Account</Button>
                </form>
            </div>
        )
    }
    
}

export default Register