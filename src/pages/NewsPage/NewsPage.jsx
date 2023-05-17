import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import PageTitle from 'shared/components/PageTitle';
import SearchForm from 'shared/components/SearchForm';
import newsSource from '../../components/NewsList/newsSource.json';
import NewsList from '../../components/NewsList/NewsList';

import styles from './news_page.module.scss';

const NewsPage = () => {
    const [list, setList] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);

    const searchNewsByInputWord = ({ query }) => {
        const upperedWord = query[0].toUpperCase() + query.slice(1);
        const loweredWord = query[0].toLowerCase() + query.slice(1);
        console.log('wo', upperedWord);
        console.log('wo2', loweredWord);

        console.log(newsSource[0].title, typeof newsSource[2].title);
        console.log(newsSource[1].title, typeof newsSource[2].title);
        console.log(newsSource[2].title, typeof newsSource[2].title);
        console.log(upperedWord, typeof upperedWord);
        for (const newsObj of newsSource) {
            // console.log(newsObj);

            if (
                newsObj.title.includes(upperedWord) ||
                newsObj.title.includes(loweredWord) ||
                newsObj.text.includes(upperedWord) ||
                newsObj.text.includes(loweredWord)
            ) {
                console.log(newsObj);
                setList(prevState => [...prevState, newsObj]);
                return;
                // setList(list.push(newsObj));

                console.log('List', list);
            }
        }
    };

    // const showAllNews = ()=>{
    //     setList
    // }

    return (
        <div className={styles.container}>
            <PageTitle text={'News'} />
            <div className={styles.formWrapper}>
                <SearchForm
                    onSubmit={searchNewsByInputWord}
                    //  onfocus={showAllNews}
                />
            </div>
            {
                <NewsList
                    list={list}

                    // giveCurrentItems={c => setList(c)}
                />
            }
            {/* <Outlet list={{ key: 'kk' }} /> */}
        </div>
    );
};

export default NewsPage;
