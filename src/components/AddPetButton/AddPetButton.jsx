import { useLocation, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { ReactComponent as PlusIcon } from 'images/icons/plus.svg';
import { ReactComponent as PlusSmallIcon } from 'images/icons/plus-small.svg';

import styles from './add-pet-button.module.scss';
import { useAuth } from 'shared/hooks/useAuth';

const AddPetButton = () => {
    const location = useLocation();
    const { isLoggedIn } = useAuth();

    const handleClick = () => {
        if (!isLoggedIn) {
            toast.warn('Sign in to add your own notice.');
        }
    };

    return (
        // condition to stay on current page
        <Link className={styles.button} to={isLoggedIn && '/add-pet'} state={{ from: location }} onClick={handleClick}>
            <PlusIcon className={styles.iconBig} width={24} height={24} />
            <span className={styles.label}>Add Pet</span>
            <PlusSmallIcon className={styles.iconSmall} width={24} height={24} />
        </Link>
    );
};

export default AddPetButton;
