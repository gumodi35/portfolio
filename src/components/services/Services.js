import React from 'react';
import './Services.css';
import {MdLibraryAddCheck} from 'react-icons/md'

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                     
                    <ul className="service__list">
                        <li>
                            <MdLibraryAddCheck className="service__list-icon" />
                            <p>Web-page Design</p>
                        </li>
                        <li>
                            <MdLibraryAddCheck className="service__list-icon" />
                            <p>Website maintenance and updating</p>
                        </li>
                        <li>
                            <MdLibraryAddCheck className="service__list-icon" />
                            <p>Creation of online stores Ecommerce</p>
                        </li>
                        <li>
                            <MdLibraryAddCheck className="service__list-icon" />
                            <p>Blogging Creation</p>
                        </li>
                        <li>
                            <MdLibraryAddCheck className="service__list-icon" />
                            <p>Website administration</p>
                        </li>
                    </ul>
                </article>

                {/* Tutorials */}
                <article className="service">
                    <div className="service__head">
                        <h3>Tutorials</h3>
                    </div>
                    
                    <ul className="service__list">
                        <li>
                            <MdLibraryAddCheck className="service__list-icon" />
                            <p>programming classes</p>
                        </li>
                        <li>
                            <MdLibraryAddCheck className="service__list-icon" />
                            <p>Support in carrying out projects</p>
                        </li>
                        <li>
                            <MdLibraryAddCheck className="service__list-icon" />
                            <p>JavaScript tutorials</p>
                        </li>
                        <li>
                            <MdLibraryAddCheck className="service__list-icon" />
                            <p>HTML tutorials</p>
                        </li>
                        <li>
                            <MdLibraryAddCheck className="service__list-icon" />
                            <p>CSS Tutorials</p>
                        </li>
                    </ul>
                </article>
                
                {/* Crating Content */}
                <article className="service">
                    <div className="service__head">
                        <h3>Content Creation</h3>
                    </div>
                    
                    <ul className="service__list">
                        <li>
                            <MdLibraryAddCheck className="service__list-icon" />
                            <p>Create programming content</p>
                        </li>
                        <li>
                            <MdLibraryAddCheck className="service__list-icon" />
                            <p>Create technology content</p>
                        </li>
                        <li>
                            <MdLibraryAddCheck className="service__list-icon" />
                            <p>Sharing information about Cloud</p>
                        </li>
                        <li>
                            <MdLibraryAddCheck className="service__list-icon" />
                            <p>Share information about Cybersecurity</p>
                        </li>
                        <li>
                            <MdLibraryAddCheck className="service__list-icon" />
                            <p>Video edition</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    );
}

export default Services;
