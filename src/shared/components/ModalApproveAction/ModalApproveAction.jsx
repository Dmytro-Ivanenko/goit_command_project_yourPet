import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { ReactComponent as CrossIcon } from 'images/icons/cross-small.svg';
import styles from './modal-approve-action.module.scss';

const modalRoot = document.querySelector('#modal-root');

const ModalApproveAction = ({ children, onClose }) => {
    const handleClose = useCallback(
        ({ target, currentTarget, code }) => {
            if (target === currentTarget || code === 'Escape') {
                onClose();
            }
        },
        [onClose]
    );

    useEffect(() => {
        window.addEventListener('keydown', handleClose);

        return () => {
            window.removeEventListener('keydown', handleClose);
        };
    }, [handleClose]);

    return createPortal(
        <div className={styles.backdrop} onClick={handleClose}>
            <div className={styles.modal}>
                <button type="button" className={styles.closeBtn} onClick={onClose} aria-label="close">
                    <CrossIcon className={styles.closeIcon} width={24} height={24} />
                </button>
                {children}
            </div>
        </div>,
        modalRoot
    );
};

ModalApproveAction.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
};

export default ModalApproveAction;
