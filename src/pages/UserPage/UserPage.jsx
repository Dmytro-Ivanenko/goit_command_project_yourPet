import UserCard from "components/UserCard/UserCard";
import Addpet from "components/UserCard/Addpet/Addpet";
import Pets from "components/UserCard/Pets/Pets";
import styles from './userPage.module.scss'

const Userpage = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.wrapUser}>
                <h2 className={styles.title}>My information:</h2>
                <UserCard />
            </div>
                <div className={styles.wrapPets} >
                    <h2 className={styles.title}>My pets:</h2>
                    <Addpet />
                </div>
                <Pets/>
        </div>
    )
}

export default Userpage;