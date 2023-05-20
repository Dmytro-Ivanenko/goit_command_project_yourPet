import { ReactComponent as TrashIcon } from 'images/icons/trash.svg';
import styles from './pets-item.module.scss';

import { deleteYourPet } from 'services/api/userPage';
import { toast } from 'react-toastify';

const PetsItem = ({ item }) => {
    const { name, birthDate, breed, comments, photoURL, _id } = item;
    const birth = birthDate.replaceAll('-', '.');

    const handleDelete = async () => {
        try {
            await deleteYourPet(_id);
            toast.success('Deleted successfully');
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <li className={styles.container}>
            <img className={styles.photoPet} src={photoURL} alt="pet" />
            <div className={styles.wrapData}>
                <div className={styles.cardTitle}>
                    <p className={styles.text}>
                        <span className={styles.title}>Name: </span>
                        {name}
                    </p>
                    <button type="submit" className={styles.btnTrash} onClick={handleDelete}>
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

export default PetsItem;
