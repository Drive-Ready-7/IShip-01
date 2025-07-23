import { Suspense } from 'react';

import DesktopRoutes from "./routes/DesktopRoutes.jsx";
import MobileRoutes from './routes/MobileRoutes.jsx';
import Loader from './components/loaders/simpleLoader/Loader.jsx';

import './App.css';

const App = () => {

    return (
        <Suspense fallback={ <Loader /> }>
            <DesktopRoutes />
        </Suspense>
    )
}

export default App;