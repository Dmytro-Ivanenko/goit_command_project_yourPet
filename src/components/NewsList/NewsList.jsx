import { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

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

    const onPageClick = useCallback(
        event => {
            const newOffset = (event.selected * PER_PAGE) % items.length;
            setItemOffset(newOffset);
        },
        [items.length]
    );

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

NewsList.defaultProps = {
    list: [],
};

NewsList.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string,
            text: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            imgUrl: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
        }).isRequired
    ),
};

export default NewsList;
