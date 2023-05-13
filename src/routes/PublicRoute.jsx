import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'shared/hooks/useAuth';

const PublicRoute = () => {
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

    if (isLoggedIn) {
        return <Navigate to="/main" />;
    }

    return <Outlet />;
};

export default PublicRoute;
