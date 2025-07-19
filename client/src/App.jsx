import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
// import './App.css';
import { Suspense } from 'react';


const routes = [
  {path: '/navbar', element: <NavBar />},
];

const App = () => {

  const router = createBrowserRouter(routes);

  return (
    <NavBar />
  )

  return (
    <Suspense fallback={null}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App;