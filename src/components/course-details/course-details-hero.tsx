import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../shared/button';
import CourseEnrollCard from './course-enroll-card';
import { courseDetailsData } from '../../data/course-details';
import { getCreatorLink } from '../../data/creator-page';
import type { Course } from '../../types/courses';

const { hero } = courseDetailsData;

interface CourseDetailsHeroProps {
    course: Course;
}

export default function CourseDetailsHero({ course }: CourseDetailsHeroProps) {
    const { stats, video } = hero;
    const [isPlaying, setIsPlaying] = useState(false);
    const [isVideoReady, setIsVideoReady] = useState(false);

    return (
        <section
            style={{ backgroundImage: 'url(/layout-designs/hero-section-grid.png)' }}
            className="relative bg-persian-blue bg-cover pt-44 pb-16 font-sans"
        >
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">

                {/* --- TITLE ROW --- */}
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                        <h1 className="text-2xl md:text-3xl heading-s text-white">
                            {course.title}{hero.titleSuffix}
                        </h1>
                        <p className="mt-4 font-poppins text-lg md:text-xl font-semibold text-white">
                            {hero.subtitle}
                        </p>
                        <p className="mt-3 body-m text-accent-lime">
                            {hero.byLabel}{' '}
                            <Link to={getCreatorLink(course.creator)} className="font-medium underline-offset-4 hover:underline">
                                {course.creator}
                            </Link>
                        </p>
                    </div>

                    <Button variant="lime" size="sm" className="gap-2 self-start">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="18" cy="5" r="3" />
                            <circle cx="6" cy="12" r="3" />
                            <circle cx="18" cy="19" r="3" />
                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                        </svg>
                        {hero.shareLabel}
                    </Button>
                </div>

                {/* --- STAT PILLS --- */}
                <div className="mt-10 flex flex-wrap gap-4 md:gap-6">
                    <span className="flex items-center gap-2.5 rounded-full bg-white px-6 py-3 label-m text-gray-900">
                        <img src="/icons/signal-blue-icon.png" alt="" className="h-5 w-5" />
                        {stats.level}
                    </span>

                    <span className="flex items-center gap-2.5 rounded-full bg-white px-6 py-3 label-m text-gray-900">
                        <img src="/icons/star-icon.png" alt="" className="h-5 w-5" />
                        {stats.rating} ({stats.reviews} reviews)
                    </span>

                    <span className="flex items-center gap-2.5 rounded-full bg-white px-6 py-3 label-m text-gray-900">
                        <img src="/icons/users-icon.png" alt="" className="h-5 w-5" />
                        {stats.students} Students
                    </span>
                </div>

                {/* --- VIDEO + ENROLL CARD --- */}
                <div className="relative mt-16">
                    <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl bg-black lg:w-[calc(100%-464px)]">
                        {isPlaying && (
                            <iframe
                                src={`${video.embedUrl}?autoplay=1&rel=0`}
                                title={course.title}
                                className="absolute left-1/2 top-1/2 aspect-video w-full -translate-x-1/2 -translate-y-1/2 border-0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                onLoad={() => setIsVideoReady(true)}
                            />
                        )}

                        {(!isPlaying || !isVideoReady) && (
                            <div className="absolute inset-0">
                                <img src={video.src} alt={course.title} className="h-full w-full object-cover" />

                                {isPlaying ? (
                                    <span className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-black/30 backdrop-blur-lg">
                                        <svg className="size-8 animate-spin text-accent-lime" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.3" strokeWidth="3" />
                                            <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                        </svg>
                                        <span className="sr-only">Loading video...</span>
                                    </span>
                                ) : (
                                    <button
                                        type="button"
                                        aria-label={video.playLabel}
                                        onClick={() => setIsPlaying(true)}
                                        className="absolute left-1/2 top-1/2 flex size-24 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-3xl bg-black/30 p-5.5 backdrop-blur-lg transition-transform duration-200 hover:scale-105"
                                    >
                                        <img src="/icons/play-icon.png" alt="" className="size-full" />
                                    </button>
                                )}
                            </div>
                        )}
                    </div>

                    <CourseEnrollCard
                        course={course}
                        className="mt-10 w-full lg:absolute lg:right-0 lg:top-0 lg:mt-0 lg:w-100"
                    />
                </div>
            </div>
        </section>
    );
}
