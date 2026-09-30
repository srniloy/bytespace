import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// jump to the top whenever the route path changes; search-param changes
// (e.g. course pagination) are ignored so their own smooth scroll survives
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
