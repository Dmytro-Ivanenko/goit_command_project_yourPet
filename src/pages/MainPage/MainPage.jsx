import React from 'react';

// import Image from '../../components/Image/Image';

import styles from './MainPage.module.scss';

const MainPage = () => {
    return (
        <>
            <div className={styles.mainPageWrapper}>
                <h1 className={styles.mainPageText}>Take good care of your small pets</h1>
                <img src="../../images/pictures-desktop.jpg" alt="pet" />
                {/* <Image /> */}
            </div>
        </>
    );
};

export default MainPage;
