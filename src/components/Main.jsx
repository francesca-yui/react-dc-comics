import './Main.css';

const Card = props => (
    <article id={props.comic.id} className='comic'>
        <a href="#">
            <img src={props.comic.thumb} className={props.comic.series} alt={props.comic.series}></img>
            <h3>{props.comic.series}</h3>
        </a>
    </article>
);

export const Main = props => (
    <main>
        <section className='hero-page'>
        <button className='button-section'>
            <a href="#">Current title</a>
        </button>
        </section>

        <div className='container'>
        { props.comics.map(comic => 
        <Card key={comic.id} comic={comic} />)}
        </div>
        <div className='load-more'>
            <button>
                <a href="">Load More</a>
            </button>
        </div>
    </main>
);