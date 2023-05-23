import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './OurFriendsItem.module.scss';

const OurFriendCard = ({ title, logo, timeTittle, timeOptions, address, linkadress, email, phone }) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setIsDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownVisible(false);
    };
    return (
        <li className={styles.card}>
            <h2 className={styles.card__title}>{title}</h2>
            <div className={styles.card__wrap}>
                <div className={styles.card__frame}>
                    <img src={logo} alt={`${title} logo`} />
                </div>

                <ul className={styles.card__list}>
                    <li className={styles.card__listItemTime}>
                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <div className={styles.card__labelTime}>Time:</div>
                            <div className={styles.card__dataTime}>{timeTittle}</div>
                            {isDropdownVisible && (
                                <ul className={styles.dropDown}>
                                    {timeOptions.map((option, index) => (
                                        <li key={index}>{option}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
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
};

OurFriendCard.propTypes = {
    title: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    timeTittle: PropTypes.string.isRequired,
    timeOptions: PropTypes.arrayOf(PropTypes.string.isRequired),
    address: PropTypes.string.isRequired,
    linkadress: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};

const FriendsPage = () => {
    const friends = [
        {
            id: 1,
            title: 'ЛКП "ЛЕВ"',

            logo: require('../../../images/friends/lion.png'),
            timeTittle: '8:00- 19:00',
            timeOptions: [
                'MN 8:00 - 19:00',
                'TU 8:00 - 19:00',
                'WE 8:00 - 19:00',
                'TH 8:00 - 19:00',
                'FR 8:00 - 19:00',
                'SA 8:00 - 19:00',
                'SU 8:00 - 19:00',
            ],

            address: 'Promuslova Street, 56',
            linkadress: 'https://goo.gl/maps/hDwKTL4ZD76qgZmC8?coh=178573&entry=tt',
            email: 'lkplev@gmail.com',
            phone: '(032) 293-30-41',
        },
        {
            id: 2,
            title: 'Барбос',

            logo: require('../../../images/friends/barbos.png'),
            timeTittle: '8:00- 20:00',
            timeOptions: [
                'MN 8:00 - 20:00',
                'TU 8:00 - 20:00',
                'WE 8:00 - 20:00',
                'TH 8:00 - 20:00',
                'FR 8:00 - 20:00',
                'SA 8:00 - 20:00',
                'SU 8:00 - 20:00',
            ],

            address: 'Grigorenka Street, 25',
            linkadress: 'https://goo.gl/maps/iGGoSv893zUW22Vq7?coh=178573&entry=tt',
            email: 'barbos@gmail.com',
            phone: '066 488 0480',
        },
        {
            id: 3,
            title: 'Whiskas',

            logo: require('../../../images/friends/whiskas.png'),
            timeTittle: 'day and night',
            timeOptions: ['We are working day and night'],

            address: 'website only',
            linkadress: 'https://www.whiskas.ua/',
            email: 'whiskas@gmail.com',
            phone: '0–800–500–155',
        },
        {
            id: 4,
            title: 'Happy paw',

            logo: require('../../../images/friends/happypaw.png'),
            timeTittle: '09:00- 19:00',
            timeOptions: [
                'MN 9:00 - 19:00',
                'TU 9:00 - 19:00',
                'WE 9:00 - 19:00',
                'TH 9:00 - 19:00',
                'FR 9:00 - 19:00',
                'SA 9:00 - 19:00',
                'SU 9:00 - 19:00',
            ],

            address: 'Chota Rystaveli Street, 44',
            linkadress: 'https://goo.gl/maps/9gE3C8cMTBYTpyGeA?coh=178573&entry=tt',
            email: 'hello@happypaw.ua',
            phone: '+380 44 290-03-29',
        },
        {
            id: 5,
            title: 'PetHelp',

            logo: require('../../../images/friends/pethelp.png'),
            timeTittle: 'day and night',
            timeOptions: ['We are working day and night'],
            address: 'website only',
            linkadress: 'https://pethelp.com.ua/dopomogti/',
            email: 'pithelp.ukr@gmail.com',
            phone: 'email only',
        },
        {
            id: 6,
            title: 'Сіріус',

            logo: require('../../../images/friends/sirius.png'),
            timeTittle: '11:00- 16:00',
            timeOptions: [
                'MN 11:00 - 16:00',
                'TU 11:00 - 16:00',
                'WE 11:00 - 16:00',
                'TH 11:00 - 16:00',
                'FR 11:00 - 16:00',
                'SA 11:00 - 16:00',
                'SU 11:00 - 16:00',
            ],

            address: 'Fedorivka, Kyiv Oblast',
            linkadress: 'https://goo.gl/maps/18zVkCsBeDcBULYD7?coh=178573&entry=tt',
            email: 'dogcat.sirius@gmail.com',
            phone: '+38 093 193 40 69',
        },
        {
            id: 7,
            title: 'PURINA',

            logo: require('../../../images/friends/purina.png'),
            timeTittle: 'day and night',
            timeOptions: ['We are working day and night'],
            address: 'website only',
            linkadress: 'https://www.purina.ua/',
            email: 'info@ua.nestle.com',
            phone: '1-800-778-7462',
        },
        {
            id: 8,
            title: 'Josera',

            logo: require('../../../images/friends/josera.png'),
            timeTittle: '09:00-17:00',
            timeOptions: [
                'MN 09:00 - 17:00',
                'TU 09:00 - 17:00',
                'WE 09:00 - 17:00',
                'TH 09:00 - 17:00',
                'FR 09:00 - 17:00',
                'SA 09:00 - 17:00',
                'SU 09:00 - 17:00',
            ],

            address: 'Sholom-Aleikhema St, 11',
            linkadress: 'https://goo.gl/maps/QX9WrqUi6XRvuA5a6?coh=178573&entry=tt',
            email: 'info@josera.ua',
            phone: '0800 409 060',
        },
        {
            id: 9,
            title: 'LICO',

            logo: require('../../../images/friends/lico.png'),
            timeTittle: '9:00-20:00',
            timeOptions: [
                'MN 09:00 - 20:00',
                'TU 09:00 - 20:00',
                'WE 09:00 - 20:00',
                'TH 09:00 - 20:00',
                'FR 09:00 - 20:00',
                'SA 09:00 - 20:00',
                'SU 09:00 - 20:00',
            ],

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
                        timeTittle={friend.timeTittle}
                        timeOptions={friend.timeOptions}
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
