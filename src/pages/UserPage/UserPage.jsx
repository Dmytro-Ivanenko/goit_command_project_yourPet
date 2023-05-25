import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import UserCard from 'components/UserCard';
import Addpet from 'components/UserCard/Addpet';
import Pets from 'components/UserCard/Pets';
import Placeholder from 'shared/components/Placeholder';
import Loader from 'shared/components/Loader';
import ModalCongrats from 'components/ModalCongrats';

import { deleteYourPet, getYourPets } from 'services/api/pets';

import styles from './userPage.module.scss';

const Userpage = () => {
    const { state } = useLocation();
    const [pets, setPets] = useState([]);
    const [showModal, setShowModal] = useState(state);
    const [isLoading, setIsLoading] = useState(true);

    const handleClose = () => {
        setShowModal(false);
    };

    const getPets = useCallback(async () => {
        try {
            const pets = await getYourPets();
            setPets(pets);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const handleDelete = useCallback(
        async id => {
            try {
                await deleteYourPet(id);
                await getPets();
                toast.success('Deleted successfully');
            } catch (error) {
                toast.error(error.message);
            }
        },
        [getPets]
    );

    useEffect(() => {
        getPets();
    }, [getPets]);

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
                    {pets.length > 0 && <Pets pets={pets} onDelete={handleDelete} />}
                    {!isLoading && pets.length === 0 && <Placeholder text={'Try adding your own pets!'} />}
                </div>
            </div>

            {isLoading && <Loader />}
            {showModal && <ModalCongrats onClose={handleClose} />}
        </div>
    );
};

export default Userpage;
