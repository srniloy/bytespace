import { motion } from 'framer-motion';
import AvatarStack from './avatar-stack';
import type { Course } from '../data/courses';

export interface CourseCardProps {
    course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
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
    const pills = [`${lessonCount} Lessons`, duration, `${commentCount} Comments`];

    return (
        <motion.div
            whileHover={{ y: -4, boxShadow: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="w-full bg-white rounded-3xl p-3 border border-gray-100 shadow-sm flex flex-col font-sans cursor-pointer group h-full"
        >
            {/* --- 1. IMAGE & OVERLAY PILLS --- */}
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-4 shrink-0">
                <img
                    src={imageSrc}
                    alt={title}
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
                        by <span className="text-[#0033FF] hover:underline">{creator}</span>
                    </p>
                </div>

                <div className="flex items-center gap-1 mt-1 shrink-0">
                    <span className="body-l text-gray-700">{rating}</span>
                    <span className="text-gray-300 text-xl leading-0">★</span>
                </div>
            </div>

            <div className="px-1 flex items-center gap-4 mt-4 mb-5">

                <div className="flex items-center gap-1.5 bg-[#F4F5F6] text-gray-700 px-4 py-1.5 rounded-full shrink-0">
                    <img src="/icons/signal-icon.png" className='w-6 h-6' alt="signal" />
                    <span className=' label-xs'>{level}</span>
                </div>

                <AvatarStack avatars={avatars} badge={`${extraStudents}+`} />

            </div>

            {/* --- 4. PRICE --- */}
            <div className="px-1 pb-1 mt-auto">
                <span className="heading-xs text-[#0033FF]">
                    ${price}
                </span>
                <span className=" text-gray-600 body-xs ml-0.5">
                    /lifetime
                </span>
            </div>
        </motion.div>
    );
}
