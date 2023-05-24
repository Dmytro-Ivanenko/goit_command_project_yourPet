import PropTypes from 'prop-types';

import ModalApproveAction from 'shared/components/ModalApproveAction';
import Button from 'shared/components/Button';

import styles from './ModalCongrats.module.scss';

const ModalCongrats = ({ onClose }) => {
    return (
        <ModalApproveAction onClose={onClose}>
            <div className={styles.container}>
                <h3 className={styles.title}>Congrats!</h3>
                <p className={styles.text}>Your registration is success</p>
                <Button onClick={onClose} text="Go to profile" />
            </div>
        </ModalApproveAction>
    );
};

ModalCongrats.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default ModalCongrats;
