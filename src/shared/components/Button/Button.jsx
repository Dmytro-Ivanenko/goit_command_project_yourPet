import PropTypes from 'prop-types';
import styles from './button.module.scss';

// Icons
import { ReactComponent as PawprintIcon } from 'images/icons/pawprint.svg';

const Button = ({ onClick, text }) => {
    return (
        <button className={styles.btnLearn} onClick={onClick}>
            <span className={styles.btnLearnText}>{text}</span>
            <PawprintIcon className={styles.btnLearnIcon} width={24} height={24} />
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
};

export default Button;
