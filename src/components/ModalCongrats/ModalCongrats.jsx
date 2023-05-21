import React from 'react';
import ModalApproveAction from 'shared/components/ModalApproveAction/ModalApproveAction';
import Button from '../../shared/components/Button/Button';

import styles from './ModalCongrats.module.scss';

const ModalCongrats = ({ onClose }) => {
    return (
        <ModalApproveAction onClose={onClose}>
            <div className={styles.container}>
                <h3 className={styles.title}>Congrats!</h3>
                <p className={styles.text}>Your registration is successful.</p>
                <Button onClose={onClose} btnName="Go to profile" />
                {/* <button className={styles.btnLearn} onClick={onClose}>
                    <span className={styles.btnLearnText}> Go to profile</span>
                    <PawprintIcon className={styles.btnLearnIcon} width={24} height={24} />
                </button> */}
            </div>
        </ModalApproveAction>
    );
};

export default ModalCongrats;
