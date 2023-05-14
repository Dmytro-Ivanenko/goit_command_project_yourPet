import React from 'react';

// import Image from '../../components/Image/Image';

import desktop from '../../images/pictures-desktop.jpg';
import mobile from '../../images/pictures-mobile.jpg';
import tablet from '../../images/pictures-tablet.jpg';

import styles from './MainPage.module.scss';

const MainPage = () => {
    return (
        <>
            <div className={styles.mainPageWrapper}>
                <h1 className={styles.mainPageText}>Take good care of your small pets</h1>

                <picture>
                    <source srcSet={mobile} media="(max-width: 767px)" />
                    <source srcSet={tablet} media="(min-width: 768px) and (max-width: 1199px)" />
                    <source srcSet={desktop} media="(min-width: 1200px)" />
                    <img src={desktop} alt="Cute puppy" />
                </picture>
            </div>
        </>
    );
};

export default MainPage;
