import React, { useState, createContext, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const LoginContext = createContext();
const ForgotPasswordContext = createContext();
const RegistrationContext = createContext();

export default function Login () {
    const [ rawInputs, setRawInputs ] = useState({})
    const [ validatedInputs, setValidatedInputs ] = useState({})

    // handle on submit
    const handleOnSubmit = ( event ) => {
        let username, password
        event.preventDefault()
        username = ( rawInputs.username != undefined ) ? rawInputs.username : 'Username cannot be empty'
        password = ( rawInputs.password != undefined ) ? rawInputs.password : 'Password cannot be empty'

        setValidatedInputs({
            username: username,
            password: password
        })
    }

    // handle on change
    const handleOnChange = ( event ) => {
        const name = event.target.name
        const value = event.target.value
        setRawInputs(values => ({...values, [name]: value}))
    }

    // login form info
    const FormInfo = () => {
        const login = useContext( LoginContext );
        return (
            <>
                <div className='login-info'>
                    <span>Username: <b>{login.username}</b></span>
                    <span>Password: <b>{login.password}</b></span>
                </div>
            </>       
        );
    }

    // Login return
    return (
        <LoginContext.Provider value={validatedInputs}>
            <div className='login-wrap'>
                <div className='login'>
                    <span className='sign-in-label'>Sign Up</span>
                    <span className='sign-in-info'>Sign in with your username and password</span>
                    <form onSubmit={handleOnSubmit}>
                        <p className='form-group'>
                            <label htmlFor='username'>Your Username</label>
                            <input type="text" name="username" id="username" placeholder="Enter Username" value={rawInputs.username || ''} onChange={handleOnChange}/>
                        </p>
                        <p className='form-group'>
                            <label htmlFor='password'>Your Password</label>
                            <input type="text" name="password" id="password" placeholder="Enter Password" value={rawInputs.password || ''} onChange={handleOnChange}/>
                        </p>
                        <div className='form-group form-meta'>
                            <div className='form-checkbox'>
                                <label htmlFor='remember-me'>Remember Me</label>
                                <input type="checkbox" name="remember-me" id="remember-me" />
                            </div>
                            <div className='forgot-password'>
                                <Link to='/forgot-password'><span className='forgot-password-label'>Forgot Password ?</span></Link>
                            </div>
                        </div>
                        <p className='form-group'>
                            <input type="submit" />
                        </p>
                        <p className='form-register'>
                            <span className="just-text">Not a Member? <Link to='/registration-form'>Register Here !</Link></span>
                        </p>
                    </form>
                </div>
                <FormInfo />
            </div>
        </LoginContext.Provider>
    );
}

export const ForgotPassword = () => {
    const [ rawInputs, setRawInputs ] = useState({})
    const [ validatedInputs, setValidatedInputs ] = useState({})

    const ForgotPasswordInfo = () => {
        const ForgotPassword = useContext( ForgotPasswordContext );
        return (
            <>
                <div className='form-info'>
                    <span>Old Password: <b>{ForgotPassword.old_password}</b></span>
                    <span>New Password: <b>{ForgotPassword.new_password}</b></span>
                </div>
            </>    
        );
    }

    // handle on change event
    const handleForgotPassword = ( event ) => {
        let name = event.target.name
        let value = event.target.value
        setRawInputs(values => ({...values, [name]: value}))
    }

    // handle on submit event
    const handleFormSubmit = ( event ) => {
        event.preventDefault()
        let old_password, new_password
        old_password = ( rawInputs.old_password != undefined ) ? rawInputs.old_password : 'Please enter your old password'
        new_password = ( rawInputs.new_password != undefined ) ? rawInputs.new_password : 'Please enter your new password'

        setValidatedInputs({
            old_password: old_password,
            new_password: new_password
        })
    }

    // ForgotPassword returns
    return (
        <ForgotPasswordContext.Provider value={validatedInputs}>
            <div className='forgot-password-form'>
                <div className="user-form">
                    <h2 className='form-label'>Reset Password</h2>
                    <form onSubmit={handleFormSubmit}>
                        <p className='form-group'>
                            <label htmlFor='old_password'>Old Password</label>
                            <input type="text" placeholder="Old Password" name="old_password" id="old_password" onChange={handleForgotPassword}/>
                        </p>
                        <p className='form-group'>
                            <label htmlFor='new_password'>New Password</label>
                            <input type="text" placeholder="New Password" name="new_password" id="new_password" onChange={handleForgotPassword}/>
                        </p>
                        <p className='form-group'>
                            <label htmlFor='conform_password'>Conform Password</label>
                            <input type="text" placeholder="Conform Password" name="conform_password" id="conform_password" onChange={handleForgotPassword}/>
                        </p>
                        <p className='form-submit-button'>
                            <input type="submit"  name="forgot_password_submit" id="forgot_password_submit"/>
                        </p>
                    </form>
                </div>
                <ForgotPasswordInfo/>
            </div>
        </ForgotPasswordContext.Provider>    
    );
}

export const RegistrationForm = () => {
    const [ rawInputs, setRawInputs ] = useState({});
    const [ validatedInputs, setValidatedInputs ] = useState({});

    // handle on submit event
    const handleOnSubmit = ( event ) => {
        event.preventDefault()
        let full_name, first_name, last_name, email, company, physical_address, date_of_birth
        first_name = ( rawInputs.first_name != undefined ) ? rawInputs.first_name : ''
        last_name = ( rawInputs.last_name != undefined ) ? rawInputs.last_name : ''
        email = ( rawInputs.email_address != undefined ) ? rawInputs.email_address : 'Please enter email'
        company = ( rawInputs.company != undefined ) ? rawInputs.company : 'Please enter first name and last name'
        physical_address = ( rawInputs.physical_address != undefined ) ? rawInputs.physical_address : 'Please enter first name and last name'
        date_of_birth = ( rawInputs.date_of_birth != undefined ) ? rawInputs.date_of_birth : 'Please enter first name and last name'
        full_name = ( first_name && last_name ) ? first_name + ' ' + last_name : 'Please enter both first name and last name'

        setValidatedInputs({
            full_name: full_name,
            email: email,
            company: company,
            physical_address: physical_address,
            date_of_birth: date_of_birth
        })
    }

    // handle on change event
    const handleOnChange = ( event ) => {
        let name = event.target.name
        let value = event.target.value
        setRawInputs(values => ({...values, [name]: value}))
    }

    // registration form info
    const RegistrationInfo = () => {
        const Registration = useContext( RegistrationContext );
        return (
            <>
                <div className='form-info'>
                    <span>Full Name: <b>{Registration.full_name}</b></span>
                    <span>Email: <b>{Registration.email}</b></span>
                    <span>Company: <b>{Registration.company}</b></span>
                    <span>Physical Address: <b>{Registration.physical_address}</b></span>
                    <span>Date of Birth: <b>{Registration.date_of_birth}</b></span>
                </div>
            </>    
        );
    }

    // RegistrationForm return
    return (
        <RegistrationContext.Provider value={validatedInputs}>
            <div className='registration-form'>
                <div className='user-form'>
                    <h2 className='form-label'>Online Registration</h2>
                    <form onSubmit={handleOnSubmit}>
                        <div className='registration-name'>
                            <p className='form-group'>
                                <label htmlFor='first_name'>First Name</label>
                                <input type="text" placeholder="First Name" name="first_name" id="first_name" onChange={handleOnChange}/>
                            </p>
                            <p className='form-group'>
                                <label htmlFor='last_name'>Last Name</label>
                                <input type="text" placeholder="Last Name" name="last_name" id="last_name" onChange={handleOnChange}/>
                            </p>
                        </div>
                        <p className='form-group'>
                            <label htmlFor='email_address'>Email Address</label>
                            <input type="email" placeholder="Email Address" name="email_address" id="email_address" onChange={handleOnChange}/>
                        </p>
                        <p className='form-group'>
                            <label htmlFor='company'>Company (if applicable)</label>
                            <input type="text" placeholder="Company" name="company" id="company" onChange={handleOnChange}/>
                        </p>
                        <p className='form-group'>
                            <label htmlFor='physical_address'>Physical Address</label>
                            <input type="text" placeholder="Physical Address" name="physical_address" id="physical_address" onChange={handleOnChange}/>
                        </p>
                        <p className='form-group'>
                            <label htmlFor='date_of_birth'>Date of Birth</label>
                            <input type="date" placeholder="" name="date_of_birth" id="date_of_birth" onChange={handleOnChange}/>
                        </p>
                        <p className='form-submit-button'>
                            <input type="submit" name="registration_submit" id="registration_submit" />
                        </p>
                    </form>
                </div>
                <RegistrationInfo/>
            </div>
        </RegistrationContext.Provider>
    );
}