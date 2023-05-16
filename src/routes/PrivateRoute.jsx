import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'shared/hooks/useAuth';

const PrivateRoute = () => {
    const { isLoggedIn, token } = useAuth();

    if (!isLoggedIn && token) {
        return (
            <div>
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
