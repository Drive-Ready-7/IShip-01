import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from 'react';

const Login = lazy(() => import("../pages/mobile/login/Login.jsx"));
const Register = lazy(() => import("../pages/mobile/register/Register.jsx"));
const Main = lazy(() => import("../pages/mobile/main/Main.jsx"));
const Logo = lazy(() => import("../pages/mobile/logo/Logo.jsx"));
const PrivacyPolicy = lazy(() => import("../pages/mobile/privacypolicy/PrivacyPolicy.jsx"));
const ForgotPassword = lazy(() => import("../pages/desktop/forgot-password/ForgotPassword.jsx"));
const Loader = lazy(() => import("../components/loaders/simpleLoader/Loader.jsx"));
const Profile = lazy(() => import("../pages/mobile/profile/Profile.jsx"));
const AboutUs = lazy(() => import("../pages/mobile/aboutus/AboutUs.jsx"));
const Footer = lazy(() => import("../components/footer/Footer.jsx"));
const Dashboard = lazy(() => import("../pages/mobile/dashboard/Dashboard.jsx"));


const router = createBrowserRouter([
    { path: '/', element: <Main /> },
    { path: '/register', element: <Register /> },
    { path: '/login', element: <Login /> },
    { path: '/logo' , element: <Logo/>},
    { path: '/privacy-policy', element: <PrivacyPolicy/> },
    { path: '/forgot-password', element: <ForgotPassword/>},
    { path: '/loader', element: <Loader/>},
    { path:'/profile', element:<Profile/> },
    { path: '/about', element:<AboutUs/>},
    { path: '/footer', element: <Footer/>},
    { path: '/dashboard', element: <Dashboard/> },
])

const MobileRoutes = () => {

    return (
        <RouterProvider router={router} />
    )
}

export default MobileRoutes;