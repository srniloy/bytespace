import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PageLoader from '../components/page-loader';

export default function AuthLayout() {
    return (
        <div
            style={{ backgroundImage: 'url(/layout-designs/hero-section-grid.png)' }}
            className="flex min-h-screen flex-col items-center justify-center bg-persian-blue bg-cover bg-center px-4 py-10 font-sans"
        >
            <img src="/images/nav-logo.png" alt="ByteSpace" className="mb-8 w-40" />

            <Suspense fallback={<PageLoader />}>
                <Outlet />
            </Suspense>
        </div>
    );
}
