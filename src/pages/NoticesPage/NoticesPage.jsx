import { useEffect, useState, useRef } from 'react';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import PageTitle from 'shared/components/PageTitle';
import SearchForm from 'shared/components/SearchForm';
import Pagination from 'shared/components/Pagination';
import Loader from 'shared/components/Loader/Loader';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav';
import NoticesFilters from 'components/NoticesFilters';
import AddPetButton from 'components/AddPetButton';
import SelectedFilters from 'components/SelectedFilters';

import { filterByAge, getFilterValues } from './filter';
import { getNotices, applySearchParams, calcAge } from 'shared/helpers';

import styles from './notices-page.module.scss';

const PER_PAGE = 12;

const NoticesPage = () => {
    const [items, setItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const { pathname } = useLocation();
    const prevPathname = useRef(pathname);
    const query = searchParams.get('query');
    const gender = searchParams.get('gender');
    const age = searchParams.get('age');

    useEffect(() => {
        setIsLoading(true);

        const path = pathname.split('/');
        const category = path[path.length - 1];

        if (prevPathname.current !== pathname) {
            // reset pagination for category change
            prevPathname.current = pathname;
            setCurrentPage(0);
            // keep filters between categories
        }

        const getApiNotices = async () => {
            try {
                const notices = await getNotices(category, query, gender);

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

                const filteredNotices = filterByAge(notices, age);

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
    }, [currentPage, pathname, query, gender, age]);

    const handleFilterChange = target => {
        applySearchParams(target, searchParams, setSearchParams);
    };

    const handleFilterReset = value => {
        if (value === 'male' || value === 'female') {
            searchParams.delete('gender');
            setSearchParams(searchParams);
            return;
        }

        searchParams.delete('age');
        setSearchParams(searchParams);
    };

    const handleSubmit = ({ query }) => {
        searchParams.set('query', query);
        setSearchParams(searchParams);
    };

    const handlePageClick = e => {
        setCurrentPage(e.selected);
    };

    const filters = getFilterValues(searchParams);

    return (
        <div className={styles.container}>
            <PageTitle text={'Find your favorite pet'} />
            <div className={styles.formWrapper}>
                <SearchForm onSubmit={handleSubmit} />
            </div>
            <div className={styles.controls}>
                <NoticesCategoriesNav searchParams={searchParams} />
                <div className={styles.wrapper}>
                    <div className={styles.buttonWrapper}>
                        <NoticesFilters filters={filters} onFilter={handleFilterChange} />
                        <AddPetButton />
                    </div>
                    {filters.length > 0 && <SelectedFilters filters={filters} handleReset={handleFilterReset} />}
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
