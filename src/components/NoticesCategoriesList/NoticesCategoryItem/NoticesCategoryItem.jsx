import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import ModalApproveAction from 'shared/components/ModalApproveAction';
import ModalConfirmDelete from 'components/ModalConfirmDelete';
import { calcAge } from 'shared/helpers';
import Button from 'shared/components/Button';
import { useAuth } from 'shared/hooks/useAuth';

import { ReactComponent as ClockIcon } from 'images/icons/clock.svg';
import { ReactComponent as FemaleIcon } from 'images/icons/female.svg';
import { ReactComponent as MaleIcon } from 'images/icons/male.svg';
import { ReactComponent as HeartIcon } from 'images/icons/heart.svg';
import { ReactComponent as LocationIcon } from 'images/icons/location.svg';
import { ReactComponent as TrashIcon } from 'images/icons/trash.svg';
import ModalNotice from 'components/ModalNotice';

import styles from './notices-category-item.module.scss';

const NoticesCategoryItem = ({ item, onDelete, onFavorite }) => {
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const { user } = useAuth();
    const [searchParams, setSearchParams] = useSearchParams();

    const { category, location, date, sex, title, image, _id, owner } = item;

    const handleAgeClick = value => {
        let paramValue = null;

        if (value.includes('m')) {
            paramValue = '0-12 m';
        } else if (value === '1 year') {
            paramValue = '1 year';
        } else if (value.includes('years')) {
            paramValue = '2 years +';
        }

        if (searchParams.get('age') === paramValue) {
            searchParams.delete('age');
        } else {
            searchParams.set('age', paramValue);
        }

        setSearchParams(searchParams);
    };

    const handleGenderClick = value => {
        if (searchParams.get('gender') === value) {
            searchParams.delete('gender');
        } else {
            searchParams.set('gender', value);
        }

        setSearchParams(searchParams);
    };

    // Age formatting for cards
    const age = calcAge(date);

    return (
        <>
            <li className={styles.item}>
                <div className={styles.imgWrapper}>
                    <img className={styles.img} src={image} alt="pet" loading="lazy" />
                    <div className={styles.upperBlock}>
                        <p className={styles.upperBlockText}>{category}</p>
                        <div className={styles.btnWrapper}>
                            <button
                                onClick={() => onFavorite(_id)}
                                className={
                                    user.favoriteNotices.includes(_id) ? `${styles.btn} ${styles.favorite}` : styles.btn
                                }
                                aria-label={
                                    user.favoriteNotices.includes(_id) ? 'remove from favorites' : 'add to favorites'
                                }
                            >
                                <HeartIcon className={styles.btnIcon} width={24} height={24} />
                            </button>
                            {owner?._id === user.id && (
                                <button className={styles.btnDelete} onClick={() => setShowDeleteModal(true)}>
                                    <TrashIcon className={styles.btnIcon} width={24} height={24} />
                                </button>
                            )}
                        </div>
                    </div>
                    <ul className={styles.lowerBlock}>
                        <li className={styles.lowerBlockItem}>
                            <LocationIcon className={styles.icon} width={24} height={24} />
                            <span className={styles.label}>{location}</span>
                        </li>
                        <li className={styles.lowerBlockItem}>
                            <button
                                type="button"
                                className={
                                    searchParams.get('age')
                                        ? `${styles.lowerBlockBtn} ${styles.active}`
                                        : styles.lowerBlockBtn
                                }
                                onClick={() => handleAgeClick(age)}
                            >
                                <ClockIcon className={styles.icon} width={24} height={24} />
                                <span className={styles.label}>{age}</span>
                            </button>
                        </li>
                        <li className={styles.lowerBlockItem}>
                            <button
                                type="button"
                                className={
                                    searchParams.get('gender')
                                        ? `${styles.lowerBlockBtn} ${styles.active}`
                                        : styles.lowerBlockBtn
                                }
                                onClick={() => handleGenderClick(sex)}
                            >
                                {sex === 'female' ? (
                                    <FemaleIcon className={styles.icon} width={24} height={24} />
                                ) : (
                                    <MaleIcon className={styles.icon} width={24} height={24} />
                                )}
                                <span className={styles.label}>{sex}</span>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className={styles.titleWrapper}>
                    <p className={styles.title}>{title}</p>
                    <Button onClick={() => setShowDetailsModal(true)} text="Learn More" />
                </div>
            </li>
            {showDetailsModal && (
                <ModalApproveAction onClose={() => setShowDetailsModal(false)}>
                    <ModalNotice item={item} onFavorite={onFavorite} />
                </ModalApproveAction>
            )}
            {showDeleteModal && (
                <ModalApproveAction onClose={() => setShowDeleteModal(false)}>
                    <ModalConfirmDelete
                        name={title}
                        handleModal={() => setShowDeleteModal(false)}
                        handleDelete={() => onDelete(_id)}
                    />
                </ModalApproveAction>
            )}
        </>
    );
};

NoticesCategoryItem.propTypes = {
    item: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        sex: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }),
    onDelete: PropTypes.func.isRequired,
    onFavorite: PropTypes.func.isRequired,
};

export default NoticesCategoryItem;
