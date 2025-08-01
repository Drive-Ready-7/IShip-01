import {createBrowserRouter, RouterProvider} from "react-router-dom";

import { lazy } from 'react';

const Root = lazy(() => import('../pages/desktop/root/Root.jsx'));
const Login = lazy(() => import("../pages/desktop/login/Login.jsx"));
const Register = lazy(() => import("../pages/desktop/register/Register.jsx"));
const Main = lazy(() => import("../pages/desktop/main/Main.jsx"));
const Logo = lazy(() => import("../components/logo/Logo.jsx"));
const Nav = lazy(() => import("../components/nav/Nav.jsx"));
const PrivacyPolicy = lazy(() => import("../pages/desktop/privacypolicy/PrivacyPolicy.jsx"));
const ForgotPassword = lazy(() => import("../pages/desktop/forgot-password/ForgotPassword.jsx"));
const Google = lazy(() => import("../services/Google/Google.jsx"));
const Loader = lazy(() => import("../components/loaders/simpleLoader/Loader.jsx"));
const Profile = lazy(() => import("../pages/desktop/profile/Profile.jsx"));
const AboutUs = lazy(() => import("../pages/mobile/aboutus/AboutUs.jsx"));
const Footer = lazy(() => import("../components/footer/Footer.jsx"));
const PopUp = lazy(() => import("../components/popup/PopUp.jsx"));
const ContactUs = lazy(() => import("../components/contact/ContactUs.jsx"));
const ChangePassword = lazy(() => import("../components/changePassword/ChangePassword.jsx"));



const router = createBrowserRouter([
    { path: '/', element: <Root /> },
    { path: '/dashboard', element: <Main /> },
    { path: '/register', element: <Register /> },
    { path: '/login', element: <Login /> },
    { path : '/logo' , element: <Logo/> },
    { path: '/test', element: <Nav /> },
    { path: '/privacy-policy', element: <PrivacyPolicy/> },
    { path: '/forgot-password', element: <ForgotPassword/> },
    { path: '/google', element: <Google/> },
    { path: '/loader', element: <Loader/>},
    { path: '/profile', element: <Profile/>},
    { path: '/about', element: <AboutUs/>},
    { path: '/footer', element: <Footer/>},
    {path: '/popup' , element:  <PopUp/>},
    { path: '/contact', element: <ContactUs/>},
    { path: '/change-password', element: <ChangePassword/> },
])


const DesktopRoutes = () => {

    return (
        <RouterProvider router={router} />
    )
}

export default DesktopRoutes;