import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import styles from './sharedLayout.module.scss';

const SharedLayout = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Outlet />
        </div>
    );
};

export default SharedLayout;
