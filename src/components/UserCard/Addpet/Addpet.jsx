import styles from './addpet.module.scss';
import { ReactComponent as PlusSmallIcon } from 'images/icons/plus-small.svg';

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Addpet = () => {
    const location = useLocation();
    return (

        <div className={styles.container}>
            <Link to="/add-pet" state={{ from: location }} className={styles.link}>
                <button className={styles.addPet}>
                    <span className={styles.titleBtn}>Add Pet</span>
                    <img src={plus} width="24" height="24" alt="plus" />
                </button>
            </Link>
        </div>

    );
};

export default Addpet;
