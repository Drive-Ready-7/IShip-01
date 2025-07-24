import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/mobile/login/Login.jsx";
import Register from "../pages/desktop/register/Register.jsx";
import Google from "../services/Google/Google.jsx";
import Logo from "../components/logo/Logo.jsx";

const router = createBrowserRouter([
    { path: '/', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/google', element: <Google /> },
    { path: '/logo', element: <Logo/>}
])

const DesktopRoutes = () => {

    return (
        <RouterProvider router={router} />
    )
}

export default DesktopRoutes;