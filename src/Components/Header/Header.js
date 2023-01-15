import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'
import logo from './logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [open,setOpen]= useState(false);
    const navigate = useNavigate();
    return (
        <div className='header'>
        <div className='mobile-nav'>
        <img onClick={()=>navigate('/home')} className='logo' src={logo} alt="" />
        <FontAwesomeIcon onClick={()=>setOpen(!open)} className='bar' icon={faBars}></FontAwesomeIcon>
        </div>
            <div className={`navLinks ${open?"show" : "hide"}`}>
            <Link to='/home'>Home</Link>
            <Link to='/appointment'>Appointment</Link>
            <Link to='/reviews'>Reviews</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact Us</Link>
            <Link to='/login'>Login</Link>
            </div>
        </div>
    );
};

export default Header;