import React from 'react';

import desktop1x from '../../images/background/PictureMainPage-desktop1x.png';
import desktop2x from '../../images/background/PictureMainPage-desktop2x.png';
import mobile1x from '../../images/background/PictureMainPage-mobile1x.png';
import mobile2x from '../../images/background/PictureMainPage-mobile2x.png';
import tablet1x from '../../images/background/PictureMainPage-tablet1x.png';
import tablet2x from '../../images/background/PictureMainPage-tablet2x.png';

import styles from './MainPage.module.scss';

const MainPage = () => {
    return (
        <>
            <div className={styles.mainPageWrapper}>
                <h1 className={styles.mainPageText}>Take good care of your small pets</h1>

                <picture>
                    <source srcSet={(mobile1x, mobile2x)} media="(max-width: 767px)" type="image/png" />

                    <source
                        srcSet={(tablet1x, tablet2x)}
                        media="(min-width: 768px) and (max-width: 1279px)"
                        type="image/png"
                    />
                    <source srcSet={(desktop1x, desktop2x)} media="(min-width: 1280px)" type="image/png" />

                    {/* <source srcSet={mobile} media="(max-width: 767px)" /> */}
                    {/* <source srcSet={tablet} media="(min-width: 768px) and (max-width: 1279px)" /> */}
                    {/* <source srcSet={desktop} media="(min-width: 1280px)" /> */}
                    <img className={styles.imgMainPage} src={desktop1x} alt="Cute puppy" />
                </picture>
            </div>
        </>
    );
};

export default MainPage;
