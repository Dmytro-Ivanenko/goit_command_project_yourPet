import PropTypes from 'prop-types';

import { ReactComponent as TrashIcon } from 'images/icons/trash.svg';

import styles from './pets-item.module.scss';

const PetsItem = ({ item, onDelete }) => {
    const { name, birthDate, breed, comments, petsAvatar, _id } = item;
    const birth = birthDate.replaceAll('-', '.');

    return (
        <li className={styles.container}>
            <img className={styles.photoPet} src={petsAvatar} alt="pet" />
            <div className={styles.wrapData}>
                <div className={styles.cardTitle}>
                    <p className={styles.text}>
                        <span className={styles.title}>Name: </span>
                        {name}
                    </p>
                    <button type="submit" className={styles.btnTrash} onClick={() => onDelete(_id)} aria-label="delete">
                        <TrashIcon className={styles.icon} width={24} height={24} />
                    </button>
                </div>
                <p className={styles.text}>
                    <span className={styles.title}>Date of birth: </span>
                    {birth}
                </p>
                <p className={styles.text}>
                    <span className={styles.title}>Breed: </span>
                    {breed}
                </p>
                <p className={styles.text}>
                    <span className={styles.title}>Comments: </span>
                    {comments}
                </p>
            </div>
        </li>
    );
};

PetsItem.propTypes = {
    item: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        birthDate: PropTypes.string.isRequired,
        breed: PropTypes.string.isRequired,
        comments: PropTypes.string.isRequired,
        petsAvatar: PropTypes.string.isRequired,
    }),
    onDelete: PropTypes.func.isRequired,
};

export default PetsItem;
