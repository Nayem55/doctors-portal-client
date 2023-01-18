import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'
import logo from './logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [open,setOpen]= useState(false);
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const handleSignOut=()=>{
        signOut(auth)
    }
    return (
        <div className='header'>
        <div className='mobile-nav'>
        <img onClick={()=>navigate('/home')} className='logo' src={logo} alt="" />
        <FontAwesomeIcon onClick={()=>setOpen(!open)} className='bar' icon={faBars}></FontAwesomeIcon>
        </div>
            <div className={`navLinks ${open?"show" : "hide"}`}>
            <Link to='/home'>Home</Link>
            <Link to='/appointment'>Appointment</Link>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact Us</Link>
            {
                user? <Link to='/login' onClick={handleSignOut}>Log out</Link> : <Link to='/login'>Login</Link>

            }
            </div>
        </div>
    );
};

export default Header;