import { ReactComponent as TrashIcon } from 'images/icons/trash.svg';

import styles from './modal-confirm-delete.module.scss';

const ModalConfirmDelete = ({ handleModal, handleDelete, title }) => {
    return (
        <div className={styles.modal}>
            <h2 className={styles.titleModal}>Delete adverstiment?</h2>
            <p className={styles.text}>
                Are you sure you want to delete <span>“{title}”</span>? You can`t undo this action.
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

export default ModalConfirmDelete;
