import { useAuth } from 'shared/hooks/useAuth';

import catPicture from 'images/example/cat.jpg';
import { ReactComponent as HeartIcon } from 'images/icons/heart.svg';

import styles from './modal-notice.module.scss';

const ModalNotice = () => {
    const { isLoggedIn } = useAuth();

    const handleClick = () => {
        if (!isLoggedIn) {
            // Unauthorized notification
            console.log('unauthorized');
            return;
        }

        // add to favorite
        console.log('added');
    };

    return (
        <div className={styles.container}>
            <div className={styles.mainContent}>
                <div className={styles.imageWrapper}>
                    <img className={styles.img} src={catPicture} alt="pet" />
                    <span className={styles.category}>In good hands</span>
                </div>
                <div className={styles.textInfo}>
                    <h4 className={styles.title}>Сute cat looking for a home</h4>
                    <table className={styles.table}>
                        <tbody>
                            <tr className={styles.tableRow}>
                                <td className={styles.tableLabel}>Name:</td>
                                <td className={styles.tableValue}>Rich</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td className={styles.tableLabel}>Birthday:</td>
                                <td className={styles.tableValue}>21.09.2020</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td className={styles.tableLabel}>Breed:</td>
                                <td className={styles.tableValue}>Pomeranian</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td className={styles.tableLabel}>Place:</td>
                                <td className={styles.tableValue}>Lviv</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td className={styles.tableLabel}>The sex:</td>
                                <td className={styles.tableValue}>male</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td className={styles.tableLabel}>Email:</td>
                                <td className={styles.tableValue}>
                                    <a className={styles.link} href="mailto:380971234567">
                                        user@mail.com
                                    </a>
                                </td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td className={styles.tableLabel}>Phone:</td>
                                <td className={styles.tableValue}>
                                    <a className={styles.link} href="tel:+380971234567">
                                        +380971234567
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <p className={styles.comment}>
                Comments: Rich would be the perfect addition to an active family that loves to play and go on walks. I
                bet he would love having a doggy playmate too!
            </p>
            <div className={styles.btnWrapper}>
                <button className={styles.btn} onClick={handleClick}>
                    <span className={styles.btnLabel}>Add to</span>
                    <HeartIcon className={styles.icon} width={24} height={24} />
                </button>
                <a className={styles.contactLink} href="tel:+380971234567">
                    Contact
                </a>
            </div>
        </div>
    );
};

export default ModalNotice;
