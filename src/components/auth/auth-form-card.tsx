import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface AuthFormCardProps {
    eyebrow: string;
    title: ReactNode;
    children: ReactNode;
    footer: ReactNode;
}

// floating white card that holds the auth form on the blue grid background
export default function AuthFormCard({ eyebrow, title, children, footer }: AuthFormCardProps) {
    return (
        <div className="flex w-full max-w-[584px] flex-col rounded-3xl bg-white p-8 shadow-custom md:p-12 lg:min-h-[754px] lg:p-16">
            <Link
                to="/"
                className="mb-8 flex w-fit items-center gap-2.5 text-gray-500 transition-colors duration-200 hover:text-black"
            >
                <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <path d="M19 12H5" />
                    <path d="m12 19-7-7 7-7" />
                </svg>
                <span className="text-base font-medium">Back to home</span>
            </Link>

            <span className="mb-2 block body-l text-persian-blue">{eyebrow}</span>
            <h2 className="text-4xl text-black md:text-[44px] heading-m">
                {title}
            </h2>

            <div className="mt-10">{children}</div>

            <div className="mt-auto pt-10 text-center">{footer}</div>
        </div>
    );
}
