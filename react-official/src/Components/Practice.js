import React, { useState } from 'react'

export default function Practice () {
    const [ inputs, setInputs ] = useState({})
    // handle on submit
    const handleOnSubmit = ( event ) => {
        event.preventDefault()
        alert( inputs )
    }

    // handle on change
    const handleOnChange = ( event ) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
        console.log( inputs )
    }
    return (
        <>
            <div className='login'>
                <span className='sign-in-label'>Sign Up</span>
                <span className='sign-in-info'>Sign in with your username and password</span>
                <form onSubmit={handleOnSubmit}>
                    <p className='form-group'>
                        <label htmlFor='username'>Your Username</label>
                        <input type="text" name="username" id="username" placeholder="Enter Username" value={inputs.username || ''} onChange={handleOnChange}/>
                    </p>
                    <p className='form-group'>
                        <label htmlFor='password'>Your Password</label>
                        <input type="text" name="password" id="password" placeholder="Enter Password" value={inputs.password || ''} onChange={handleOnChange}/>
                    </p>
                    <div className='form-group form-meta'>
                        <div className='form-checkbox'>
                            <label htmlFor='remember-me'>Remember Me</label>
                            <input type="checkbox" name="remember-me" id="remember-me" />
                        </div>
                        <div className='forgot-password'>
                            <a href='/'><span className='forgot-password-label'>Forgot Password ?</span></a>
                        </div>
                    </div>
                    <p className='form-group'>
                        <input type="submit" />
                    </p>
                    <p className='form-register'>
                        <span className="just-text">Not a Member? <a href=''>Register Here !</a></span>
                    </p>
                </form>
            </div>
        </>
    );
}