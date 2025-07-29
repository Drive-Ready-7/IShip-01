import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/mobile/login/Login.jsx";
import Register from "../pages/mobile/register/Register.jsx";
import Main from "../pages/mobile/main/Main.jsx";
import Logo from "../pages/mobile/logo/Logo.jsx";
import PrivacyPolicy from "../pages/mobile/privacypolicy/PrivacyPolicy.jsx";
import ForgotPassword from "../pages/desktop/forgot-password/ForgotPassword.jsx"


const router = createBrowserRouter([
    { path: '/', element: <Main /> },
    { path: '/register', element: <Register /> },
    { path: '/login', element: <Login /> },
    { path: '/logo' , element: <Logo/>},
    { path: '/privacy-policy', element: <PrivacyPolicy/> },
    { path: '/forgot-password', element: <ForgotPassword/>}
])

const MobileRoutes = () => {

    return (
        <RouterProvider router={router} />
    )
}

export default MobileRoutes;