import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

import styles from './userCard.module.scss';

import defaultAvatar from 'images/Photo default.jpg';
import logout from 'images/icons/logout.svg';
import camera from 'images/icons/camera.svg';
import cross from 'images/icons/cross-small.svg';
import logoutBtn from 'images/icons/logout-white.svg';
import { updateUser } from 'redux/auth/operations';
import { ReactComponent as CheckIcon } from 'images/icons/check.svg';
import { ReactComponent as EditIcon } from 'images/icons/edit.svg';
import { useAuth } from 'shared/hooks/useAuth';

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
    const { user } = useAuth();

    const dispatch = useDispatch();

    function openModal() {
        document.getElementById('modal-backdrop').style.display = 'block';
        document.getElementById('modal').style.display = 'block';
    }
    function closeModal() {
        document.getElementById('modal-backdrop').style.display = 'none';
        document.getElementById('modal').style.display = 'none';
    }

    const handleLogout = () => {
        dispatch(logOut());
    };

    const handleRedactClick = e => {
        const { name } = e.currentTarget;
        setIsFieldShown(name);
    };

    const handleFileSelect = e => {
        console.log(e.target.files);
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

    const handleSubmit = e => {
        e.preventDefault();

        const formData = new FormData();
        const entries = Object.entries(state);
        console.log(entries);

        entries.forEach(entry => {
            if (entry[1]) {
                formData.append(`${entry[0]}`, entry[1]);
            }
        });

        // Check if form data is not empty to prevent unnecessary api calls
        const res = !formData.entries().next().done;

        setState({ ...initialState });
        setIsFieldShown(null);

        if (res) {
            dispatch(updateUser(formData));
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
                <div className={styles.wrap}>
                    <div className={styles.userPhoto}>
                        <img src={src} width="182" height="182" alt="Avatar" />
                    </div>
                </div>
                <div className={styles.wrapEditPhoto}>
                    <input type="file" id="file" accept="image/*" onChange={handleFileSelect} />
                    <label htmlFor="file" className={styles.wrapImg}>
                        <img className={styles.camera} src={camera} width="24" height="24" alt="Camera" />
                        {avatar ? (
                            <button type="submit" onClick={handleSubmit}>
                                <CheckIcon className={styles.checkIcon} width={24} height={24} />
                                Confirm
                            </button>
                        ) : (
                            <span className={styles.spanEdit}>Edit photo</span>
                        )}
                    </label>
                </div>
            </div>
            <div className={styles.userDetails}>
                <div className={styles.userData}>
                    <label htmlFor="name">Name:</label>
                    <div className={styles.position}>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            disabled={isFieldShown !== 'name'}
                            value={name}
                            required
                            onChange={handleChange}
                        />
                        {isFieldShown === 'name' ? (
                            <button type="submit" onClick={handleSubmit} className={styles.btnEdit}>
                                <CheckIcon className={styles.checkIcon} width={24} height={24} />
                            </button>
                        ) : (
                            <>
                                <p className={styles.prevValue}>{oldName}</p>
                                <button className={styles.btnEdit} onClick={handleRedactClick} name="name">
                                    <EditIcon className={styles.iconEdit} width="20" height="20" alt="edit" />
                                </button>
                            </>
                        )}
                    </div>
                </div>
                <div className={styles.userData}>
                    <label htmlFor="email">Email:</label>
                    <div className={styles.position}>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            disabled={isFieldShown !== 'email'}
                            value={email}
                            required
                            onChange={handleChange}
                        />
                        {isFieldShown === 'email' ? (
                            <button type="submit" onClick={handleSubmit} className={styles.btnEdit}>
                                <CheckIcon className={styles.checkIcon} width={24} height={24} />
                            </button>
                        ) : (
                            <>
                                <p className={styles.prevValue}>{oldEmail}</p>
                                <button className={styles.btnEdit} onClick={handleRedactClick} name="email">
                                    <EditIcon className={styles.iconEdit} width="20" height="20" alt="edit" />
                                </button>
                            </>
                        )}
                    </div>
                </div>
                <div className={styles.userData}>
                    <label htmlFor="birthday">Birthday:</label>
                    <div className={styles.position}>
                        <input
                            type="text"
                            id="birthday"
                            name="birthday"
                            disabled={isFieldShown !== 'birthday'}
                            value={birthday}
                            required
                            onChange={handleChange}
                        />
                        {isFieldShown === 'birthday' ? (
                            <button type="submit" onClick={handleSubmit} className={styles.btnEdit}>
                                <CheckIcon className={styles.checkIcon} width={24} height={24} />
                            </button>
                        ) : (
                            <>
                                <p className={styles.prevValue}>{oldBirthday}</p>
                                <button className={styles.btnEdit} onClick={handleRedactClick} name="birthday">
                                    <EditIcon className={styles.iconEdit} width="20" height="20" alt="edit" />
                                </button>
                            </>
                        )}
                    </div>
                </div>
                <div className={styles.userData}>
                    <label htmlFor="phone">Phone:</label>
                    <div className={styles.position}>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            disabled={isFieldShown !== 'phone'}
                            value={phone}
                            required
                            onChange={handleChange}
                        />
                        {isFieldShown === 'phone' ? (
                            <button type="submit" onClick={handleSubmit} className={styles.btnEdit}>
                                <CheckIcon className={styles.checkIcon} width={24} height={24} />
                            </button>
                        ) : (
                            <>
                                <p className={styles.prevValue}>{oldPhone}</p>
                                <button className={styles.btnEdit} onClick={handleRedactClick} name="phone">
                                    <EditIcon className={styles.iconEdit} width="20" height="20" alt="edit" />
                                </button>
                            </>
                        )}
                    </div>
                </div>
                <div className={styles.userData}>
                    <label htmlFor="city">City:</label>
                    <div className={styles.position}>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            disabled={isFieldShown !== 'city'}
                            value={city}
                            required
                            onChange={handleChange}
                        />
                        {isFieldShown === 'city' ? (
                            <button type="submit" onClick={handleSubmit} className={styles.btnEdit}>
                                <CheckIcon className={styles.checkIcon} width={24} height={24} />
                            </button>
                        ) : (
                            <>
                                <p className={styles.prevValue}>{oldCity}</p>
                                <button className={styles.btnEdit} onClick={handleRedactClick} name="city">
                                    <EditIcon className={styles.iconEdit} width="20" height="20" alt="edit" />
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div id="modal-backdrop" className={styles.modalBackdrop}></div>

            <div id="modal" className={styles.modal}>
                <h2 className={styles.titleModal}>Already leaving?</h2>
                <div className={styles.modalContent}>
                    <button className={styles.crossButton} onClick={closeModal}>
                        <img className={styles.icon} src={cross} width="24" height="24" alt="cross" />
                    </button>
                    <div className={styles.modalButtons}>
                        <button className={styles.cancelButton} onClick={closeModal}>
                            Cancel
                        </button>
                        <div className={styles.wrapBtnLogout}>
                            <button className={styles.yesButton} onClick={handleLogout}>
                                <span className={styles.titleBtnYes}>Yes</span>
                                <img
                                    className={styles.logoutModal}
                                    src={logoutBtn}
                                    width="24"
                                    height="24"
                                    alt="logaut"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.conteinerLogaut}>
                <button className={styles.logOut} id="logout-button" onClick={openModal}>
                    <img className={styles.icon} src={logout} width="24" height="24" alt="logaut" />
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default UserCard;
