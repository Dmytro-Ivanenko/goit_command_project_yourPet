import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from 'shared/hooks/useAuth';
// import axios from 'axios';

import NoticesCategoryItem from './NoticesCategoryItem';
import Pagination from 'shared/components/Pagination';
import ModalContainer from 'shared/components/ModalContainer';
import ModalNotice from 'components/ModalNotice';

// EXAMPLE DATA TO EMULATE BACKEND //
import itemsSell from './itemsSell';
import itemsInGoodHands from './itemsInGoodHands';
import itemsLostFound from './itemsLostFound';
// EXAMPLE DATA TO EMULATE BACKEND //

import styles from './notices-categories-list.module.scss';

const PER_PAGE = 12;

const NoticesCategoriesList = () => {
    const [items, setItems] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { isLoggedIn } = useAuth();

    const { pathname } = useLocation();

    useEffect(() => {
        const path = pathname.split('/');
        const category = path[path.length - 1];

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

        if (notices().length !== 0) {
            setItems(notices());
        } else {
            return;
        }

        const endOffset = itemOffset + PER_PAGE;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / PER_PAGE));
    }, [itemOffset, items, pathname]);

    const onPageClick = e => {
        const newOffset = (e.selected * PER_PAGE) % items.length;
        setItemOffset(newOffset);
    };

    const handleModal = () => {
        if (!isLoggedIn) {
            // Unauthorized notification
            console.log('unathorized');
            return;
        }

        setIsModalOpen(prevState => !prevState);
    };

    return (
        <>
            <ul className={styles.list}>
                {currentItems.map(item => (
                    <NoticesCategoryItem key={item.id} item={item} openModal={handleModal} />
                ))}
            </ul>
            <Pagination handlePageClick={onPageClick} pageCount={pageCount} />
            {isModalOpen && (
                <ModalContainer onClose={handleModal}>
                    <ModalNotice />
                </ModalContainer>
            )}
        </>
    );
};

export default NoticesCategoriesList;
