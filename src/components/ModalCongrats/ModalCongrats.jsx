import PropTypes from 'prop-types';
import ModalApproveAction from 'shared/components/ModalApproveAction';

import { ReactComponent as PawprintIcon } from 'images/icons/pawprint.svg';

import styles from './ModalCongrats.module.scss';

const ModalCongrats = ({ onClose }) => {
    return (
        <ModalApproveAction onClose={onClose}>
            <div className={styles.container}>
                <h3 className={styles.title}>Congrats!</h3>
                <p className={styles.text}>Your registration is successful.</p>
                <button className={styles.btnLearn} onClick={onClose}>
                    <span className={styles.btnLearnText}> Go to profile</span>
                    <PawprintIcon className={styles.btnLearnIcon} width={24} height={24} />
                </button>
            </div>
        </ModalApproveAction>
    );
};

ModalCongrats.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default ModalCongrats;
