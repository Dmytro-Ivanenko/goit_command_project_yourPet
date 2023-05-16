import styles from './addpet.module.scss';
import plus from '../../../images/icons/plus-small.svg'
import { Link } from 'react-router-dom';

const Addpet = () => {
    return (
        <div className={styles.container}>
            <Link to="/add-pet" className={styles.link}>
                <button className={styles.addPet}>
                    <span className={styles.titleBtn}>Add Pet</span>
                    <img src={plus} width="24" height="24" alt="plus" />
                </button>
            </Link>    
        </div>
    )
}

export default Addpet;