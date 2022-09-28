import React from 'react';
import './Header.css';
import CTA from './CTA';
import MERN from '../../assets/mern.png';
import HeaderSocial from './HeaderSocial';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Gualberto</h1>
                <h5 className='text-light'>Fullstack Developer<span>&#160;</span></h5>
                <CTA />
                <HeaderSocial />
                
                <div className="me">
                    <img src={MERN} alt="me" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    );
}

export default Header;
