// import React from 'react';
// import { Navigate } from 'react-router-dom';
// const NotFoundPage = () => {
// 	return <Navigate to="/" />;
// };

// export default NotFoundPage;
import { Link } from 'react-router-dom';

import styles from './not-found-page.module.scss';

const NotFoundPage = () => {
    return (
        <div>
            <h1 className={styles.title}>{`Ooops! This page not found :( `}</h1>
            <div className={styles.digit}>
                <p className={styles.digit_right}>4</p>
                <p className={styles.cat}>&#160;</p>
                <p className={styles.digit_left}>4</p>
            </div>

            <Link to="/" className={styles.btn}>
                To main page
                <svg className={styles.icon_paw} width="24px" height="24px">
                    <use href="../../images/icons/pawprint.svg"></use>
                </svg>
            </Link>
        </div>
    );
};

export default NotFoundPage;
