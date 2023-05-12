// import { Navigate, Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

// import { selectIsLoggedIn, selectToken } from 'redux/auth/auth-selectors';

const PrivateRoute = () => {
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

    // if (!isLoggedIn && !token) {
    //   return <Navigate to="/login" />;
    // }

    return <Outlet />;
};

export default PrivateRoute;
