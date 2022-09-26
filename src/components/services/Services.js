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
                            <p>Lorem, ipsum sit a met consectetur elit</p>
                        </li>
                        <li>
                            <MdLibraryAddCheck className="service__list-icon" />
                            <p>Lorem, ipsum sit a met consectetur elit</p>
                        </li>
                        <li>
                            <MdLibraryAddCheck className="service__list-icon" />
                            <p>Lorem, ipsum sit a met consectetur elit</p>
                        </li>
                        <li>
                            <MdLibraryAddCheck className="service__list-icon" />
                            <p>Lorem, ipsum sit a met consectetur elit</p>
                        </li>
                        <li>
                            <MdLibraryAddCheck className="service__list-icon" />
                            <p>Lorem, ipsum sit a met consectetur elit</p>
                        </li>
                        <li>
                            <MdLibraryAddCheck className="service__list-icon" />
                            <p>Lorem, ipsum sit a met consectetur elit</p>
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
                            <p>Lorem, ipsum sit a met consectetur elit</p>
                        </li>
                        <li>
                            <MdLibraryAddCheck className="service__list-icon" />
                            <p>Lorem, ipsum sit a met consectetur elit</p>
                        </li>
                        <li>
                            <MdLibraryAddCheck className="service__list-icon" />
                            <p>Lorem, ipsum sit a met consectetur elit</p>
                        </li>
                        <li>
                            <MdLibraryAddCheck className="service__list-icon" />
                            <p>Lorem, ipsum sit a met consectetur elit</p>
                        </li>
                        <li>
                            <MdLibraryAddCheck className="service__list-icon" />
                            <p>Lorem, ipsum sit a met consectetur elit</p>
                        </li>
                        <li>
                            <MdLibraryAddCheck className="service__list-icon" />
                            <p>Lorem, ipsum sit a met consectetur elit</p>
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
                            <p>Lorem, ipsum sit a met consectetur elit</p>
                        </li>
                        <li>
                            <MdLibraryAddCheck className="service__list-icon" />
                            <p>Lorem, ipsum sit a met consectetur elit</p>
                        </li>
                        <li>
                            <MdLibraryAddCheck className="service__list-icon" />
                            <p>Lorem, ipsum sit a met consectetur elit</p>
                        </li>
                        <li>
                            <MdLibraryAddCheck className="service__list-icon" />
                            <p>Lorem, ipsum sit a met consectetur elit</p>
                        </li>
                        <li>
                            <MdLibraryAddCheck className="service__list-icon" />
                            <p>Lorem, ipsum sit a met consectetur elit</p>
                        </li>
                        <li>
                            <MdLibraryAddCheck className="service__list-icon" />
                            <p>Lorem, ipsum sit a met consectetur elit</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    );
}

export default Services;
