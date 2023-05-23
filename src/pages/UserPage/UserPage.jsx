import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import UserCard from 'components/UserCard';
import Addpet from 'components/UserCard/Addpet';
import Pets from 'components/UserCard/Pets';
import styles from './userPage.module.scss';

import ModalCongrats from 'components/ModalCongrats';

import { getYourPets } from 'services/api/pets';

const Userpage = () => {
    const { state } = useLocation();
    const [pets, setPets] = useState([]);
    const [showModal, setShowModal] = useState(state);

    const handleClose = () => {
        setShowModal(false);
    };

    useEffect(() => {
        try {
            const getPets = async () => {
                const pets = await getYourPets();
                setPets(pets);
            };
            getPets();
        } catch (error) {
            toast.error(error.message);
        }
    }, []);

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
                <div className={styles.wrapPets}>{pets.length > 0 && <Pets pets={pets} />}</div>
            </div>

            {showModal && <ModalCongrats onClose={handleClose} />}
        </div>
    );
};

export default Userpage;
