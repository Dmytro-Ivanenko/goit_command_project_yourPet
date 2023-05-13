import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'shared/hooks/useAuth';

const PublicRoute = () => {
    const { isLoggedIn, token } = useAuth();

    if (!isLoggedIn && token) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }

    if (isLoggedIn) {
        return <Navigate to="/main" />;
    }

    return <Outlet />;
};

export default PublicRoute;
