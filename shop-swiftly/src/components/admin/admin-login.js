import React from 'react'

export default function AdminLogin() {
    
    return (
        <div className='swt-admin-login' id='swt-admin-login'>
            <p className='form-field'>
                <label for='admin-username'>Username</label>
                <input type='text' name='admin-username' id='admin-username' />
            </p>
            <p className='form-field'>
                <label for='admin-password'>Password</label>
                <input type='text' name='admin-password' id='admin-password' />
            </p>
            <p className='form-field form-button'>
                <button>LOGIN</button>
            </p>
            <p className='form-field forgot-password'>
                <a href='#'>Forgot password ?</a>
            </p>
            <p className='form-field register-new-admin'>
                <a href='#'>Register a new admin</a>
            </p>
        </div>
    );
}