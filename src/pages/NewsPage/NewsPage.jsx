import { useState, useEffect } from 'react';
import PageTitle from 'shared/components/PageTitle';
import SearchForm from 'shared/components/SearchForm';
import NewsList from '../../components/NewsList';
import styles from './news_page.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import sendRequest from 'components/NewsList/sendRequest';

const NewsPage = () => {
    const [list, setList] = useState([]);
    const [currentList, setCurrentList] = useState([]);

    useEffect(() => {
        (async () => {
            const newsArray = await sendRequest();
            setList(newsArray);
        })();
    }, []);

    const searchNewsByInputWord = ({ query }) => {
        const upperedWord = query[0].toUpperCase() + query.slice(1);
        const loweredWord = query[0].toLowerCase() + query.slice(1);
        let findOne = false;

        for (const newsObj of list) {
            const { title, text } = newsObj;
            console.log(title);
            if (
                title.includes(upperedWord) ||
                title.includes(loweredWord) ||
                text.includes(upperedWord) ||
                text.includes(loweredWord)
            ) {
                findOne = true;
                return setCurrentList(prev => [...prev, newsObj]);
            }
        }

        if (!findOne) {
            toast.warn('No such news!', {
                position: 'top-right',
                autoClose: 3000,
                theme: 'colored',
            });
        }
    };

    const onClear = () => {
        setCurrentList([]);
        return;
    };

    return (
        <div className={styles.container}>
            <PageTitle text={'News'} />
            <div className={styles.formWrapper}>
                <SearchForm onSubmit={searchNewsByInputWord} onClear={onClear} />
            </div>
            <ToastContainer />
            {<NewsList list={Boolean(!currentList.length) ? list : currentList} />}
        </div>
    );
};

export default NewsPage;
