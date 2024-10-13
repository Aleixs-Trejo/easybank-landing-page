// Hooks
import { useState } from 'react';

// Assets
import headerLogo from '../assets/logo.svg';
import iconHamburger from '../assets/icon-hamburger.svg';
import iconClose from '../assets/icon-close.svg';

// CSS
import '../css/Header.css';

// Components
import NavList from './NavList';
import Cta from './Cta';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return(
    <header className="header">
      <div className="header__container container">
        <a href="/" className="header__logo">
          <figure className="header__logo__figure">
            <img src={headerLogo} alt="Easybank logo" />
          </figure>
        </a>
        <button className="flex-c-c header__btn" onClick={() => setIsOpen(!isOpen)}>
          <figure className="header__burger__figure">
            <img src={isOpen ? iconClose : iconHamburger} alt="Easybank logo" />
          </figure>
        </button>
        <nav className={`nav__menu ${isOpen ? 'nav__menu--open' : ''}`}>
          <ul className="nav__menu__list">
            <NavList route="/" text="Home" />
            <NavList route="#" text="About" />
            <NavList route="#" text="Contact" />
            <NavList route="#" text="Blog" />
            <NavList route="#" text="Careers" />
          </ul>
        </nav>
        <Cta
          route="#"
          text="Request Invite"
        />
      </div>
    </header>
  );
};

export default Header;