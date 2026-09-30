import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import PageLoader from '../components/page-loader';

export default function MainLayout() {
    const { pathname } = useLocation();

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            {/* hero pages manage their own top spacing; other pages clear the fixed navbar */}
            <main className={`flex-1 ${pathname === '/' || pathname.startsWith('/courses') || pathname.startsWith('/creators') ? '' : 'pt-30'}`}>
                <Suspense fallback={<PageLoader />}>
                    <Outlet />
                </Suspense>
            </main>

            <Footer />
        </div>
    );
}
