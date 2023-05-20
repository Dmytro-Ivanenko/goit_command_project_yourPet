import PetsItem from './PetsItem';

import styles from './pets.module.scss';

const Pets = ({ pets }) => {
    return (
        <ul className={styles.list}>
            {pets.map(item => (
                <PetsItem key={item._id} item={item} />
            ))}
        </ul>
    );
};

export default Pets;
