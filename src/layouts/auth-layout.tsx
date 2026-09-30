import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PageLoader from '../components/shared/page-loader';


export default function AuthLayout() {
    return (
        <div className="min-h-screen w-full bg-white">
            <Suspense fallback={<PageLoader />}>
                <Outlet />
            </Suspense>
        </div>
    );
}
