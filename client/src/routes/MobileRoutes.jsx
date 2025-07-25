import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/mobile/login/Login.jsx";
import Register from "../pages/mobile/register/Register.jsx";
import Main from "../pages/mobile/main/Main.jsx";

const router = createBrowserRouter([
    { path: '/', element: <Main /> },
    { path: '/register', element: <Register /> },
    { path: '/login', element: <Login /> },
])

const MobileRoutes = () => {

    return (
        <RouterProvider router={router} />
    )
}

export default MobileRoutes;