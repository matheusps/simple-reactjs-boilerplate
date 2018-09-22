import React from 'react';

import './style.scss';

const Navbar = ( { theme, logo, children }) => (
    <nav className={ `navbar is-${theme}` }>
        <div className="navbar-brand">

            <span className="navbar-item">
                <img src={ logo } alt="Site Logo" width="30" height="60" />
            </span>

            <div className="navbar-burger burger" data-target="navbar">
                <span></span>
                <span></span>
                <span></span>
            </div>

        </div>

        <div id="navbar" className="navbar-menu">
            <div className="navbar-start">
                { children }
            </div>
        </div>
    </nav>
);

export default Navbar;