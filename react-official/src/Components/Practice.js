import React, { useState, createContext, useContext } from 'react'

const UserContext = createContext();

export default function Practice () {
    const [ rawInputs, setRawInputs ] = useState({})
    const [ validatedInputs, setValidatedInputs ] = useState({})

    // handle on submit
    const handleOnSubmit = ( event ) => {
        let username, password
        event.preventDefault()
        if( rawInputs.username != '' ) {
            // username = rawInputs.username.test(/[a-z]/) ? rawInputs.username : 'Username cannot be empty'
            username = rawInputs.username
        }
        if( rawInputs.password != '' ) {
            password = (rawInputs.password)
        }
        // console.log( username )
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
    return (
        <UserContext.Provider value={validatedInputs}>
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
                <FormInfo />
            </div>
        </UserContext.Provider>
    );
}

const FormInfo = () => {
    const user = useContext(UserContext);
    return (
        <>
            <div className='login-info'>
                <span>Username: {user.username}</span>
                <span>Password: {user.password}</span>
            </div>
        </>       
    );
}