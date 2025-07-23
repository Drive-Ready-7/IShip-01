import { Suspense } from 'react';

import MobileRoutes from './routes/MobileRoutes.jsx';
import Loader from './components/loaders/simpleLoader/Loader.jsx';

import './App.css';

const App = () => {

    return (
        <Suspense fallback={ <Loader /> }>
            <MobileRoutes />
        </Suspense>
    )
}

export default App;