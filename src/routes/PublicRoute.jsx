// import { Navigate, Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

// import { selectIsLoggedIn, selectToken } from 'redux/auth/auth-selectors';

const PublicRoute = () => {
    // const { isLoggedIn } = useSelector(selectIsLoggedIn);
    // const { token } = useSelector(selectToken);

    // if (!isLoggedIn && token) {
    //   return (
    //     <div
    //       sx={{
    //         height: 'calc(100vh - 144px)',
    //         width: '100%',
    //         display: 'flex',
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //       }}
    //     >
    //       <p>Loading...</p>
    //     </div>
    //   );
    // }

    // if (isLoggedIn) {
    //   return <Navigate to="/main" />;
    // }

    return <Outlet />;
};

export default PublicRoute;
