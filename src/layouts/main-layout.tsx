import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import PageLoader from '../components/page-loader';

interface MainLayoutProps {
    /* hero-style pages (blue top section) manage their own top spacing */
    hero?: boolean;
}

export default function MainLayout({ hero = false }: MainLayoutProps) {
    const { pathname } = useLocation();

    const heroPage =
        hero || pathname === '/' || pathname.startsWith('/courses') || pathname.startsWith('/creators');

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            {/* hero pages manage their own top spacing; other pages clear the fixed navbar */}
            <main className={`flex-1 ${heroPage ? '' : 'pt-30'}`}>
                <Suspense fallback={<PageLoader />}>
                    <Outlet />
                </Suspense>
            </main>

            <Footer />
        </div>
    );
}
