import './Header.css';
import { links } from '../components/data/links';

const Logo = () => (
    <img className="logo" src="assets/dc-logo.png" alt="logo dc"></img>
);

const Nav = () => (
<nav>
    <link href='https://fonts.googleapis.com/css?family=Open Sans Condensed:700' rel='stylesheet'></link>
    <ul>
    {links.map( link => (
        <li key={link.id}><a href={link.href} className={link.active ? 'active' : ''}>{link.content}</a></li>
    ))}
    </ul>
</nav>
);

export const Header = () => (
    <header>
        <Logo />
        <Nav />
    </header>
);