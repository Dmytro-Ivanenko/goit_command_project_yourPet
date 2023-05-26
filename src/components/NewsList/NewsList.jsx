import { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import Pagination from '../../shared/components/Pagination';
import NewsItem from './NewsItem';
import styles from './news_list.module.scss';

const PER_PAGE = 12;

const NewsList = ({ list }) => {
    const [items, setItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setPageCount(Math.ceil(list.length / PER_PAGE));
        const startOffset = (currentPage * PER_PAGE) % list.length;
        const endOffset = startOffset + PER_PAGE;
        const paginatedNews = list.slice(startOffset, endOffset);
        setItems(paginatedNews);
    }, [currentPage, list]);

    const onPageClick = useCallback(event => {
        setCurrentPage(event.selected + 1);
    }, []);
    return (
        <>
            {items.length > 0 && (
                <ul className={styles.list}>
                    {items.map(item => (
                        <NewsItem key={item._id} item={item} />
                    ))}
                </ul>
            )}
            {pageCount > 1 && <Pagination pageCount={pageCount} onPageClick={onPageClick} currentPage={currentPage} />}
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
