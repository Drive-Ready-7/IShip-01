import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/mobile/login/Login.jsx";
import Register from "../pages/mobile/register/Register.jsx";
import Main from "../pages/mobile/main/Main.jsx";
import Logo from "../pages/mobile/logo/Logo.jsx";
import PrivacyPolicy from "../pages/mobile/privacypolicy/PrivacyPolicy.jsx";
import ForgotPassword from "../pages/desktop/forgot-password/ForgotPassword.jsx";
import Loader from "../components/loaders/simpleLoader/Loader.jsx";
import Profile from "../pages/mobile/profile/Profile.jsx";
import AboutUs from "../pages/mobile/aboutus/AboutUs.jsx";
import Footer from "../components/footer/Footer.jsx";


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

])

const MobileRoutes = () => {

    return (
        <RouterProvider router={router} />
    )
}

export default MobileRoutes;