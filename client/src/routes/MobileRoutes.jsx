import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/mobile/login/Login.jsx";
import Register from "../pages/mobile/register/Register.jsx";
import Google from "../services/Google/Google.jsx";

const router = createBrowserRouter([
    { path: '/', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path:'/google', element: <Google /> },
])

const MobileRoutes = () => {

    return (
        <RouterProvider router={router} />
    )
}

export default MobileRoutes;