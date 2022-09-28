import React from 'react';
import portfolio from './portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.png';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.png';

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
                    <h3>NetflixClone</h3>
                    <div className="portfolio__item-cta"> 
                    <a href="https://github.com/gumodi35/NetflixClone" className='btn'>Github</a>
                    <a href="https://gumodi35.github.io/NetflixClone/" className='btn btn-primary' target="_blanck">DEMO</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG2}/>
                    </div>
                    <h3>CloneYoutube</h3>
                    <div className="portfolio__item-cta">
                    <a href="https://github.com/gumodi35/CloneYoutube" className='btn'>Github</a>
                    <a href="https://gumodi35.github.io/CloneYoutube/" className='btn btn-primary' target="_blanck">DEMO</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG3}/>
                    </div>
                    <h3>Alura Cipher</h3>
                    <div className="portfolio__item-cta">
                    <a href="https://github.com/gumodi35/Challenge-Oracle-One_Gualberto" className='btn'>Github</a>
                    <a href="https://gumodi35.github.io/Challenge-Oracle-One_Gualberto/" className='btn btn-primary' target="_blanck">DEMO</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG4}/>
                    </div>
                    <h3>Hangman Game</h3>
                    <div className="portfolio__item-cta">
                    <a href="https://github.com/gumodi35/Challenge2-OracleOne-AhorcadoGame" className='btn'>Github</a>
                    <a href="https://gumodi35.github.io/Challenge2-OracleOne-AhorcadoGame/" className='btn btn-primary' target="_blanck">DEMO</a>
                    </div>
                </article>
                 <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG5}/>
                    </div>
                    <h3>PokedexClone</h3>
                    <div className="portfolio__item-cta">
                    <a href="https://github.com/gumodi35/Pokedex-Clone" className='btn'>Github</a>
                    <a href="https://gumodi35.github.io/Pokedex-Clone/" className='btn btn-primary' target="_blanck">DEMO</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG6}/>
                    </div>
                    <h3>Ecommerce</h3>
                    <div className="portfolio__item-cta">
                    <a href="https://github.com/gumodi35/AluraChallenge-eCommerce-Frontend" className='btn'>Github</a>
                    <a href="https://gumodi35.github.io/AluraChallenge-eCommerce-Frontend/" className='btn btn-primary' target="_blanck">DEMO</a>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Portfolio;
