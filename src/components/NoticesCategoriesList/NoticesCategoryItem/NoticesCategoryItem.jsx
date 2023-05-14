import { ReactComponent as ClockIcon } from 'images/icons/clock.svg';
import { ReactComponent as FemaleIcon } from 'images/icons/female.svg';
import { ReactComponent as MaleIcon } from 'images/icons/male.svg';
import { ReactComponent as HeartIcon } from 'images/icons/heart.svg';
import { ReactComponent as LocationIcon } from 'images/icons/location.svg';
import { ReactComponent as PawprintIcon } from 'images/icons/pawprint.svg';

import styles from './notices-category-item.module.scss';

const NoticesCategoryItem = ({ item, openModal }) => {
    const { category, location, age, sex, title, favorite, image } = item;

    return (
        <li className={styles.item}>
            <div className={styles.imgWrapper}>
                <img className={styles.img} src={image} alt="pet" />
                <div className={styles.upperBlock}>
                    <p className={styles.upperBlockText}>{category}</p>
                    <button className={favorite ? `${styles.btn} ${styles.favorite}` : styles.btn}>
                        <HeartIcon className={styles.btnIcon} width={24} height={24} />
                    </button>
                </div>
                <ul className={styles.lowerBlock}>
                    <li className={styles.lowerBlockItem}>
                        <LocationIcon className={styles.icon} width={24} height={24} />
                        <span className={styles.label}>{location}</span>
                    </li>
                    <li className={styles.lowerBlockItem}>
                        <ClockIcon className={styles.icon} width={24} height={24} />
                        <span className={styles.label}>{age}</span>
                    </li>
                    <li className={styles.lowerBlockItem}>
                        {sex === 'female' ? (
                            <FemaleIcon className={styles.icon} width={24} height={24} />
                        ) : (
                            <MaleIcon className={styles.icon} width={24} height={24} />
                        )}
                        <span className={styles.label}>{sex}</span>
                    </li>
                </ul>
            </div>
            <h4 className={styles.title}>{title}</h4>
            <button type="button" className={styles.btnLearn} onClick={openModal}>
                <span className={styles.btnLearnText}>Learn More</span>
                <PawprintIcon className={styles.btnLearnIcon} width={24} height={24} />
            </button>
        </li>
    );
};

export default NoticesCategoryItem;
