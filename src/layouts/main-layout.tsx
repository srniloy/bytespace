import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/shared/navbar';
import Footer from '../components/shared/footer';
import PageLoader from '../components/shared/page-loader';

interface MainLayoutProps {
    /* hero-style pages (blue top section) manage their own top spacing */
    inside?: boolean;
}

export default function MainLayout({ inside = false }: MainLayoutProps) {
    const { pathname } = useLocation();

    const heroPage =
        inside || pathname === '/' || pathname.startsWith('/courses') || pathname.startsWith('/creators');

    return (
        <div className="flex min-h-screen flex-col">
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-60 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-persian-blue">
                Skip to content
            </a>
            <Navbar />

            {/* hero pages manage their own top spacing; other pages clear the fixed navbar */}
            <main id="main-content" className={`flex-1 ${heroPage ? '' : 'pt-30'}`}>
                <Suspense fallback={<PageLoader />}>
                    <Outlet />
                </Suspense>
            </main>

            <Footer />
        </div>
    );
}
