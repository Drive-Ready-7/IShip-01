import { RouterProvider, CreateBrowserRouter } from 'react-dom';

import './App.css';

const routes = CreateBrowserRouter([
  // {path='/login', element}
])

const App = () => {
  return (
    <RouterProvider routes={routes}>
      
    </RouterProvider>
  )
}

export default App;