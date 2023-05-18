import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

import styles from './header.module.scss';

const Header = () => {
    const dispatch = useDispatch();

    const signOut = () => {
        dispatch(logOut());
    };

    const checkIfActiveLink = ({ isActive }) => {
        return isActive ? `${styles.link} ${styles.active}` : ` ${styles.link}`;
    };

    return (
        <div className={styles.header}>
            <NavLink to="/">{'LOGO  (nav to main page)'}</NavLink>

            <NavLink className={checkIfActiveLink} to="/news">
                News
            </NavLink>
            <NavLink to="/notices">Find pet</NavLink>
            <NavLink to="/friends">Our friends</NavLink>

            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Registration</NavLink>
            <NavLink to="/user">UserName</NavLink>

            <button
                type="button"
                onClick={signOut}
                // Logout поки не працює на стороні бекенду,
                // треба очищати local storage руками
            >
                logout
            </button>
        </div>
    );
};

export default Header;
