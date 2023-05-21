import { useLocation, Link } from 'react-router-dom';
import { useAuth } from 'shared/hooks/useAuth';
import { toast } from 'react-toastify';

import { ReactComponent as PlusIcon } from 'images/icons/plus.svg';
import { ReactComponent as PlusSmallIcon } from 'images/icons/plus-small.svg';

import styles from './add-pet-button.module.scss';

const AddPetButton = () => {
    const location = useLocation();
    const { isLoggedIn } = useAuth();

    const handleClick = () => {
        if (!isLoggedIn) {
            toast.error('Sign in to add your pets.');
            return;
        }
    };

    return (
        <Link to={'/add-pet'} state={{ from: location }}>
            <button className={styles.button} type="button" onClick={handleClick}>
                <PlusIcon className={styles.iconBig} width={24} height={24} />
                <span className={styles.label}>Add Pet</span>
                <PlusSmallIcon className={styles.iconSmall} width={24} height={24} />
            </button>
        </Link>
    );
};

export default AddPetButton;
