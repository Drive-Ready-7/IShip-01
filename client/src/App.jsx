import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
// import './App.css';
import { Suspense } from 'react';


const routes = [
  {path: '/login', element: <NavBar />},
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