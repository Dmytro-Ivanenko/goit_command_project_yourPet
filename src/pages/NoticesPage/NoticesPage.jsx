import { Outlet } from 'react-router-dom';

import PageTitle from 'shared/components/PageTitle/PageTitle';
import SearchForm from 'shared/components/SearchForm';

import styles from './notices-page.module.scss';

const NoticesPage = () => {
    return (
        <div>
            <PageTitle text={'Find your favorite pet'} />
            <div className={styles.formWrapper}>
                <SearchForm />
            </div>

            <Outlet />
        </div>
    );
};

export default NoticesPage;
