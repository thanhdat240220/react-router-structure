import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header(props) {
    return (
        <div className='header'>
            <div className='container'>
                <ul className='head-nav'>
                    <li><Link to='/home' className='btn'>Home </Link></li>
                    <li><Link to='/admin'>Admin</Link></li>
                    <li><Link to='/login'> Login </Link></li>
                    <li><Link to='/register'>Register</Link></li>
                </ul>
            </div>
        </div>
    );
}