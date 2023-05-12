// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { useLocation, Link } from 'react-router-dom';
import categories from './categories';
import styles from './notices-categories-nav.module.scss';

const getFullName = (location, category) => {
    const res = category === location ? `${styles.button} ${styles.active}` : styles.button;

    return res;
};

// const { publicCategories, privateCategories } = categories;
const { publicCategories } = categories;

const NoticesCategoriesNav = () => {
    // const { isLoggedIn } = useSelector(selectIsLoggedIn);
    const { pathname } = useLocation();

    return (
        <div className={styles.wrapper}>
            <ul className={styles.list}>
                {publicCategories.map(({ to, text }) => (
                    <li key={to}>
                        <Link to={to} className={getFullName(pathname, to)}>
                            {text}
                        </Link>
                    </li>
                ))}
            </ul>
            {/* {isLoggedIn && (
        <ul className={styles.list}>
          {privateCategories.map(({ to, text }) => (
            <li key={to}>
              <Link to={to} className={getFullName(pathname, to)}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      )} */}
        </div>
    );
};

export default NoticesCategoriesNav;
