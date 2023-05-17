import { useOutletContext } from 'react-router-dom';

import NoticesCategoryItem from './NoticesCategoryItem';

import styles from './notices-categories-list.module.scss';

const NoticesCategoriesList = () => {
    const items = useOutletContext() || [];

    return (
        <>
            {items && (
                <ul className={styles.list}>
                    {items.map(item => (
                        <NoticesCategoryItem key={item._id} item={item} />
                    ))}
                </ul>
            )}
        </>
    );
};

export default NoticesCategoriesList;
