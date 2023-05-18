import UserCard from "components/UserCard/UserCard";
import Addpet from "components/UserCard/Addpet/Addpet";
import Pets from "components/UserCard/Pets/Pets";

import styles from './userPage.module.scss'

const Userpage = () => {
    return (
        
        <div className={styles.mainContainer}>
            <div className={styles.wrapUser}>
                <div className={styles.wrapUser}>
                <h2 className={styles.title}>My information:</h2>
            </div>
                <UserCard />
            </div>
            <div className={styles.wrapAddPets}>
                <h2 className={styles.titlePets}>My pets:</h2>
                <Addpet />
            </div>
            <div className={styles.wrapPets}>
                <Pets/>
            </div>
        </div>
    )
}

export default Userpage;