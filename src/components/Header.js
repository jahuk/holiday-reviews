import React from 'react';
import Menu from './Menu';

const Header = () => (
    <header className="header">
        <a href="#" className="header__logo">
            <img src="../images/hc.svg" className="header__logo__img" alt=""/>
        </a>
        <Menu/>
    </header>
);

export default Header;