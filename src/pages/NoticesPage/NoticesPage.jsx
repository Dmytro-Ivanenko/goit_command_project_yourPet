import { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import PageTitle from 'shared/components/PageTitle';
import SearchForm from 'shared/components/SearchForm';
import Pagination from 'shared/components/Pagination';
import Loader from 'shared/components/Loader/Loader';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav';
import NoticesFilters from 'components/NoticesFilters';
import AddPetButton from 'components/AddPetButton';
import SelectedFilters from 'components/SelectedFilters';
import Placeholder from 'shared/components/Placeholder';

import { getNotices, applySearchParams, getFilterValues } from 'shared/helpers';
import { useAuth } from 'shared/hooks/useAuth';
import { deleteNoticeById } from 'services/api/notices';
import { deleteFavoriteNotice, addFavoriteNotice } from 'services/api/favorites';
import { refreshUser } from 'redux/auth/operations';

import styles from './notices-page.module.scss';

const PER_PAGE = 12;

const NoticesPage = () => {
    const [items, setItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const [searchParams, setSearchParams] = useSearchParams();
    const { isLoggedIn, user } = useAuth();
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const prevPathname = useRef(pathname);

    const query = searchParams.get('query');
    const gender = searchParams.get('gender');
    const age = searchParams.get('age');
    const page = searchParams.get('page');

    const resetPage = useCallback(() => {
        searchParams.set('page', 1);
        setSearchParams(searchParams);
    }, [searchParams, setSearchParams]);

    const handleFilterChange = target => {
        applySearchParams(target, searchParams, setSearchParams);
        resetPage();
    };

    const handleFilterReset = value => {
        if (value === 'male' || value === 'female') {
            searchParams.delete('gender');
        } else {
            searchParams.delete('age');
        }

        setSearchParams(searchParams);
        resetPage();
    };

    const handleSubmit = ({ query }) => {
        searchParams.set('query', query);
        setSearchParams(searchParams);
        resetPage();
    };

    const handlePageClick = e => {
        searchParams.set('page', e.selected + 1);
        setSearchParams(searchParams);
    };

    const handleClear = () => {
        searchParams.delete('query', query);
        setSearchParams(searchParams);
        resetPage();
    };

    const getApiNotices = useCallback(async () => {
        const path = pathname.split('/');
        const category = path[path.length - 1];

        try {
            const { pets, total } = await getNotices({
                category,
                query,
                gender,
                page,
                limit: PER_PAGE,
                age,
            });

            if (pets.length === 0 && total) {
                // for cases when there is no more cards for current page
                // return and trigger next render
                searchParams.set('page', page - 1);
                setSearchParams(searchParams);
                return;
            }

            if (total === 0) {
                setItems([]);
                resetPage();
                setSearchParams(searchParams);
                setIsLoading(false);
                return;
            }

            setPageCount(Math.ceil(total / PER_PAGE));
            setItems(pets);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    }, [age, gender, page, pathname, query, resetPage, searchParams, setSearchParams]);

    const handleDelete = useCallback(
        async id => {
            try {
                await deleteNoticeById(id);
                await getApiNotices();
                toast.success('Deleted successfully!');
            } catch (error) {
                toast.error(error.message);
            }
        },
        [getApiNotices]
    );

    const handleFavoriteClick = useCallback(
        async id => {
            if (!isLoggedIn) {
                toast.error('Sign in to add to favorites.');
                return;
            }

            const path = pathname.split('/');
            const category = path[path.length - 1];

            if (user.favoriteNotices.includes(id)) {
                try {
                    await deleteFavoriteNotice(id);
                    dispatch(refreshUser());
                    if (category === 'favorite') {
                        await getApiNotices();
                    }
                    toast.success('Removed successfully!');
                } catch (error) {
                    toast.error(error.message);
                }
                return;
            }

            try {
                await addFavoriteNotice(id);
                dispatch(refreshUser());
                toast.success('Added successfully!');
            } catch (error) {
                toast.error(error.message);
            }
        },
        [dispatch, getApiNotices, isLoggedIn, pathname, user.favoriteNotices]
    );

    useEffect(() => {
        if (!searchParams.has('page')) {
            // set initial page param on first render
            resetPage();
        }

        setIsLoading(true);

        const path = pathname.split('/');
        const category = path[path.length - 1];

        // should prevent unwanted behavior
        if ((category === 'favorite' && !isLoggedIn) || (category === 'own' && !isLoggedIn)) {
            return;
        }

        if (prevPathname.current !== pathname) {
            // reset pagination for category change
            prevPathname.current = pathname;
            resetPage();
        }

        getApiNotices();
    }, [getApiNotices, isLoggedIn, pathname, resetPage, searchParams]);

    const filters = useMemo(() => getFilterValues(searchParams), [searchParams]);

    return (
        <div className={styles.container}>
            <PageTitle text={'Find your favorite pet'} />
            <div className={styles.formWrapper}>
                <SearchForm onSubmit={handleSubmit} onClear={handleClear} />
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
            <Outlet context={{ items, handleDelete, handleFavoriteClick }} />
            {items.length === 0 && !isLoading && <Placeholder text={'Oops! Nothing found.'} />}
            {pageCount > 1 && items.length > 0 && (
                <Pagination onPageClick={handlePageClick} pageCount={pageCount} currentPage={Number(page)} />
            )}
        </div>
    );
};

export default NoticesPage;
