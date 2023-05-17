import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import NewsItem from './NewsItem';
import Pagination from '../../shared/components/Pagination';
import newsSource from './newsSource';

import styles from './news_list.module.scss';

const PER_PAGE = 12;

const initialSt = [...newsSource].splice(0, 12);

const NewsList = ({ list, giveCurrentItems }) => {
    console.log('OPPPPP', list);
    const [items, setItems] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const firstMount = useRef(true);

    const { pathname } = useLocation();

    useEffect(() => {
        if (firstMount.current) {
            firstMount.current = false;
            return;
        }

        console.log('L', list);
        const path = pathname.split('/');
        const category = path[path.length - 1];

        if (list.length !== 0) {
            setItems(list);
        } else {
            return;
        }

        const endOffset = itemOffset + PER_PAGE;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(items.slice(itemOffset, endOffset));
        // giveCurrentItems(currentItems)
        setPageCount(Math.ceil(items.length / PER_PAGE));
    }, [itemOffset, items, pathname, list]);

    const onPageClick = event => {
        console.log('EVENT SELECTED', event.selected);
        const newOffset = (event.selected * PER_PAGE) % items.length;
        setItemOffset(newOffset);
    };

    const y = currentItems.length
        ? currentItems.map(item => <NewsItem key={item.id} item={item} />)
        : initialSt.map(item => <NewsItem key={item.id} item={item} />);

    return (
        <div>
            <ul className={styles.list}>{y}</ul>
            <Pagination handlePageClick={onPageClick} pageCount={pageCount} />
        </div>
    );
};

export default NewsList;
