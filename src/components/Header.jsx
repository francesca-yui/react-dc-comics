import './Header.css';

const Logo = () => (
    <img className="logo" src="assets/dc-logo.png" alt="logo dc"></img>
);

const links = [
    { id: 1, href: '#', content:'Characters', active: false },
    { id: 2, href: '#', content:'Comics', active: true },
    { id: 3, href: '#', content:'Movie', active: false },
    { id: 4, href: '#', content:'Tv', active: false },
    { id: 5, href: '#', content:'Games', active: false },
    { id: 6, href: '#', content:'Collectibles', active: false },
    { id: 7, href: '#', content:'Video', active: false },
    { id: 8, href: '#', content:'Fans', active: false },
    { id: 9, href: '#', content:'News', active: false },
    { id: 10, href: '#', content:'Shop', active: false },
];

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