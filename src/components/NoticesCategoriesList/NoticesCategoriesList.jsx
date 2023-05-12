import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import axios from 'axios';

import NoticesCategoryItem from './NoticesCategoryItem/NoticesCategoryItem';

// EXAMPLE DATA TO EMULATE BACKEND //
import itemsSell from './itemsSell';
import itemsInGoodHands from './itemsInGoodHands';
import itemsLostFound from './itemsLostFound';
// EXAMPLE DATA TO EMULATE BACKEND //

import styles from './notices-categories-list.module.scss';

const NoticesCategoriesList = () => {
    const { pathname } = useLocation();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const path = pathname.split('/');
        const category = path[path.length - 1];
        // console.log(category);

        // ======  EXAMPLE GET REQUEST DEPENDING ON CATEGORY ====== //
        // const notices = axios.get('/api/pets', {
        //   params: {
        //     category,
        //   },
        // });

        const notices = () => {
            if (category === 'sell') {
                return itemsSell;
            } else if (category === 'for-free') {
                return itemsInGoodHands;
            } else if (category === 'lost-found') {
                return itemsLostFound;
            } else {
                return [];
            }
        };

        setItems(notices());
    }, [pathname]);

    return (
        <ul className={styles.list}>
            {items.map(item => (
                <NoticesCategoryItem item={item} key={item.id} />
            ))}
        </ul>
    );
};

export default NoticesCategoriesList;
