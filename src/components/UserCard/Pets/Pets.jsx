import styles from './pets.module.scss';
import cat from '../../../images/cat.jpeg';
import trash from '../../../images/icons/trash.svg';
import dog from '../../../images/dog.jpeg';

const Pets = () => {
    return (
        <div>
            <div className={styles.container}>
                <img className={styles.photoPet} src={cat} alt="cat" />
                <div className={styles.wrapData}>
                    <p className={styles.cardTitle}>
                        <p className={styles.text}>
                            <span className={styles.title}>Name: </span>Jack
                        </p>
                        <button type="submit" className={styles.btnTrash}>
                            <img className={styles.icon} src={trash} width="24" height="24" alt="trash" />
                        </button>
                    </p>
                    <p className={styles.text}>
                        <span className={styles.title}>Date of birth: </span>22.04.2018
                    </p>
                    <p className={styles.text}>
                        <span className={styles.title}>Breed: </span>Persian cat
                    </p>
                    <p className={styles.text}>
                        <span className={styles.title}>Comments: </span>Jack is a gray Persian cat with green eyes. He
                        loves to be pampered and groomed, and enjoys playing with toys. Although a bitshy, he's a loyal
                        and affectionate lap cat.
                    </p>
                </div>
            </div>
            <div className={styles.container}>
                <img className={styles.photoPet} src={dog} width="240" height="240" alt="dog" />
                <div className={styles.wrapData}>
                    <p className={styles.cardTitle}>
                        <p className={styles.text}>
                            <span className={styles.title}>Name: </span>Jack
                        </p>
                        <button type="submit" className={styles.btnTrash}>
                            <img className={styles.icon} src={trash} width="24" height="24" alt="trash" />
                        </button>
                    </p>
                    <p className={styles.text}>
                        <span className={styles.title}>Date of birth: </span>22.04.2018
                    </p>
                    <p className={styles.text}>
                        <span className={styles.title}>Breed: </span>Persian cat
                    </p>
                    <p className={styles.text}>
                        <span className={styles.title}>Comments: </span>Jack is a gray Persian cat with green eyes. He
                        loves to be pampered and groomed, and enjoys playing with toys. Although a bitshy, he's a loyal
                        and affectionate lap cat.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Pets;
