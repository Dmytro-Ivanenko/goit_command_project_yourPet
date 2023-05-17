import { useEffect, useState, useRef } from 'react';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { getSellNotices, getLostNotices, getInGoodHandsNotices } from 'services/api/notices';
import { filterNotices } from './filter';

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
    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get('query');
    const gender = searchParams.get('gender');
    const age = searchParams.get('age');
    console.log(searchParams);

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
                        return await getSellNotices(query, gender);
                    } else if (category === 'lost-found') {
                        return await getLostNotices(query, gender);
                    } else if (category === 'for-free') {
                        return await getInGoodHandsNotices(query, gender);
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
                const filteredNotices = filterNotices(notices, age);

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
        const { value, checked, name } = target;

        if (name === 'gender') {
            if (checked) {
                searchParams.set('gender', value);
                setSearchParams(searchParams);
                return;
            }

            searchParams.delete('gender');
            setSearchParams(searchParams);
            return;
        }

        if (checked) {
            searchParams.set('age', value);
            setSearchParams(searchParams);
            return;
        }

        searchParams.delete('age');
        setSearchParams(searchParams);
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

    const filters = [searchParams.get('age'), searchParams.get('gender')];

    if (searchParams.get('age') === null) {
        filters.splice(0, 1);
    }

    if (searchParams.get('gender') === null) {
        filters.splice(filters.length - 1, 1);
    }

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
                        <NoticesFilters onFilter={handleFilterChange} filters={searchParams} />
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
