import PropTypes from 'prop-types';

import { ReactComponent as TrashIcon } from 'images/icons/trash.svg';

import styles from './modal-confirm-delete.module.scss';

const ModalConfirmDelete = ({ handleModal, handleDelete, title = 'Delete advertisement?', name }) => {
    return (
        <div className={styles.modal}>
            <h2 className={styles.titleModal}>{title}</h2>
            <p className={styles.text}>
                Are you sure you want to delete <span>“{name}”</span>? You can`t undo this action.
            </p>
            <div className={styles.modalContent}>
                <div className={styles.btnWrapper}>
                    <button className={styles.cancelButton} onClick={handleModal}>
                        <span>Cancel</span>
                    </button>
                    <button className={styles.yesButton} onClick={handleDelete}>
                        <span className={styles.titleBtnYes}>Yes</span>
                        <TrashIcon className={styles.icon} width={24} height={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

ModalConfirmDelete.propTypes = {
    handleModal: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};

export default ModalConfirmDelete;
