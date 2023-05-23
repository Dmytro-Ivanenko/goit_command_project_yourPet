import PropTypes from 'prop-types';

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

Pets.defaultProps = {
    pets: [],
};

Pets.propTypes = {
    pets: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            birthDate: PropTypes.string.isRequired,
            breed: PropTypes.string.isRequired,
            comments: PropTypes.string.isRequired,
            photoURL: PropTypes.string.isRequired,
        }).isRequired
    ),
};

export default Pets;
