import type { ReactNode } from 'react';
import AuthShowcase from './auth-showcase';
import type { AuthShowcaseData } from '../../types/auth';

interface AuthScreenProps {
    children: ReactNode;
    showcase: AuthShowcaseData;
}

// shared blue background for login and register
export default function AuthScreen({ children, showcase }: AuthScreenProps) {
    return (
        <div
            style={{ backgroundImage: 'url(/layout-designs/hero-section-grid.webp)' }}
            className="min-h-screen w-full bg-persian-blue bg-cover"
        >
            <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col lg:flex-row">
                <AuthShowcase copy={showcase} />

                <div className="flex w-full items-center justify-center p-6 md:p-12 lg:w-1/2 lg:items-start lg:justify-start lg:pl-6 lg:pt-36">
                    {children}
                </div>
            </div>
        </div>
    );
}
