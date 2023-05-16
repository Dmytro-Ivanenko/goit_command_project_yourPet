import { useState } from 'react';
import { toast } from 'react-toastify';

import { ReactComponent as ClockIcon } from 'images/icons/clock.svg';
import { ReactComponent as FemaleIcon } from 'images/icons/female.svg';
import { ReactComponent as MaleIcon } from 'images/icons/male.svg';
import { ReactComponent as HeartIcon } from 'images/icons/heart.svg';
import { ReactComponent as LocationIcon } from 'images/icons/location.svg';
import { ReactComponent as PawprintIcon } from 'images/icons/pawprint.svg';

import { getNoticeById } from 'services/api/notices';
import ModalContainer from 'shared/components/ModalContainer';
import ModalNotice from 'components/ModalNotice';

import styles from './notices-category-item.module.scss';
import { useAuth } from 'shared/hooks/useAuth';

const NoticesCategoryItem = ({ item }) => {
    const { isLoggedIn } = useAuth();
    const [itemDetailedInfo, setItemDetailedInfo] = useState(null);

    const { category, location, date, sex, title, favorite, image, _id } = item;

    const handleModal = async () => {
        try {
            const data = await getNoticeById(_id);
            console.log(data);
            data.date = data.date.replaceAll('-', '.');
            setItemDetailedInfo(data);
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleFavoriteClick = () => {
        if (!isLoggedIn) {
            toast.error('Sign in to add to favorites');
            return;
        }

        // add to favorite
    };

    return (
        <>
            <li className={styles.item}>
                <div className={styles.imgWrapper}>
                    <img className={styles.img} src={image} alt="pet" />
                    <div className={styles.upperBlock}>
                        <p className={styles.upperBlockText}>{category}</p>
                        <button
                            onClick={handleFavoriteClick}
                            className={favorite ? `${styles.btn} ${styles.favorite}` : styles.btn}
                        >
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
                            <span className={styles.label}>{date}</span>
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
                <button type="button" className={styles.btnLearn} onClick={handleModal}>
                    <span className={styles.btnLearnText}>Learn More</span>
                    <PawprintIcon className={styles.btnLearnIcon} width={24} height={24} />
                </button>
            </li>
            {itemDetailedInfo && (
                <ModalContainer onClose={() => setItemDetailedInfo(null)}>
                    <ModalNotice item={itemDetailedInfo} />
                </ModalContainer>
            )}
        </>
    );
};

export default NoticesCategoryItem;
