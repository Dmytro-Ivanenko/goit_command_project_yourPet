import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import NoticesCategoryItem from './NoticesCategoryItem';
import Pagination from 'shared/components/Pagination';
import { getAllNotices } from 'services/api/notices';

// EXAMPLE DATA TO EMULATE BACKEND //
// import itemsSell from './itemsSell';
// import itemsInGoodHands from './itemsInGoodHands';
// import itemsLostFound from './itemsLostFound';
// EXAMPLE DATA TO EMULATE BACKEND //

import styles from './notices-categories-list.module.scss';
import { toast } from 'react-toastify';

const PER_PAGE = 12;

const NoticesCategoriesList = () => {
    const [items, setItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    const { pathname } = useLocation();
    const prevPathname = useRef(pathname);

    useEffect(() => {
        const path = pathname.split('/');
        const pathEnd = path[path.length - 1];

        const getCategory = () => {
            if (pathEnd === 'sell') {
                return 'sell';
            } else if (pathEnd === 'lost-found') {
                return 'lost/found';
            } else if (pathEnd === 'for-free') {
                return 'in good hands';
            }
        };

        if (prevPathname.current !== pathname) {
            // reset pagination for category change
            prevPathname.current = pathname;
            setCurrentPage(0);
        }

        const getApiNotices = async () => {
            try {
                const notices = await getAllNotices();

                if (notices.length === 0) {
                    setItems(0);
                    setCurrentPage(0);
                    setPageCount(0);
                    return;
                }

                // Temporary filtration to resemble different categories
                const filteredNotices = notices.filter(notice => notice.category === getCategory());

                // Frontend pagination logic, should become obsolete in the future
                setPageCount(Math.ceil(filteredNotices.length / PER_PAGE));
                const startOffset = (currentPage * PER_PAGE) % filteredNotices.length;
                const endOffset = startOffset + PER_PAGE;
                const paginatedNotices = filteredNotices.slice(startOffset, endOffset);

                setItems(paginatedNotices);
            } catch (error) {
                toast.error(error.message);
            }
        };

        getApiNotices();
    }, [currentPage, pathname]);

    const onPageClick = e => {
        setCurrentPage(e.selected);
    };

    return (
        <>
            {items.length > 0 && (
                <ul className={styles.list}>
                    {items.map(item => (
                        <NoticesCategoryItem key={item._id} item={item} />
                    ))}
                </ul>
            )}
            <Pagination handlePageClick={onPageClick} pageCount={pageCount} currentPage={currentPage} />
        </>
    );
};

export default NoticesCategoriesList;
