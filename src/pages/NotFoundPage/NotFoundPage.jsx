import { Link } from 'react-router-dom';
import { ReactComponent as Pawprint } from 'images/icons/pawprint.svg';

import cat404desktop1x from '../../images/NotFound/cat404desktop@1x.png';
import cat404desktop2x from '../../images/NotFound/cat404desktop@2x.png';
import cat404desktop3x from '../../images/NotFound/cat404desktop@3x.png';
import cat404tablet1x from '../../images/NotFound/cat404tablet@1x.png';
import cat404tablet2x from '../../images/NotFound/cat404tablet@2x.png';
import cat404mobile1x from '../../images/NotFound/cat404mobile@1x.png';
import cat404mobile2x from '../../images/NotFound/cat404mobile@2x.png';

import styles from './not-found-page.module.scss';

const NotFoundPage = () => {
    return (
        <div>
            <h1 className={styles.title}>
                <span className={styles.title_br}>Ooops!</span> This page not found &#58;&#40;
            </h1>
            <div className={styles.digit}>
                <p className={styles.digit_right}>4</p>
                {/* <p className={styles.cat}>&#160;</p> */}
                <div className={styles.cat_bcg}>
                    <picture>
                        <source
                            srcSet={(cat404desktop1x, cat404desktop2x, cat404desktop3x)}
                            media="(min-width: 1280px)"
                        />
                        <source
                            srcSet={(cat404tablet1x, cat404tablet2x)}
                            media="(min-width: 768px) and (max-width: 1279px)"
                        />
                        <source srcSet={(cat404mobile1x, cat404mobile2x)} media="(max-width: 767px)" />
                        <img className={styles.cat_img} src={cat404desktop1x} alt="Cat with tongue" />
                    </picture>
                </div>

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
