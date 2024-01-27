import React from 'react'
import { Link } from 'react-router-dom';

export default function AdminLogin() {
    return (
        <div className='swt-admin-login' id='swt-admin-login'>
            <h2 className='title'>Login</h2>
            <p className='form-field'>
                <label for='admin-username'>Username</label>
                <input type='text' name='admin-username' id='admin-username' />
            </p>
            <p className='form-field'>
                <label for='admin-password'>Password</label>
                <input type='text' name='admin-password' id='admin-password' />
            </p>
            <p className='form-field form-button'>
                <button>
                    <Link to='/swt-admin'>LOGIN</Link>
                </button>
            </p>
            <p className='form-field forgot-password'>
                <Link to='/swt-admin/swt-forgot-password'>Forgot password ?</Link>
            </p>
            <p className='form-field register-new-admin'>
                <Link to='/swt-admin/swt-registration'>Register a new admin</Link>
            </p>
        </div>
    );
}