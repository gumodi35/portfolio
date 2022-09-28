import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'


const HeaderSocial = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/gualbertomondi/" target="_blanck"><BsLinkedin /></a>
            <a href="https://github.com/gumodi35" target="_blanck"><BsGithub /></a>
            <a href="https://twitter.com/SrGualbert" target="_blanck"><BsTwitter /></a>
        </div>
    );
}

export default HeaderSocial;
