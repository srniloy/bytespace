import { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { courseCardLabels } from '../../data/courses';
import type { Course } from '../../types/courses';
import { getCreatorLink } from '../../data/creator-page';
import AvatarStack from '../shared/avatar-stack';

export interface CourseCardProps {
    course: Course;
}

export default memo(function CourseCard({ course }: CourseCardProps) {
    const {
        imageSrc,
        lessonCount,
        duration,
        commentCount,
        title,
        creator,
        rating,
        level,
        price,
        avatars,
        extraStudents,
    } = course;
    const pills = useMemo(
        () => [
            `${lessonCount}${courseCardLabels.lessonsSuffix}`,
            duration,
            commentCount && `${commentCount}${courseCardLabels.commentsSuffix}`,
        ],
        [lessonCount, duration, commentCount],
    );

    return (
        <div
            className="group relative w-full bg-white rounded-3xl p-3 border border-gray-100 shadow-sm flex flex-col font-sans h-full transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_10px_10px_-5px_rgba(0,0,0,0.04)]"
        >
            <Link
                to={`/courses/${course.id}`}
                aria-label={title}
                className="absolute inset-0 z-0 rounded-3xl cursor-pointer"
            />

            {/* --- 1. IMAGE & OVERLAY PILLS --- */}
            <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden mb-4 shrink-0">
                <img
                    src={imageSrc}
                    alt={title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute bottom-3 left-3 flex flex-wrap gap-2 pr-3">
                    {pills.map((pill) => (
                        <span key={pill} className='bg-white/70 backdrop-blur-xs label-xs text-gray-800 px-3 py-1.5 rounded-full'>
                            {pill}
                        </span>
                    ))}
                </div>
            </div>

            <div className="px-1 flex justify-between items-start mb-1">
                <div className="flex-1 pr-4">
                    <h3 className="heading-xs text-gray-900 mb-1 line-clamp-1">
                        {title}
                    </h3>
                    <p className="body-xs text-gray-500">
                        {courseCardLabels.creatorPrefix}{' '}
                        <Link
                            to={getCreatorLink(creator)}
                            className="relative z-10 text-persian-blue hover:underline"
                        >
                            {creator}
                        </Link>
                    </p>
                </div>

                <div className="flex items-center gap-1 mt-1 shrink-0">
                    <span className="body-l text-gray-700 leading-4 mt-0.5">{rating}</span>
                    <span className="text-gray-300 text-xl leading-4">★</span>
                </div>
            </div>

            <div className="px-1 flex items-center gap-4 mt-4 mb-5">

                <div className="flex items-center gap-1.5 bg-chip text-gray-700 px-4 py-1.5 rounded-full shrink-0">
                    <img src={courseCardLabels.levelIcon.src} className='w-6 h-6' alt={courseCardLabels.levelIcon.alt} />
                    <span className=' label-xs'>{level}</span>
                </div>

                <AvatarStack avatars={avatars} badge={`${extraStudents}${courseCardLabels.studentsSuffix}`} />

            </div>

            {/* --- 4. PRICE --- */}
            <div className="px-1 pb-1 mt-auto">
                <span className="heading-xs text-persian-blue">
                    ${price}
                </span>
                <span className=" text-gray-600 body-xs ml-0.5">
                    {courseCardLabels.priceSuffix}
                </span>
            </div>
        </div>
    );
});
