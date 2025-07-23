import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/login/Login.jsx";
import Register from "../pages/register/Register.jsx";
import Google from "../services/Google/Google.jsx";
import Logo from "../components/logo/Logo.jsx";

const router = createBrowserRouter([
    { path: '/', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path:'/google', element: <Google /> },
    { path: '/test', element: <Logo /> }
])

const Routes = () => {

    return (
        <RouterProvider router={router} />
    )
}

export default Routes;