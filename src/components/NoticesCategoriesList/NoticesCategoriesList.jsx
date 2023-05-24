import { useOutletContext } from 'react-router-dom';

import NoticesCategoryItem from './NoticesCategoryItem';
import styles from './notices-categories-list.module.scss';

const NoticesCategoriesList = () => {
    const { items, handleDelete } = useOutletContext();

    return (
        <>
            {items.length > 0 && (
                <ul className={styles.list}>
                    {items.map(item => (
                        <NoticesCategoryItem key={item._id} item={item} onDelete={handleDelete} />
                    ))}
                </ul>
            )}
        </>
    );
};

export default NoticesCategoriesList;
