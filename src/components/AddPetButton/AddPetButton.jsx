import { useNavigate } from 'react-router-dom';
import { useAuth } from 'shared/hooks/useAuth';
import { toast } from 'react-toastify';

import { ReactComponent as PlusIcon } from 'images/icons/plus.svg';
import { ReactComponent as PlusSmallIcon } from 'images/icons/plus-small.svg';

import styles from './add-pet-button.module.scss';

const AddPetButton = () => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    const handleClick = () => {
        if (!isLoggedIn) {
            toast.error('Sign in to add your pets.');
            return;
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
