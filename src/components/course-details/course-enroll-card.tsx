import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import Button from '../button';
import { courseDetailsData } from '../../data/course-details';
import { getCreatorLink } from '../../data/creator-page';
import type { IncludeIconKey } from '../../data/course-details';
import type { Course } from '../../data/courses';

const { enroll } = courseDetailsData;

const INCLUDE_ICON_CLASSES = 'h-6 w-6';
const INCLUDE_ICONS: Record<IncludeIconKey, ReactElement> = {
    book: (
        <svg className={INCLUDE_ICON_CLASSES} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 7v14" />
            <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
        </svg>
    ),
    video: (
        <svg className={INCLUDE_ICON_CLASSES} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m22 8-6 4 6 4V8Z" />
            <rect x="2" y="6" width="14" height="12" rx="2" />
        </svg>
    ),
    award: (
        <svg className={INCLUDE_ICON_CLASSES} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="8" r="6" />
            <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
    ),
    presentation: (
        <svg className={INCLUDE_ICON_CLASSES} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M2 3h20" />
            <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
            <path d="m7 21 5-5 5 5" />
        </svg>
    ),
};

interface CourseEnrollCardProps {
    course: Course;
    className?: string;
}

export default function CourseEnrollCard({ course, className = '' }: CourseEnrollCardProps) {
    return (
        <div className={`relative z-10 rounded-3xl bg-white border border-gray-200 p-8 font-sans shadow-custom ${className}`}>

            {/* --- LESSONS --- */}
            <h2 className="heading-xs text-gray-900">{enroll.lessons.heading}</h2>

            <ul className="mt-6 space-y-4">
                {enroll.lessons.items.map((lesson) => (
                    <li key={lesson.number} className="flex items-start justify-between gap-4">
                        <div className="flex gap-3">
                            <span className="label-s text-gray-400">{lesson.number}</span>
                            <span className="label-s leading-snug text-gray-800 max-w-[170px]">{lesson.title}</span>
                        </div>
                        <span className="label-xs shrink-0 text-persian-blue">{lesson.duration}</span>
                    </li>
                ))}
            </ul>
            <p className="mt-4 body-s text-gray-400">{enroll.lessons.moreLabel}</p>

            {/* --- ENROLL --- */}
            <p className="mt-4 body-s text-gray-600">{enroll.prompt}</p>

            <p className="mt-5">
                <span className="heading-s text-persian-blue">${course.price}</span>
                <span className="body-s text-gray-500">{enroll.priceSuffix}</span>
            </p>

            <Button variant="lime" className="mt-4 w-full">{enroll.enrollLabel}</Button>

            {/* --- INCLUDES --- */}
            <h3 className="mt-7 font-poppins text-lg font-semibold text-gray-900">{enroll.includesHeading}</h3>

            <ul className="mt-5 space-y-5">
                {enroll.includes.map((item) => (
                    <li key={item.label} className="flex items-center gap-3">
                        <span className="shrink-0 text-persian-blue">{INCLUDE_ICONS[item.icon]}</span>
                        <span className="body-s text-gray-700">{item.label}</span>
                    </li>
                ))}
            </ul>

            {/* --- CREATOR --- */}
            <hr className="my-6 border-gray-200" />

            <Link to={getCreatorLink(enroll.creator.name)} className="mt-4 flex items-center gap-4 cursor-pointer">
                <img
                    src={enroll.creator.avatar}
                    alt={enroll.creator.name}
                    className="h-12 w-12 shrink-0 rounded-full object-cover"
                />
                <div>
                    <p className="font-satoshi text-sm font-semibold text-gray-900 hover:underline">{enroll.creator.name}</p>
                    <p className="body-xs text-gray-500">{enroll.creator.role}</p>
                </div>
            </Link>

            <p className="mt-4 body-s text-gray-600">{enroll.creator.prompt}</p>

            <Link
                to={getCreatorLink(enroll.creator.name)}
                className="mt-4 inline-block cursor-pointer rounded-full border border-gray-300 px-5 py-2.5 label-s text-gray-900 transition-colors duration-200 hover:bg-gray-50"
            >
                {enroll.creator.profileLabel}
            </Link>
        </div>
    );
}
