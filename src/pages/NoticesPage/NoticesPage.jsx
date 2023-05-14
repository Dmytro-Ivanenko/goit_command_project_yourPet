import { Outlet } from 'react-router-dom';

import PageTitle from 'shared/components/PageTitle';
import SearchForm from 'shared/components/SearchForm';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav';
import NoticesFilters from 'components/NoticesFilters';
import AddPetButton from 'components/AddPetButton';

import styles from './notices-page.module.scss';

const NoticesPage = () => {
    return (
        <div className={styles.container}>
            <PageTitle text={'Find your favorite pet'} />
            <div className={styles.formWrapper}>
                <SearchForm />
            </div>
            <div className={styles.controls}>
                <NoticesCategoriesNav />
                <div className={styles.buttonWrapper}>
                    <NoticesFilters />
                    <AddPetButton />
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default NoticesPage;
