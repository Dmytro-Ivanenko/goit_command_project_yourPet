import { useNavigate } from 'react-router-dom';
import { useAuth } from 'shared/hooks/useAuth';

import { ReactComponent as PlusIcon } from 'images/icons/plus.svg';
import { ReactComponent as PlusSmallIcon } from 'images/icons/plus-small.svg';

import styles from './add-pet-button.module.scss';

const AddPetButton = () => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    const handleClick = () => {
        if (isLoggedIn) {
            navigate('/add-pet');
        } else {
            // unauthorized notification
            console.log('unauthorized');
        }

        navigate('/add-pet');
    };

    return (
        <button className={styles.button} type="button" onClick={handleClick}>
            <PlusIcon className={styles.iconBig} width={24} height={24} />
            <span className={styles.label}>Add Pet</span>
            <PlusSmallIcon className={styles.iconSmall} width={24} height={24} />
        </button>
    );
};

export default AddPetButton;
