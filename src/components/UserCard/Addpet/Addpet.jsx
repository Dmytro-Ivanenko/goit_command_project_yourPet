import styles from './addpet.module.scss';
import { ReactComponent as PlusSmallIcon } from 'images/icons/plus-small.svg';

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Addpet = () => {
    const location = useLocation();
    return (
        <Link to="/add-pet" state={{ from: location }} className={styles.link}>
            <span className={styles.label}>Add Pet</span>
            <PlusSmallIcon className={styles.icon} width={24} height={24} />
        </Link>
    );
};

export default Addpet;
