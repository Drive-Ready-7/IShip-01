import { Suspense } from 'react';

import DesktopRoutes from "./routes/DesktopRoutes.jsx";
import MobileRoutes from './routes/MobileRoutes.jsx';
import Loader from './components/loaders/simpleLoader/Loader.jsx';
import useWindowSize from './routes/useWindoSize.jsx';

import './App.css';

const App = () => {
    const width = useWindowSize();
    return (
        <Suspense fallback={ <Loader /> }>
            {/* routes ternary condtion */}
            { width>768 ? <DesktopRoutes /> : <MobileRoutes/>}
        </Suspense>
    )
}

export default App;