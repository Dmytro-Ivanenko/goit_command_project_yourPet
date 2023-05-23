import { Link } from 'react-router-dom';
import { ReactComponent as Pawprint } from 'images/icons/pawprint.svg';

import styles from './not-found-page.module.scss';

const NotFoundPage = () => {
    return (
        <div>
            <h1 className={styles.title}>
                <span className={styles.title_br}>Ooops!</span> This page not found &#58;&#40;
            </h1>
            <div className={styles.digit}>
                <p className={styles.digit_right}>4</p>
                <p className={styles.cat}>&#160;</p>
                <p className={styles.digit_left}>4</p>
            </div>

            <Link to="/" className={styles.btn}>
                <span className={styles.btnText}>To main page</span>
                <Pawprint className={styles.btnIcon} />
            </Link>
        </div>
    );
};

export default NotFoundPage;
