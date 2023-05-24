import styles from './placeholder.module.scss';

import cat404desktop1x from 'images/NotFound/cat404desktop@1x.png';
import cat404desktop2x from 'images/NotFound/cat404desktop@2x.png';
import cat404desktop3x from 'images/NotFound/cat404desktop@3x.png';
import cat404tablet1x from 'images/NotFound/cat404tablet@1x.png';
import cat404tablet2x from 'images/NotFound/cat404tablet@2x.png';
import cat404mobile1x from 'images/NotFound/cat404mobile@1x.png';
import cat404mobile2x from 'images/NotFound/cat404mobile@2x.png';

const Placeholder = ({ text }) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.bg}>
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
                        <img className={styles.img} src={cat404desktop1x} alt="Cat with tongue" />
                    </picture>
                </div>
                <span className={styles.text}>{text}</span>
            </div>
        </div>
    );
};

export default Placeholder;
