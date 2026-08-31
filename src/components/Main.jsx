import './Main.css';
import { comics } from '../components/data/comics';

export const Main = () => (
    <main>
        <section className='hero-page'>
        <button className='button-section'><a href="#">Current title</a></button>
        </section>
        <div className='container'>
        { comics.map(comic => (
            <card key={comic.key} id={comic.id} className='comic'>
                <a href="#">
                    <img src={comic.thumb} className={comic.series} alt={comic.series}></img>
                    <h3>{comic.series}</h3>
                </a>
            </card>
        ))}
        </div>
        <div className='load-more'><button><a href="">Load More</a></button></div>
    </main>
);