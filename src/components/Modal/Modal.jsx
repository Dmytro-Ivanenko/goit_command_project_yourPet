import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

import './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const Modal = data => {
  const [showModal, setshowModal] = useState(false);

  //   const togleModal = () => {
  //     setshowModal(!showModal);
  //     };

  const togleModal = useCallback(() => {
    setshowModal(prevShowModal => !prevShowModal);
  }, [setshowModal]);

  const handleKeydown = useCallback(
    e => {
      if (e.code === 'Escape') {
        togleModal();
      }
    },
    [togleModal]
  );

  const hadleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      togleModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [handleKeydown]);

  return createPortal(
    <div className="Modal__backdrop" onClick={hadleBackdropClick}>
      <div className="Modal__content">
        {data}
        <button onClick={togleModal}>Закрити модалку</button>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
