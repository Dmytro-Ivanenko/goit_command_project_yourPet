import { useLocation, Link } from 'react-router-dom';

import { ReactComponent as PlusIcon } from 'images/icons/plus.svg';
import { ReactComponent as PlusSmallIcon } from 'images/icons/plus-small.svg';

import styles from './add-pet-button.module.scss';

const AddPetButton = () => {
    const location = useLocation();

    // handleClick тепер не потрібен, тим, куди перекидувати, займається роутер

    return (
        <Link className={styles.button} to={'/add-pet'} state={{ from: location }}>
            <PlusIcon className={styles.iconBig} width={24} height={24} />
            <span className={styles.label}>Add Pet</span>
            <PlusSmallIcon className={styles.iconSmall} width={24} height={24} />
        </Link>
    );
};

export default AddPetButton;
