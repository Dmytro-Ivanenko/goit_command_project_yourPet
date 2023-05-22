import React from 'react';

import desktop from '../../images/background/mainPage-pictures-desktop.jpg';
import desktop1xjpg from '../../images/background/PictureMainPage-desktop1xjpg.jpg';
import desktop3xjpg from '../../images/background/PictureMainPage-desktop3xjpg.jpg';
import desktop1xwebp from '../../images/background/PictureMainPage-desktop1xwebp.webp';
import desktop3xwebp from '../../images/background/PictureMainPage-desktop3xwebp.webp';
import mobile1xjpg from '../../images/background/PictureMainPage-mobile1xjpg.jpg';
import mobile2xjpg from '../../images/background/PictureMainPage-mobile2xjpg.jpg';
import mobile1xwebp from '../../images/background/PictureMainPage-mobile1xwebp.webp';
import mobile2xwebp from '../../images/background/PictureMainPage-mobile2xwebp.webp';
import tablet1xjpg from '../../images/background/PictureMainPage-tablet1xjpg.jpg';
import tablet2xjpg from '../../images/background/PictureMainPage-tablet2xjpg.jpg';
import tablet1xwebp from '../../images/background/PictureMainPage-tablet1xwebp.webp';
import tablet2xwebp from '../../images/background/PictureMainPage-tablet2xwebp.webp';

import styles from './MainPage.module.scss';

const MainPage = () => {
    return (
        <>
            <div className={styles.mainPageWrapper}>
                <h1 className={styles.mainPageText}>Take good care of your small pets</h1>

                <picture>
                    <source srcSet={(desktop1xwebp, desktop3xwebp)} media="(min-width: 1280px)" />
                    <source srcSet={(desktop1xjpg, desktop3xjpg)} media="(min-width: 1280px)" />
                    <source srcSet={(tablet1xwebp, tablet2xwebp)} media="(min-width: 768px) and (max-width: 1279px)" />
                    <source srcSet={(tablet1xjpg, tablet2xjpg)} media="(min-width: 768px) and (max-width: 1279px)" />
                    <source srcSet={(mobile1xwebp, mobile2xwebp)} media="(max-width: 767px)" />
                    <source srcSet={(mobile1xjpg, mobile2xjpg)} media="(max-width: 767px)" />

                    {/* <source srcSet={mobile} media="(max-width: 767px)" /> */}
                    {/* <source srcSet={tablet} media="(min-width: 768px) and (max-width: 1279px)" /> */}
                    {/* <source srcSet={desktop} media="(min-width: 1280px)" /> */}
                    <img className={styles.imgMainPage} src={desktop} alt="Cute puppy" />
                </picture>
            </div>
        </>
    );
};

export default MainPage;
