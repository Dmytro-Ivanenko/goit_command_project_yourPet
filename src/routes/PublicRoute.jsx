import { useAuth } from 'shared/hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ component: Component, redirectTo = '/', from }) => {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? <Navigate to={redirectTo} state={from} /> : Component;
};

export default PublicRoute;
