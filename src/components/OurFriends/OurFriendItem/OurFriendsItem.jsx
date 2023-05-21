import React from 'react';
import styles from './OurFriendsItem.module.scss';

import lion from 'images/our-friends/lion.png';
import barbos from 'images/our-friends/barbos.png';
import whiskas from 'images/our-friends/whiskas.png';
import happypaw from 'images/our-friends/happypaw.png';
import pethelp from 'images/our-friends/pethelp.png';
import sirius from 'images/our-friends/sirius.png';
import purina from 'images/our-friends/purina.png';
import josera from 'images/our-friends/josera.png';
import lico from 'images/our-friends/lico.png';

const OurFriendCard = ({ title, logo, time, address, linkadress, email, phone }) => (
    <li className={styles.card}>
        <h2 className={styles.card__title}>{title}</h2>
        <div className={styles.card__wrap}>
            <div className={styles.card__frame}>
                <img src={logo} alt={`${title} logo`} />
            </div>

            <ul className={styles.card__list}>
                <li className={styles.card__listItem}>
                    <span className={styles.card__label}>Time:</span>
                    <span className={styles.card__data}>{time}</span>
                </li>
                <li className={styles.card__listItem}>
                    <span className={styles.card__label}>Address:</span>
                    <span className={styles.card__data}>
                        {' '}
                        <a href={linkadress} target="_blank" rel="noreferrer">
                            <address>{address}</address>
                        </a>
                    </span>
                </li>
                <li className={styles.card__listItem}>
                    <span className={styles.card__label}>Email:</span>
                    <span className={styles.card__data}>
                        <a href="mailto:{email}">{email}</a>
                    </span>
                </li>
                <li className={styles.card__listItem}>
                    <span className={styles.card__label}>Phone:</span>
                    <span className={styles.card__data}>
                        <a href="tel:{phone}">{phone}</a>
                    </span>
                </li>
            </ul>
        </div>
    </li>
);

const FriendsPage = () => {
    const friends = [
        {
            id: 1,
            title: 'ЛКП "ЛЕВ"',
            logo: lion,
            time: '8:00-19:00',
            address: 'Promuslova Street, 56',
            linkadress: 'https://goo.gl/maps/hDwKTL4ZD76qgZmC8?coh=178573&entry=tt',
            email: 'lkplev@gmail.com',
            phone: '(032) 293-30-41',
        },
        {
            id: 2,
            title: 'Барбос',
            logo: barbos,
            time: '8:00-20:00',
            address: 'Grigorenka Street, 25',
            linkadress: 'https://goo.gl/maps/iGGoSv893zUW22Vq7?coh=178573&entry=tt',
            email: 'barbos@gmail.com',
            phone: '066 488 0480',
        },
        {
            id: 3,
            title: 'Whiskas',
            logo: whiskas,
            time: 'day and night',
            address: 'website only',
            linkadress: 'https://www.whiskas.ua/',
            email: 'whiskas@gmail.com',
            phone: '0–800–500–155',
        },
        {
            id: 4,
            title: 'Happy paw',
            logo: happypaw,
            time: '09:00-19:00',
            address: 'Chota Rystaveli Street, 44',
            linkadress: 'https://goo.gl/maps/9gE3C8cMTBYTpyGeA?coh=178573&entry=tt',
            email: 'hello@happypaw.ua',
            phone: '+380 44 290-03-29',
        },
        {
            id: 5,
            title: 'PetHelp',
            logo: pethelp,
            time: 'day and night',
            address: 'website only',
            linkadress: 'https://pethelp.com.ua/dopomogti/',
            email: 'pithelp.ukr@gmail.com',
            phone: 'email only',
        },
        {
            id: 6,
            title: 'Сіріус',
            logo: sirius,
            time: '11:00-16:00',
            address: 'Fedorivka, Kyiv Oblast',
            linkadress: 'https://goo.gl/maps/18zVkCsBeDcBULYD7?coh=178573&entry=tt',
            email: 'dogcat.sirius@gmail.com',
            phone: '+38 093 193 40 69',
        },
        {
            id: 7,
            title: 'PURINA',
            logo: purina,
            time: 'day and night',
            address: 'website only',
            linkadress: 'https://www.purina.ua/',
            email: 'info@ua.nestle.com',
            phone: '1-800-778-7462',
        },
        {
            id: 8,
            title: 'Josera',
            logo: josera,
            time: '09:00-17:00',
            address: 'Sholom-Aleikhema St, 11',
            linkadress: 'https://goo.gl/maps/QX9WrqUi6XRvuA5a6?coh=178573&entry=tt',
            email: 'info@josera.ua',
            phone: '0800 409 060',
        },
        {
            id: 9,
            title: 'LICO',
            logo: lico,
            time: '9:00-20:00',
            address: 'Dryhetiv Street, 77',
            linkadress: 'https://goo.gl/maps/tDU1Nc24Da7fxxtM7?coh=178573&entry=tt',
            email: 'lico@gmail.com',
            phone: '+38 097 509 8005',
        },
    ];

    return (
        <div className={styles.section}>
            <ul className={styles.friendsList}>
                {friends.map(friend => (
                    <OurFriendCard
                        key={friend.id}
                        title={friend.title}
                        logo={friend.logo}
                        time={friend.time}
                        address={friend.address}
                        linkadress={friend.linkadress}
                        email={friend.email}
                        phone={friend.phone}
                    />
                ))}
            </ul>
        </div>
    );
};

export default FriendsPage;
