import React from 'react';

const Menu = () => (
    <section className="menu">
        <nav>
            <ul className="menu__list">
                <li className="menu__list__item"><a href="#" className="menu__list__item__link">Dashboard</a></li>
                <li className="menu__list__item menu__list__item--active"><a href="#" className="menu__list__item__link">Reviews</a></li>
                <li className="menu__list__item"><a href="#" className="menu__list__item__link">Hotel Manager</a></li>
                <li className="menu__list__item"><a href="#" className="menu__list__item__link">Settings</a></li>
            </ul>
        </nav>
    </section>
);

export default Menu;