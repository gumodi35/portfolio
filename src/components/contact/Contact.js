import React from 'react';
import './Contact.css';
import {HiOutlineMail} from 'react-icons/hi';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_sa3930e', 'template_3vhx5jo', form.current, 'jSzd4Q5UK_EuyEZ_D')
        
        e.target.reset()
      };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <HiOutlineMail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>gumodi10@gmail.com</h5>
                        <a href="mailto:gumodi10@gmail.com" target="_blank">Send a Message</a>
                    </article>
                    <article className='contact__option'>
                        <AiOutlineInstagram className='contact__option-icon' />
                        <h4>Instagram</h4>
                        <h5>Sr.Gualbert</h5>
                        <a href="https://www.instagram.com/gualbertmonti/" target="_blank">Send a Message</a>
                    </article>
                    <article className='contact__option'>
                        <AiOutlineTwitter className='contact__option-icon' />
                        <h4>Twitter</h4>
                        <h5>Sr.Gualbert</h5>
                        <a href="https://twitter.com/SrGualbert" target="_blank">Send a Message</a>
                    </article>
                </div>
        {/* END OF CONTACT OPTIONS */}
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder='Your full Name' required/>
                <input type="email" name="email" placeholder='Your Email' required/>
                <textarea name="message" rows="7" placeholder="Yor Message" required></textarea>
                <button type="submit" className='btn btn-primary'>Send a Message</button>
            </form>
            </div>
        </section>
    );
}

export default Contact;
