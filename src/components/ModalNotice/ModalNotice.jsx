import { useAuth } from 'shared/hooks/useAuth';

import dogPicture from 'images/example/dog.jpg';
import { ReactComponent as HeartIcon } from 'images/icons/heart.svg';

import styles from './modal-notice.module.scss';
import { toast } from 'react-toastify';

const ModalNotice = ({ item }) => {
    const { isLoggedIn } = useAuth();

    const handleClick = () => {
        if (!isLoggedIn) {
            toast.error('Sign in to add your pets.');
            return;
        }

        // add to favorite
        console.log('added');
    };

    const {
        breed,
        category,
        comments,
        date,
        location,
        name,
        price,
        sex,
        title,
        email = 'user@mail.com',
        phone = '+380971234567',
        image = dogPicture,
    } = item;

    return (
        <div className={styles.container}>
            <div className={styles.mainContent}>
                <div className={styles.imageWrapper}>
                    <img className={styles.img} src={image} alt="pet" />
                    <span className={styles.category}>{category}</span>
                </div>
                <div className={styles.textInfo}>
                    <h4 className={styles.title}>{title}</h4>
                    <table className={styles.table}>
                        <tbody>
                            <tr className={styles.tableRow}>
                                <td className={styles.tableLabel}>Name:</td>
                                <td className={styles.tableValue}>{name}</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td className={styles.tableLabel}>Birthday:</td>
                                <td className={styles.tableValue}>{date}</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td className={styles.tableLabel}>Breed:</td>
                                <td className={styles.tableValue}>{breed}</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td className={styles.tableLabel}>Place:</td>
                                <td className={styles.tableValue}>{location}</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td className={styles.tableLabel}>The sex:</td>
                                <td className={styles.tableValue}>{sex}</td>
                            </tr>
                            {category === 'sell' && price > 0 && (
                                <tr className={styles.tableRow}>
                                    <td className={styles.tableLabel}>Price</td>
                                    <td className={styles.tableValue}>{price}</td>
                                </tr>
                            )}
                            <tr className={styles.tableRow}>
                                <td className={styles.tableLabel}>Email:</td>
                                <td className={styles.tableValue}>
                                    <a className={styles.link} href={`mailto:${email}`}>
                                        {email}
                                    </a>
                                </td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td className={styles.tableLabel}>Phone:</td>
                                <td className={styles.tableValue}>
                                    <a className={styles.link} href={`tel:${phone}`}>
                                        {phone}
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <p className={styles.comment}>{comments}</p>
            <div className={styles.btnWrapper}>
                <button className={styles.btn} onClick={handleClick}>
                    <span className={styles.btnLabel}>Add to</span>
                    <HeartIcon className={styles.icon} width={24} height={24} />
                </button>
                <a className={styles.contactLink} href={`tel:${phone}`}>
                    Contact
                </a>
            </div>
        </div>
    );
};

export default ModalNotice;
