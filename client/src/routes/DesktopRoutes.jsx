import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/desktop/login/Login.jsx";
import Register from "../pages/desktop/register/Register.jsx";
import Main from "../pages/desktop/main/Main.jsx";

const router = createBrowserRouter([
    { path: '/', element: <Main /> },
    { path: '/register', element: <Register /> },
    { path: '/login', element: <Login /> },
])

const DesktopRoutes = () => {

    return (
        <RouterProvider router={router} />
    )
}

export default DesktopRoutes;