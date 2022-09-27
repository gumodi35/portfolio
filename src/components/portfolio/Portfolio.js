import React from 'react';
import portfolio from './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

/* const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Crypto Currency Dashboard & Financial Visualization',
        github: '',
        demo: ''
    },
    {
        id: 2,
        image: IMG1,
        title: 'Crypto Currency Dashboard & Financial Visualization',
        github: '',
        demo: ''
    },
    {
        id: 3,
        image: IMG1,
        title: 'Crypto Currency Dashboard & Financial Visualization',
        github: '',
        demo: ''
    },
    {
        id: 4,
        image: IMG1,
        title: 'Crypto Currency Dashboard & Financial Visualization',
        github: '',
        demo: ''
    },
    {
        id: 5,
        image: IMG1,
        title: 'Crypto Currency Dashboard & Financial Visualization',
        github: '',
        demo: ''
    },{
        id: 6,
        image: IMG1,
        title: 'Crypto Currency Dashboard & Financial Visualization',
        github: '',
        demo: ''
    }
] */
{/* <div className ="container porfolio__container">
    {
        data.map(({id, image, title, github, demo}) => {
            return(
                <article key={id} className="porfolio__item">
                    <div className="portfolio__item-image">
                        <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio__item-cta">
                    <a href={github} className="btn" target="_blanck">Github</a>
                    <a href={demo} className="btn btn-primary" target="_blanck">DEMO</a>
                    </div>
                </article>
            )
        })
    }
</div> */}


const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG1}/>
                    </div>
                    <h3>Portfolio Item</h3>
                    <div className="portfolio__item-cta"> 
                    <a href="" className='btn'>Github</a>
                    <a href="" className='btn btn-primary' target="_blanck">DEMO</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG2}/>
                    </div>
                    <h3>Portfolio Item</h3>
                    <div className="portfolio__item-cta">
                    <a href="" className='btn'>Github</a>
                    <a href="" className='btn btn-primary' target="_blanck">DEMO</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG3}/>
                    </div>
                    <h3>Portfolio Item</h3>
                    <div className="portfolio__item-cta">
                    <a href="" className='btn'>Github</a>
                    <a href="" className='btn btn-primary' target="_blanck">DEMO</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG4}/>
                    </div>
                    <h3>Portfolio Item</h3>
                    <div className="portfolio__item-cta">
                    <a href="" className='btn'>Github</a>
                    <a href="" className='btn btn-primary' target="_blanck">DEMO</a>
                    </div>
                </article>
                 <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG5}/>
                    </div>
                    <h3>Portfolio Item</h3>
                    <div className="portfolio__item-cta">
                    <a href="" className='btn'>Github</a>
                    <a href="" className='btn btn-primary' target="_blanck">DEMO</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG6}/>
                    </div>
                    <h3>Portfolio Item</h3>
                    <div className="portfolio__item-cta">
                    <a href="" className='btn'>Github</a>
                    <a href="" className='btn btn-primary' target="_blanck">DEMO</a>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Portfolio;
