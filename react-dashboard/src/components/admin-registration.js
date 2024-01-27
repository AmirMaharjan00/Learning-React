import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminRegistration() {
    return(
        <div className='swt-admin-registration' id='swt-admin-registration'>
            <p className='form-field'>
                <label for='admin-registration-username'>Username</label>
                <input type='text' name='admin-registration-username' id='admin-registration-username' />
            </p>
            <p className='form-field'>
                <label for='admin-registration-password'>Password</label>
                <input type='text' name='admin-registration-password' id='admin-registration-password' />
            </p>
            
            <p className='form-field form-button'>
                <button>
                    <Link to='/swt-login'>Register</Link>
                </button>
            </p>
        </div>
    );
}