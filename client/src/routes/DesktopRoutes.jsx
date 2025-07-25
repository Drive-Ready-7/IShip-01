import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/desktop/login/Login.jsx";
import Register from "../pages/desktop/register/Register.jsx";
import Google from "../services/Google/Google.jsx";

const router = createBrowserRouter([
    { path: '/', element: <Login/> },
    { path: '/register', element: <Register /> },
    { path:'/google', element: <Google /> },
])

const DesktopRoutes = () => {

    return (
        <RouterProvider router={router} />
    )
}

export default DesktopRoutes;