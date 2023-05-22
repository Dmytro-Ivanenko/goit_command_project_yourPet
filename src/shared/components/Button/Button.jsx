import PropTypes from 'prop-types';
import styles from './button.module.scss';

// Icons
import { ReactComponent as PawprintIcon } from 'images/icons/pawprint.svg';

const Button = ({ onClose, btnName }) => {
    return (
        <button className={styles.btnLearn} onClick={onClose}>
            <span className={styles.btnLearnText}>{btnName}</span>
            <PawprintIcon className={styles.btnLearnIcon} width={24} height={24} />
        </button>
    );
};

Button.propTypes = {
    onClose: PropTypes.func.isRequired,
    btnName: PropTypes.string.isRequired,
};

export default Button;
