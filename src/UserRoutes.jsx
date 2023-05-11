import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// import PrivateRoute from '';
// import PublicRoute from '';

const SharedLayout = lazy(() => import('./components/SharedLayout/SharedLayout'));
//імпортуйте тут свої компоненти

const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                {/* <Route path="main" element={<MainPage />} /> */}
                {/* <Route path="news" element={<NewsPage />} /> */}
                {/* <Route path="notices" element={<NoticesPage />}>
                    <Route path="sell" element={<NoticesCategoryList />} />
                    <Route path="lost-found" element={<NoticesCategoryList />} />
                    <Route path="for-free" element={<NoticesCategoryList />} />
                    <Route path="favorite" element={<NoticesCategoryList />} />
                    <Route path="own" element={<NoticesCategoryList />} />
                </Route> */}
                {/* <Route path="friends" element={<OurFriendsPage />} /> */}
                {/* <Route path="register" element={<RegisterPage />} /> */}
                {/* <Route path="login" element={<LoginPage />} /> */}
                {/* <Route path="user" element={<UserPage />} />  */}
                {/* <Route path="add-pet" element={<AddPetPage />} />  */}
                {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Route>
        </Routes>
    );
};

export default UserRoutes;
