import './Header.css';

const Logo = () => (
    <img className="logo" src="assets/dc-logo.png" alt="logo dc"></img>
);

const NavLink = props => (
    <li key={props.link.id}>
        <a
            href={props.link.href}
            className={props.link.active ? 'active' : undefined}
        >
            {props.link.content}
    </a>
    </li>
);

export const Header = props => (
    <header>
        <Logo />
        <nav>
            <link href='https://fonts.googleapis.com/css?family=Open Sans Condensed:700' rel='stylesheet'></link>
            <ul>
                {props.links.map(link => 
                <NavLink key={link.id} 
                link={link} />)}
            </ul>
        </nav>
    </header>
);