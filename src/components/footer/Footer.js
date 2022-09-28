import React from 'react';
import './Footer.css';
import {ImLinkedin} from 'react-icons/im';
import {BsInstagram} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

const Footer = () => {
    return (
        <footer>
            <a href="https://github.com/gumodi35" className='footer__logo'>DevGMD</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experiencie</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Porfolio</a></li>
                <li><a href="#testimonios">Testimonials</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <div className='footer__socials'>
                <a href="https://www.linkedin.com/in/gualbertomondi/"><ImLinkedin/></a>
                <a href="https://www.instagram.com/gualbertmonti/"><BsInstagram/></a>
                <a href="https://github.com/gumodi35"><BsGithub/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; DevGMD All rights reserved.</small>
            </div>
        </footer>
    );
}

export default Footer;
