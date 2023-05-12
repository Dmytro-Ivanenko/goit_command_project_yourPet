import React from 'react';

import Header from '../Header/Header';
import styles from './sharedLayout.module.scss';
import UserRoutes from 'routes/UserRoutes';

const SharedLayout = () => {
    return (
        <div className={styles.container}>
            <Header />
            <UserRoutes />
        </div>
    );
};

export default SharedLayout;
