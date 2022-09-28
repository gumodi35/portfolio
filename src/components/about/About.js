import React from 'react';
import './About.css';
import ME from '../../assets/me.png';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {BsFolderPlus} from 'react-icons/bs';


const About = () => {
    return (
        <section id="about">
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className='about__me-image'>
                        <img src={ME} alt="About pick" />
                    </div>
                </div>

            <div className='about__content'>
                <div className='about__cards'>
                    <article className='about__card'>
                        <FaAward className='about_icon' />
                        <h5>Experience</h5>
                        <small>1 Years Working</small>
                    </article>

                    <article className='about__card'>
                        <FiUsers className='about_icon' />
                        <h5>Clients</h5>
                        <small>10+ Worlwide</small>
                    </article>

                    <article className='about__card'>
                        <BsFolderPlus className='about_icon' />
                        <h5>Projects</h5>
                        <small>10+ Completed</small>
                    </article>
                </div>

                <p>During my apprenticeship, I have carried out projects related to web development, using MERN stack technologies. I know both client-side and server-side application development. </p>

                <a href="#contact" className="btn btn-primary">Let's Talk</a>

            </div>

            </div>
        </section>
    );
}

export default About;
