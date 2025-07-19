import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

import Login from "./pages/login/Login.jsx";

import './App.css';

const routes = [
    { path: '/', element: <Login /> },

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