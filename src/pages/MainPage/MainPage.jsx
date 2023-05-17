import React from 'react';

import desktop from '../../images/mainPage-pictures-desktop.jpg';
import mobile from '../../images/mainPage-pictures-mobile.jpg';
import tablet from '../../images/mainPage-pictures-tablet.jpg';

import styles from './MainPage.module.scss';

const MainPage = () => {
    return (
        <>
            <div className={styles.mainPageWrapper}>
                <h1 className={styles.mainPageText}>Take good care of your small pets</h1>

                <picture>
                    <source srcSet={mobile} media="(max-width: 767px)" />
                    <source srcSet={tablet} media="(min-width: 768px) and (max-width: 1279px)" />
                    <source srcSet={desktop} media="(min-width: 1280px)" />
                    <img className={styles.imgMainPage} src={desktop} alt="Cute puppy" />
                </picture>
            </div>
        </>
    );
};

export default MainPage;
