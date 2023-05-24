import PropTypes from 'prop-types';

import PetsItem from './PetsItem';
import styles from './pets.module.scss';

const Pets = ({ pets, onDelete }) => {
    return (
        <ul className={styles.list}>
            {pets.map(item => (
                <PetsItem key={item._id} item={item} onDelete={onDelete} />
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
            petsAvatar: PropTypes.string.isRequired,
        }).isRequired
    ),
    onDelete: PropTypes.func.isRequired,
};

export default Pets;
