import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { refreshUser } from 'redux/auth/operations';

import ResponsiveAppBar from '../AppBar/AppBar';
import styles from './sharedLayout.module.scss';
import UserRoutes from 'routes/UserRoutes';

import 'react-toastify/dist/ReactToastify.css';

const SharedLayout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return (
        <>
            <ResponsiveAppBar />
            <div className={styles.container}>
                <UserRoutes />
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnHover={false}
                theme="light"
                limit={3}
            />
        </>
    );
};

export default SharedLayout;
