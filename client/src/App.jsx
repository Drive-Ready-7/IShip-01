import { Suspense } from 'react';

import Routes from './routes/Routes.jsx';
import Loader from './components/loaders/simpleLoader/Loader.jsx';

import './App.css';

const App = () => {

    return (
        <Suspense fallback={ <Loader /> }>
            <Routes />
        </Suspense>
    )
}

export default App;