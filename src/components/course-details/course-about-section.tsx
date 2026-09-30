import { useState } from 'react';
import { courseDetailsData } from '../../data/course-details';
import type { CourseTabId } from '../../types/course-details';
import CourseAboutPanel from './course-about-panel';
import CourseLessonsPanel from './course-lessons-panel';
import CourseReviewsPanel from './course-reviews-panel';

const { tabs } = courseDetailsData;

export default function CourseAboutSection() {
    const [activeTab, setActiveTab] = useState<CourseTabId>('about');

    return (
        <section className="bg-white pt-16 pb-16 font-sans">
            <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
                <div className="lg:w-[calc(100%-464px)]">

                    {/* --- TABS --- */}
                    <div className="flex gap-3">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                type="button"
                                onClick={() => setActiveTab(tab.id)}
                                className={`cursor-pointer rounded-full px-5 py-3 label-s transition-colors duration-200 ${
                                    activeTab === tab.id
                                        ? 'bg-accent-lime text-gray-900'
                                        : 'bg-chip text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {activeTab === 'about' && <CourseAboutPanel />}
                    {activeTab === 'lessons' && <CourseLessonsPanel />}
                    {activeTab === 'reviews' && <CourseReviewsPanel />}

                </div>
            </div>
        </section>
    );
}
