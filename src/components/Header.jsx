import './Header.css';

const Logo = () => (
    <img className="logo" src="assets/dc-logo.png" alt="logo dc"></img>
);

const Nav = () => (
<nav>
    <link href='https://fonts.googleapis.com/css?family=Open Sans Condensed:700' rel='stylesheet'></link>
    <ul>
    <li><a href="#">Characters</a></li>
    <li><a href="#" className='active'>Comics</a></li>
    <li><a href="#">Movies</a></li>
    <li><a href="#">Tv</a></li>
    <li><a href="#">Games</a></li>
    <li><a href="#">Collectibles</a></li>
    <li><a href="#">Videos</a></li>
    <li><a href="#">Fans</a></li>
    <li><a href="#">News</a></li>
    <li><a href="#">Shop</a></li>
    </ul>
</nav>
);

export const Header = () => (
    <header>
        <Logo />
        <Nav />
    </header>
);