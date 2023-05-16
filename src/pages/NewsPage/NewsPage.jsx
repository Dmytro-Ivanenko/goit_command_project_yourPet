import { Outlet } from 'react-router-dom';

import PageTitle from 'shared/components/PageTitle';
import SearchForm from 'shared/components/SearchForm';

import styles from './news_page.module.scss';

const NewsPage = () => {
    return (
        <div className={styles.container}>
            <PageTitle text={'News'} />
            <div className={styles.formWrapper}>
                <SearchForm />
            </div>
            <Outlet />
        </div>
    );
};

export default NewsPage;
