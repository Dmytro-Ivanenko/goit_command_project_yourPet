import React, { useState } from 'react';
import styles from './userCard.module.scss';
import avatar from '../../images/Photo default.jpg';
import logout from '../../images/icons/logout.svg';
import edit from '../../images/icons/edit.svg'
import camera from '../../images/icons/camera.svg'
const UserCard = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');


    return (
    <div className={styles.userCard}>
        <div className={styles.containerEditPhoto}>
            <div className={styles.wrap}>
                <div className={styles.userPhoto}>
                    <img src={avatar} width="182" height="182" alt="Avatar" />       
                </div>  
            </div>
            <div className={styles.wrapEditPhoto}>
                <input  type='file' id='file' accept='image/*' />   
                    <label htmlFor='file' className={styles.wrapImg}>
                        <img className={styles.camera}  src={camera} width="24" height="24" alt="Camera" />
                        <span className={styles.spanEdit}>Edit photo</span>
                    </label>   
            </div>   
        </div>  
      <div className={styles.userDetails}>
        <div className={styles.userData}>
            <label htmlFor="name">Name:</label>
            <div className={styles.position}>
                <input type="text" id="name" name="name" value={name} required onChange={(e) => setName(e.target.value)} />
                    <button className={styles.btnEdit}>
                    <img className={styles.iconEdit} src={edit} width="20" height="20" alt="edit" />     
                    </button>           
            </div>      
        </div>
        <div className={styles.userData}>
            <label htmlFor="email">Email:</label>
            <div className={styles.position}>
                 <input type="email" id="email" name="email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                <button className={styles.btnEdit}>
                   <img className={styles.iconEdit} src={edit} width="20" height="20" alt="edit" />     
                </button>       
            </div>
        </div>
        <div className={styles.userData}>
            <label htmlFor="birthday">Birthday:</label>
            <div className={styles.position}>
                <input type="text" id="birthday" name="birthday" value={birthday} required onChange={(e) => setBirthday(e.target.value)} />
                <button className={styles.btnEdit}>
                   <img className={styles.iconEdit} src={edit} width="20" height="20" alt="edit" />     
                </button>        
            </div>
        </div>
        <div className={styles.userData}>
            <label htmlFor="phone">Phone:</label>
            <div className={styles.position} >
                  <input type="tel" id="phone" name="phone" value={phone} required onChange={(e) => setPhone(e.target.value)} />
                <button className={styles.btnEdit}>
                   <img className={styles.iconEdit} src={edit} width="20" height="20" alt="edit" />     
                </button>      
            </div>
        </div>
        <div className={styles.userData}>
            <label htmlFor="city">City:</label>
            <div className={styles.position}>
                <input type="text" id="city" name="city" value={city} required onChange={(e) => setCity(e.target.value)} />
                <button className={styles.btnEdit}>
                   <img className={styles.iconEdit} src={edit} width="20" height="20" alt="edit" />     
                </button>        
            </div>
        </div>
        </div>
         <div className={styles.conteinerLogaut}>
            <button className={styles.logOut} type='submit'>
                    <img className={styles.icon} src={logout} width="24" height="24" alt="logaut" />Log Out
            </button>  
        </div>    
    </div>
    )
}

export default UserCard;