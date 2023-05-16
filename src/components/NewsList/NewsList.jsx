import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import NewsItem from './NewsItem';
import Pagination from '../../shared/components/Pagination';
import newsSource from './newsSource';

import styles from './news_list.module.scss';

const PER_PAGE = 12;

const NewsList = () => {
    const [items, setItems] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const { pathname } = useLocation();

    useEffect(() => {
        const path = pathname.split('/');
        const category = path[path.length - 1];

        if (newsSource.length !== 0) {
            setItems(newsSource);
        } else {
            return;
        }

        const endOffset = itemOffset + PER_PAGE;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / PER_PAGE));
    }, [itemOffset, items, pathname]);

    const onPageClick = event => {
        console.log('EVENT SELECTED', event.selected);
        const newOffset = (event.selected * PER_PAGE) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <div>
            <ul className={styles.list}>
                {currentItems.map(item => (
                    <NewsItem key={item.id} item={item} />
                ))}
            </ul>
            <Pagination handlePageClick={onPageClick} pageCount={pageCount} />
        </div>
    );
};

export default NewsList;
