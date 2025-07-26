import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/desktop/login/Login.jsx";
import Register from "../pages/desktop/register/Register.jsx";
import Main from "../pages/desktop/main/Main.jsx";
import Logo from "../components/logo/Logo.jsx";
const router = createBrowserRouter([
    { path: '/', element: <Main /> },
    { path: '/register', element: <Register /> },
    { path: '/login', element: <Login /> },
    { path : '/logo' , element: <Logo/> }
])

const DesktopRoutes = () => {

    return (
        <RouterProvider router={router} />
    )
}

export default DesktopRoutes;