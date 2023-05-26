import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { ReactComponent as LogoutIcon } from 'images/icons/logout.svg';
import { ReactComponent as CameraIcon } from 'images/icons/camera.svg';
import { ReactComponent as LogoutWhiteIcon } from 'images/icons/logout-white.svg';
import { ReactComponent as CheckIcon } from 'images/icons/check.svg';
import { ReactComponent as EditIcon } from 'images/icons/edit.svg';
import { ReactComponent as CrossIcon } from 'images/icons/cross-small.svg';
import defaultAvatar from 'images/placeholder/avatar-default.jpg';
import ModalApproveAction from 'shared/components/ModalApproveAction';
import { validationSchema } from './schema';

import { useAuth } from 'shared/hooks/useAuth';
import { logOut, updateUser } from 'redux/auth/operations';

import styles from './userCard.module.scss';

const initialState = {
    avatar: null,
    name: '',
    email: '',
    birthday: '',
    phone: '',
    city: '',
};

const getImgSrc = (oldAvatar, newAvatar) => {
    if (newAvatar) {
        const blobUrl = URL.createObjectURL(newAvatar);
        return blobUrl;
    }

    if (oldAvatar) {
        return oldAvatar;
    }

    return defaultAvatar;
};

const UserCard = () => {
    const [state, setState] = useState({ ...initialState });
    const [isFieldShown, setIsFieldShown] = useState(null);
    const [isModalShown, setIsModalShown] = useState(false);
    const { user } = useAuth();

    const dispatch = useDispatch();

    const handleModal = () => {
        setIsModalShown(prevState => !prevState);
    };

    const handleLogout = () => {
        dispatch(logOut());
    };

    const handleRedactClick = e => {
        const { name } = e.currentTarget;
        setIsFieldShown(name);
    };

    const handleFileSelect = e => {
        const file = e.target.files[0];
        const blob = new Blob([file], { type: file.type });
        setState(prevState => ({
            ...prevState,
            avatar: blob,
        }));
    };

    const handleChange = e => {
        const { name, value } = e.target;

        setState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleAvatarClear = () => {
        setState(prevState => ({
            ...prevState,
            avatar: null,
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const formData = new FormData();
            const entries = Object.entries(state);

            let validationObject = {};

            entries.forEach(entry => {
                if (entry[1]) {
                    formData.append(entry[0], entry[1]);
                    validationObject = {
                        ...validationObject,
                        [entry[0]]: entry[1],
                    };
                }
            });

            const res = !formData.entries().next().done;

            setState({ ...initialState });
            setIsFieldShown(null);

            if (res) {
                await validationSchema.validate(validationObject);
                dispatch(updateUser(formData));
            }
        } catch (error) {
            // Show validation errors or error messages to the user
            toast.error(error.message);
        }
    };

    const { avatar, name, email, birthday, phone, city } = state;
    const {
        avatar: oldAvatar,
        name: oldName,
        email: oldEmail,
        birthday: oldBirthday,
        phone: oldPhone,
        city: oldCity,
    } = user;
    const src = getImgSrc(oldAvatar, avatar);

    return (
        <div className={styles.userCard}>
            <div className={styles.containerEditPhoto}>
                <div className={styles.userPhoto}>
                    <img className={styles.avatar} src={src} width="182" height="182" alt="Avatar" />
                </div>
                <div className={styles.wrapEditPhoto}>
                    <input type="file" id="file" accept="image/*" onChange={handleFileSelect} />
                    {avatar ? (
                        <div className={styles.avatarButtons}>
                            <button className={styles.avatarBtn} type="submit" onClick={handleSubmit}>
                                <CheckIcon className={styles.checkAvatar} width={24} height={24} />
                                Confirm
                            </button>
                            <button type="button" onClick={handleAvatarClear} className={styles.avatarBtn}>
                                <CrossIcon className={styles.clearIcon} width={24} height={24} />
                                Cancel
                            </button>
                        </div>
                    ) : (
                        <label htmlFor="file" className={styles.wrapImg}>
                            <CameraIcon className={styles.camera} width={24} height={24} />
                            <span className={styles.spanEdit}>Edit photo</span>
                        </label>
                    )}
                </div>
            </div>
            <div className={styles.userDetails}>
                <div className={styles.userData}>
                    <label htmlFor="name">Name:</label>
                    <div className={styles.position}>
                        <input
                            className={styles.input}
                            type="text"
                            id="name"
                            name="name"
                            placeholder={isFieldShown === 'name' ? 'Example Name' : ' '}
                            disabled={isFieldShown !== 'name'}
                            value={name}
                            required
                            onChange={handleChange}
                        />
                        {isFieldShown === 'name' ? (
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className={styles.btnEdit}
                                aria-label="submit changes"
                            >
                                <CheckIcon className={styles.checkIcon} width={24} height={24} />
                            </button>
                        ) : (
                            <>
                                <p className={styles.prevValue}>{oldName}</p>
                                <button
                                    className={styles.btnEdit}
                                    onClick={handleRedactClick}
                                    name="name"
                                    aria-label="start redacting"
                                >
                                    <EditIcon className={styles.iconEdit} width={20} height={20} />
                                </button>
                            </>
                        )}
                    </div>
                </div>
                <div className={styles.userData}>
                    <label htmlFor="email">Email:</label>
                    <div className={styles.position}>
                        <input
                            className={styles.input}
                            type="email"
                            id="email"
                            name="email"
                            placeholder={isFieldShown === 'email' ? 'example@mail.com' : ''}
                            disabled={isFieldShown !== 'email'}
                            value={email}
                            required
                            onChange={handleChange}
                        />
                        {isFieldShown === 'email' ? (
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className={styles.btnEdit}
                                aria-label="submit changes"
                            >
                                <CheckIcon className={styles.checkIcon} width={24} height={24} />
                            </button>
                        ) : (
                            <>
                                <p className={styles.prevValue}>{oldEmail}</p>
                                <button
                                    className={styles.btnEdit}
                                    onClick={handleRedactClick}
                                    name="email"
                                    aria-label="start redacting"
                                >
                                    <EditIcon className={styles.iconEdit} width={20} height={20} />
                                </button>
                            </>
                        )}
                    </div>
                </div>
                <div className={styles.userData}>
                    <label htmlFor="birthday">Birthday:</label>
                    <div className={styles.position}>
                        <input
                            className={styles.input}
                            type="text"
                            id="birthday"
                            name="birthday"
                            placeholder={isFieldShown === 'birthday' ? '01.01.1970' : ''}
                            disabled={isFieldShown !== 'birthday'}
                            value={birthday}
                            required
                            onChange={handleChange}
                        />
                        {isFieldShown === 'birthday' ? (
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className={styles.btnEdit}
                                aria-label="submit changes"
                            >
                                <CheckIcon className={styles.checkIcon} width={24} height={24} />
                            </button>
                        ) : (
                            <>
                                <p className={styles.prevValue}>{oldBirthday}</p>
                                <button
                                    className={styles.btnEdit}
                                    onClick={handleRedactClick}
                                    name="birthday"
                                    aria-label="start redacting"
                                >
                                    <EditIcon className={styles.iconEdit} width={20} height={20} />
                                </button>
                            </>
                        )}
                    </div>
                </div>
                <div className={styles.userData}>
                    <label htmlFor="phone">Phone:</label>
                    <div className={styles.position}>
                        <input
                            className={styles.input}
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder={isFieldShown === 'phone' ? '+380501234567' : ''}
                            disabled={isFieldShown !== 'phone'}
                            value={phone}
                            required
                            onChange={handleChange}
                        />
                        {isFieldShown === 'phone' ? (
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className={styles.btnEdit}
                                aria-label="submit changes"
                            >
                                <CheckIcon className={styles.checkIcon} width={24} height={24} />
                            </button>
                        ) : (
                            <>
                                <p className={styles.prevValue}>{oldPhone}</p>
                                <button
                                    className={styles.btnEdit}
                                    onClick={handleRedactClick}
                                    name="phone"
                                    aria-label="start redacting"
                                >
                                    <EditIcon className={styles.iconEdit} width={20} height={20} />
                                </button>
                            </>
                        )}
                    </div>
                </div>
                <div className={styles.userData}>
                    <label htmlFor="city">City:</label>
                    <div className={styles.position}>
                        <input
                            className={styles.input}
                            type="text"
                            id="city"
                            name="city"
                            placeholder={isFieldShown === 'city' ? 'Example' : ''}
                            disabled={isFieldShown !== 'city'}
                            value={city}
                            required
                            onChange={handleChange}
                        />
                        {isFieldShown === 'city' ? (
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className={styles.btnEdit}
                                aria-label="submit changes"
                            >
                                <CheckIcon className={styles.checkIcon} width={24} height={24} />
                            </button>
                        ) : (
                            <>
                                <p className={styles.prevValue}>{oldCity}</p>
                                <button
                                    className={styles.btnEdit}
                                    onClick={handleRedactClick}
                                    name="city"
                                    aria-label="start redacting"
                                >
                                    <EditIcon className={styles.iconEdit} width={20} height={20} />
                                </button>
                            </>
                        )}
                    </div>
                </div>
                <button className={styles.logOut} onClick={handleModal}>
                    <LogoutIcon className={styles.logOutIcon} width={24} height={24} />
                    Log Out
                </button>
            </div>
            {isModalShown && (
                <ModalApproveAction onClose={handleModal}>
                    <div className={styles.modal}>
                        <h2 className={styles.titleModal}>Already leaving?</h2>
                        <div className={styles.modalContent}>
                            <div className={styles.modalButtons}>
                                <button className={styles.cancelButton} onClick={handleModal}>
                                    <span>Cancel</span>
                                </button>
                                <button className={styles.yesButton} onClick={handleLogout}>
                                    <span className={styles.titleBtnYes}>Yes</span>
                                    <LogoutWhiteIcon className={styles.logoutModal} width={24} height={24} />
                                </button>
                            </div>
                        </div>
                    </div>
                </ModalApproveAction>
            )}
        </div>
    );
};

export default UserCard;
