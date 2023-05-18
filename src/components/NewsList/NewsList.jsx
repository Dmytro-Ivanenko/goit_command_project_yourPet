import { useEffect, useState } from 'react';

import Pagination from '../../shared/components/Pagination';
import NewsItem from './NewsItem';
import newsSource from './newsSource';
import styles from './news_list.module.scss';

const PER_PAGE = 12;

const NewsList = ({ list }) => {
    const [items, setItems] = useState(newsSource);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        if (list.length !== 0) {
            setItems(list);
            const endOffset = itemOffset + PER_PAGE;
            // itemOffset = number of the first news shown (0 - default),
            // endOffset = number of the last news shown on page (12 - default)
            setItemOffset(0);
            setCurrentItems(items.slice(itemOffset, endOffset));
            setPageCount(1);
            return;
        } else {
            setItems(newsSource);
        }

        const endOffset = itemOffset + PER_PAGE;
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / PER_PAGE));
    }, [itemOffset, items, list, pageCount]);

    const onPageClick = event => {
        const newOffset = (event.selected * PER_PAGE) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <ul className={styles.list}>
                {currentItems.map(item => (
                    <NewsItem key={item.id} item={item} />
                ))}
            </ul>
            <Pagination onPageClick={onPageClick} pageCount={pageCount} />
        </>
    );
};

export default NewsList;
