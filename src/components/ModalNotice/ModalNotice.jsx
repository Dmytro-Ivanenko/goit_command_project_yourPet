import { useAuth } from 'shared/hooks/useAuth';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import { addFavoriteNotice } from 'services/api/favorites';
import { ReactComponent as HeartIcon } from 'images/icons/heart.svg';

import styles from './modal-notice.module.scss';

const ModalNotice = ({ item }) => {
    const { isLoggedIn } = useAuth();

    const { _id, breed, category, comments, date, location, name, price, sex, title, image, owner } = item;

    const handleClick = async () => {
        if (!isLoggedIn) {
            toast.error('Sign in to add to favorites.');
            return;
        }

        // add to favorite
        try {
            await addFavoriteNotice(_id);
            toast.success('Added successfully');
        } catch (error) {
            if (error.response.status === 409) {
                return toast.warn('Already in favorites');
            }

            toast.error(error.message);
        }
    };

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
                                    <a className={styles.link} href={`mailto:${owner.email}`}>
                                        {owner.email}
                                    </a>
                                </td>
                            </tr>
                            {owner?.phone && (
                                <tr className={styles.tableRow}>
                                    <td className={styles.tableLabel}>Phone:</td>
                                    <td className={styles.tableValue}>
                                        <a className={styles.link} href={`tel:${owner.phone}`}>
                                            {owner.phone}
                                        </a>
                                    </td>
                                </tr>
                            )}
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
                <a className={styles.contactLink} href={`mailto:${owner.email}`}>
                    Contact
                </a>
            </div>
        </div>
    );
};

ModalNotice.propTypes = {
    item: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        breed: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        sex: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        comments: PropTypes.string.isRequired,
        price: PropTypes.number,
        owner: PropTypes.shape({
            _id: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            phone: PropTypes.string,
        }),
    }),
};

export default ModalNotice;
