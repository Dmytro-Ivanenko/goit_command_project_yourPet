import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import PublicRoute from 'routes/PublicRoute';
import PrivateRoute from 'routes/PrivateRoute';

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));

// const AddPetPage = lazy(() => import('pages/AddPetPage/AddPetPage'));
const UserPage = lazy(() => import('pages/UserPage/UserPage'));

const NoticesPage = lazy(() => import('pages/NoticesPage'));

const OurFriendsPage = lazy(() => import('pages/OurFriendsPage/OurFriendsPage'));




const NewsPage = lazy(() => import('pages/NewsPage/NewsPage'));

const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

const NoticesCategoriesList = lazy(() => import('components/NoticesCategoriesList'));

const UserRoutes = () => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/main" element={<MainPage />} />

                <Route path="/friends" element={<OurFriendsPage />} />
               

                <Route path="/news" element={<NewsPage />}></Route>

                <Route path="/login" element={<PublicRoute redirectTo="/user" component={<LoginPage />} />} />
                <Route path="/register" element={<PublicRoute redirectTo="/user" component={<RegisterPage />} />} />
                <Route path="/user" element={<PrivateRoute redirectTo="/login" component={<UserPage />} />} />

                {/* <Route path="/add-pet" element={<AddPetPage />} /> */}

                <Route path="/notices" element={<NoticesPage />}>
                    <Route index element={<Navigate to="/notices/sell" replace />} />
                    <Route path="sell" element={<NoticesCategoriesList />} />
                    <Route path="lost-found" element={<NoticesCategoriesList />} />
                    <Route path="for-free" element={<NoticesCategoriesList />} />
                    <Route
                        path="favorite"
                        element={<PrivateRoute redirectTo="/login" component={<NoticesCategoriesList />} />}
                    />
                    <Route
                        path="own"
                        element={<PrivateRoute redirectTo="/login" component={<NoticesCategoriesList />} />}
                    />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    );
};

export default UserRoutes;
