import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';

// import Header from '../Header/Header';
import ResponsiveAppBar from 'components/AppBar/AppBar';
import styles from './sharedLayout.module.scss';
import UserRoutes from 'routes/UserRoutes';

const SharedLayout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return (
        <>
            <ResponsiveAppBar/>
            <div className={styles.container}>
                {/* <Header /> */}
                <UserRoutes />
            </div>
        </>
       
    );
};

export default SharedLayout;
