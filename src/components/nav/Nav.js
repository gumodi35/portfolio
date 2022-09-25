/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Nav.css'
import {BiHomeHeart} from 'react-icons/bi';
import {BiUserCircle} from 'react-icons/bi';
import {BsBookHalf} from 'react-icons/bs';
import {MdMiscellaneousServices} from 'react-icons/md';
import {MdContactPhone} from 'react-icons/md';
import {useState} from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeHeart /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUserCircle /></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsBookHalf /></a>
            <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdMiscellaneousServices /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContactPhone /></a>
        </nav>
    );
}

export default Nav;
