import { RouterProvider, CreateBrowserRouter } from 'react-dom';

import './App.css';

const routes = CreateBrowserRouter([
])

const App = () => {
  return (
    <RouterProvider routes={routes}>
      
    </RouterProvider>
  )
}

export default App;