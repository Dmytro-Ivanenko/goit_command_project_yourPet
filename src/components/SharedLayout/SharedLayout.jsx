import React from 'react';

// import Header from '../Header/Header';
import ResponsiveAppBar from 'components/AppBar/AppBar';
import styles from './sharedLayout.module.scss';
import UserRoutes from 'routes/UserRoutes';

const SharedLayout = () => {
    return (
        <>
            <ResponsiveAppBar/>
            <div className={styles.container}>
                {/* <Header /> */}
                <UserRoutes />
            </div>
        </>
       
    );
};

export default SharedLayout;
