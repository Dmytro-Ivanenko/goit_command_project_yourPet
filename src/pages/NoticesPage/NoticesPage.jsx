import { useEffect, useState, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import { getSellNotices, getLostNotices, getInGoodHandsNotices } from 'services/api/notices';
import { filterNotices, getGender } from './filter';

import PageTitle from 'shared/components/PageTitle';
import SearchForm from 'shared/components/SearchForm';
import Pagination from 'shared/components/Pagination';
import Loader from 'shared/components/Loader/Loader';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav';
import NoticesFilters from 'components/NoticesFilters';
import AddPetButton from 'components/AddPetButton';
import SelectedFilters from 'components/SelectedFilters';
import { calcAge } from 'shared/helpers/calcAge';

import styles from './notices-page.module.scss';

const PER_PAGE = 12;

const NoticesPage = () => {
    const [items, setItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState('');
    const [selectedFilters, setSelectedFilters] = useState([]);

    const { pathname } = useLocation();
    const prevPathname = useRef(pathname);

    useEffect(() => {
        const path = pathname.split('/');
        const category = path[path.length - 1];

        setIsLoading(true);

        if (prevPathname.current !== pathname) {
            // reset pagination for category change
            prevPathname.current = pathname;
            setCurrentPage(0);
        }

        const getApiNotices = async () => {
            try {
                const getNotices = async () => {
                    if (category === 'sell') {
                        return await getSellNotices(query, getGender(selectedFilters));
                    } else if (category === 'lost-found') {
                        return await getLostNotices(query, getGender(selectedFilters));
                    } else if (category === 'for-free') {
                        return await getInGoodHandsNotices(query, getGender(selectedFilters));
                    }
                };

                const notices = await getNotices();

                if (notices.length === 0) {
                    setItems(0);
                    setCurrentPage(0);
                    setPageCount(0);
                    setIsLoading(false);
                    return;
                }

                // Age formatting for cards
                notices.map(notice => {
                    notice.date = calcAge(notice.date);
                    return notice;
                });

                // Filter by age
                const filteredNotices = filterNotices(notices, selectedFilters);

                // Frontend pagination logic, should become obsolete in the future
                setPageCount(Math.ceil(filteredNotices.length / PER_PAGE));
                const startOffset = (currentPage * PER_PAGE) % filteredNotices.length;
                const endOffset = startOffset + PER_PAGE;
                const paginatedNotices = filteredNotices.slice(startOffset, endOffset);

                setItems(paginatedNotices);
                setIsLoading(false);
            } catch (error) {
                toast.error(error.message);
            }
        };

        getApiNotices();
    }, [currentPage, selectedFilters, pathname, query]);

    const handleFilterChange = target => {
        const { value, checked } = target;
        setSelectedFilters(prevFilters => {
            if (checked) {
                return [...prevFilters, value];
            } else {
                return prevFilters.filter(filter => filter !== value);
            }
        });
    };

    const handleFilterReset = value => {
        setSelectedFilters(prevFilters => {
            return prevFilters.filter(filter => filter !== value);
        });
    };

    const handleSubmit = formData => {
        setQuery(formData.query);
    };

    const handlePageClick = e => {
        setCurrentPage(e.selected);
    };

    return (
        <div className={styles.container}>
            <PageTitle text={'Find your favorite pet'} />
            <div className={styles.formWrapper}>
                <SearchForm onSubmit={handleSubmit} />
            </div>
            <div className={styles.controls}>
                <NoticesCategoriesNav />
                <div className={styles.wrapper}>
                    <div className={styles.buttonWrapper}>
                        <NoticesFilters onFilter={handleFilterChange} filters={selectedFilters} />
                        <AddPetButton />
                    </div>
                    {selectedFilters.length > 0 && (
                        <SelectedFilters filters={selectedFilters} handleReset={handleFilterReset} />
                    )}
                </div>
            </div>

            {isLoading && <Loader />}
            <Outlet context={items} />
            {pageCount > 1 && (
                <Pagination onPageClick={handlePageClick} pageCount={pageCount} currentPage={currentPage} />
            )}
        </div>
    );
};

export default NoticesPage;
