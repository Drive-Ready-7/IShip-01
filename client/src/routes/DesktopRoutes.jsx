import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Login from "../pages/desktop/login/Login.jsx";
import Register from "../pages/desktop/register/Register.jsx";
import Main from "../pages/desktop/main/Main.jsx";
import Logo from "../components/logo/Logo.jsx";
import Nav from "../components/nav/Nav.jsx";
import PrivacyPolicy from "../pages/desktop/privacypolicy/PrivacyPolicy.jsx";
import ForgotPassword from "../pages/desktop/forgot-password/ForgotPassword.jsx";
import Google from "../services/Google/Google.jsx";
import Loader from "../components/loaders/simpleLoader/Loader.jsx";
import Profile from "../pages/desktop/profile/Profile.jsx";
import AboutUs from "../pages/mobile/aboutus/AboutUs.jsx";
import Footer from "../components/footer/Footer.jsx";
import PopUp from  "../components/popup/PopUp.jsx";


const router = createBrowserRouter([
    { path: '/', element: <Main /> },
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
    {path: '/popup' , element:  <PopUp/>}
])


const DesktopRoutes = () => {

    return (
        <RouterProvider router={router} />
    )
}

export default DesktopRoutes;