import UserCard from 'components/UserCard/UserCard';
import Addpet from 'components/UserCard/Addpet/Addpet';
import Pets from 'components/UserCard/Pets/Pets';
import styles from './userPage.module.scss';
import { useLocation } from 'react-router';
import ModalCongrats from 'components/ModalCongrats/ModalCongrats';
import { useState } from 'react';

const Userpage = () => {
    const { state } = useLocation();
    const [showModal, setShowModal] = useState(state);

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.wrapUser}>
                <h2 className={styles.title}>My information:</h2>
                <UserCard />
            </div>
            <div>
                <div className={styles.wrapAddPets}>
                    <h2 className={styles.titlePets}>My pets:</h2>
                    <Addpet />
                </div>
                <div className={styles.wrapPets}>
                    <Pets />
                </div>
            </div>

            {showModal && <ModalCongrats onClose={handleClose} />}
        </div>
    );
};

export default Userpage;
