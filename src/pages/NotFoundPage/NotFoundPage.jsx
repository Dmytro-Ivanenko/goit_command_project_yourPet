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
            <p className={styles.digit}>
                <span className={styles.digit_right}>4</span> 0 <span className={styles.digit_left}>4</span>
            </p>
            <Link to="/" className={styles.btn}>
                To main page
            </Link>
        </div>
    );
};

export default NotFoundPage;
