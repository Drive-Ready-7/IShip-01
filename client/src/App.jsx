import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Google from "./services/Google/Google.jsx";

import Logo from "./components/Logo/Logo.jsx";

import './App.css';

const routes = [
    { path: '/', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path:'/google', element: <Google />},
    { path: '/test', element: <Logo />}
];

const App = () => {

    const router = createBrowserRouter(routes);

    return (
        <Suspense fallback={null}>
            <RouterProvider router={router} />
        </Suspense>
    )
}

export default App;