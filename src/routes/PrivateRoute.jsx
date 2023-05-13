import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'shared/hooks/useAuth';

const PrivateRoute = () => {
    const { isLoggedIn, token } = useAuth();

    if (!isLoggedIn && token) {
        return (
            <div
                sx={{
                    height: 'calc(100vh - 144px)',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <p>Loading...</p>
            </div>
        );
    }

    if (!isLoggedIn && !token) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
};

export default PrivateRoute;
