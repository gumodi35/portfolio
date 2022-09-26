import React from 'react';
import './Experience.css';
import {RiShieldCheckFill} from 'react-icons/ri';

const Experience = () => {
    return (
        <section id="experience">
            <h5>About my Skills</h5>
            <h2>My Experience</h2>

            <div className='container experience__container'>
                <div className='experience__frontend'>
                    <h3>Frontend Development</h3>
                <div className='experience__content'>
                    <article className='experience__details'>
                        <RiShieldCheckFill className='experience__details-icon'/>
                        <div>
                        <h4>HTML</h4>
                        <small className='text-light'>Experinced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <RiShieldCheckFill className='experience__details-icon' />
                        <div> 
                        <h4>CSS</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <RiShieldCheckFill className='experience__details-icon' />
                        <div>
                        <h4>JavaScript</h4>
                        <small className='text-light'>Experinced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <RiShieldCheckFill className='experience__details-icon' />
                        <div>
                        <h4>Bootstrap</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <RiShieldCheckFill className='experience__details-icon' />
                        <div>
                        <h4>React Js</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                </div>
                </div>
            {/* Backend Experience */}
            <div className='experience__backend'>
            <h3>Backend Development</h3>
                <div className='experience__content'>
                    <article className='experience__details'>
                        <RiShieldCheckFill className='experience__details-icon' />
                        <div>
                        <h4>Node Js</h4>
                        <small className='text-light'>Experinced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <RiShieldCheckFill className='experience__details-icon' />
                        <div>
                        <h4>Mongo DB</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <RiShieldCheckFill className='experience__details-icon'/>
                        <div>
                        <h4>Python</h4>
                        <small className='text-light'>Basic</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <RiShieldCheckFill className='experience__details-icon' />
                        <div>
                        <h4>PostgresSQL</h4>
                        <small className='text-light'>Basic</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <RiShieldCheckFill className='experience__details-icon'/>
                        <div>
                        <h4>Next Js</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                </div>
            </div>
            </div>
        </section>
    );
}

export default Experience;
