import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

import styles from './userCard.module.scss';

import avatar from '../../images/Photo default.jpg';
import logout from '../../images/icons/logout.svg';
import edit from '../../images/icons/edit.svg';
import camera from '../../images/icons/camera.svg';
import cross from '../../images/icons/cross-small.svg';
import logoutBtn from '../../images/icons/logout-white.svg';
const UserCard = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');

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
        dispatch(clearAuthHeader());
    };

    return (
        <div className={styles.userCard}>
            <div className={styles.containerEditPhoto}>
                <div className={styles.wrap}>
                    <div className={styles.userPhoto}>
                        <img src={avatar} width="182" height="182" alt="Avatar" />
                    </div>
                </div>
                <div className={styles.wrapEditPhoto}>
                    <input type="file" id="file" accept="image/*" />
                    <label htmlFor="file" className={styles.wrapImg}>
                        <img className={styles.camera} src={camera} width="24" height="24" alt="Camera" />
                        <span className={styles.spanEdit}>Edit photo</span>
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
                            value={name}
                            required
                            onChange={e => setName(e.target.value)}
                        />
                        <button className={styles.btnEdit}>
                            <img className={styles.iconEdit} src={edit} width="20" height="20" alt="edit" />
                        </button>
                    </div>
                </div>
                <div className={styles.userData}>
                    <label htmlFor="email">Email:</label>
                    <div className={styles.position}>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            required
                            onChange={e => setEmail(e.target.value)}
                        />
                        <button className={styles.btnEdit}>
                            <img className={styles.iconEdit} src={edit} width="20" height="20" alt="edit" />
                        </button>
                    </div>
                </div>
                <div className={styles.userData}>
                    <label htmlFor="birthday">Birthday:</label>
                    <div className={styles.position}>
                        <input
                            type="text"
                            id="birthday"
                            name="birthday"
                            value={birthday}
                            required
                            onChange={e => setBirthday(e.target.value)}
                        />
                        <button className={styles.btnEdit}>
                            <img className={styles.iconEdit} src={edit} width="20" height="20" alt="edit" />
                        </button>
                    </div>
                </div>
                <div className={styles.userData}>
                    <label htmlFor="phone">Phone:</label>
                    <div className={styles.position}>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={phone}
                            required
                            onChange={e => setPhone(e.target.value)}
                        />
                        <button className={styles.btnEdit}>
                            <img className={styles.iconEdit} src={edit} width="20" height="20" alt="edit" />
                        </button>
                    </div>
                </div>
                <div className={styles.userData}>
                    <label htmlFor="city">City:</label>
                    <div className={styles.position}>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={city}
                            required
                            onChange={e => setCity(e.target.value)}
                        />
                        <button className={styles.btnEdit}>
                            <img className={styles.iconEdit} src={edit} width="20" height="20" alt="edit" />
                        </button>
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
