import { useState, useEffect, Suspense } from 'react';
import { useMediaQuery } from "react-responsive";

import DesktopRoutes from "./routes/DesktopRoutes.jsx";
import MobileRoutes from './routes/MobileRoutes.jsx';
import Loader from './components/loaders/simpleLoader/Loader.jsx';
import Logo from './components/logo/Logo.jsx';

export default function DynamicWindow() {

    const isMobile = useMediaQuery({
        maxWidth: 768,
    })

    const isDesktop = useMediaQuery({
        minWidth: 768,
    })

    const [deviceReady, setDeviceReady] = useState(false);

    useEffect(() => {
        if (isMobile || isDesktop) {
            setDeviceReady(true);
        }
    }, [isMobile, isDesktop]);

    if (!deviceReady) return <Logo />;

    return (
        <Suspense fallback={ <Loader /> }>
            { isDesktop ? <DesktopRoutes /> : <MobileRoutes /> }
        </Suspense>
    )
}
