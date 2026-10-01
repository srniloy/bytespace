import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export default function ScrollToTop() {
    const { pathname } = useLocation();

    // take over from the browser: its auto-restore races lazy chunks and
    // images, landing on a stale offset after reload instead of the top
    useEffect(() => {
        if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
