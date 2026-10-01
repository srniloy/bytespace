import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import RouteSkeleton from '../components/shared/route-skeleton';


export default function AuthLayout() {
    return (
        <div className="min-h-screen w-full bg-white">
            <Suspense fallback={<RouteSkeleton />}>
                <Outlet />
            </Suspense>
        </div>
    );
}
