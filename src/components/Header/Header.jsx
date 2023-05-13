import React from 'react';
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import styles from './header.module.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            <NavLink to="/">{'LOGO  (nav to main page)'}</NavLink>

            <NavLink to="/news">News</NavLink>
            <NavLink to="/notices">Find pet</NavLink>
            <NavLink to="/friends">Our friends</NavLink>

            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Registration</NavLink>
            <NavLink to="/user">UserName</NavLink>
        </div>
    );
};

export default Header;
