import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CourseCard from '../courses/course-card';
import Container from '../shared/container';
import SectionHeading from '../shared/section-heading';
import { courseCategories, courseSectionContent, homeCourses } from '../../data/courses';
import LearningPathsSection from './learnings-path';

const ACTIVE_CHIP_CLASSES = 'bg-accent-lime text-black';
const IDLE_CHIP_CLASSES = 'bg-chip text-[#5C636E] hover:bg-[#EAEBED] hover:text-black';

export default function CourseSection() {
    const [activeCategory, setActiveCategory] = useState('featured');
    const [isExpanded, setIsExpanded] = useState(false);

    const displayedCategories = isExpanded
        ? courseCategories
        : courseCategories.filter((category) => !category.hidden);

    const visibleCourses = homeCourses.slice(0, 6);

    return (
        <section className="w-full bg-white py-20 flex flex-col items-center justify-center font-sans">

            <Container className="flex flex-col items-center">

                <SectionHeading
                    title={courseSectionContent.heading}
                    description={courseSectionContent.description}
                    className="mb-12"
                />

                <div className="w-full flex flex-col items-center mb-16">
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full">
                        <AnimatePresence>
                            {displayedCategories.map((category) => (
                                <motion.button
                                    key={category.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.2 }}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`px-5 py-2.5 rounded-full label-m transition-colors duration-200 ${activeCategory === category.id ? ACTIVE_CHIP_CLASSES : IDLE_CHIP_CLASSES
                                        }`}
                                >
                                    {category.label}
                                </motion.button>
                            ))}
                        </AnimatePresence>
                        {!isExpanded && (
                            <button
                                onClick={() => setIsExpanded(true)}
                                className="px-3 py-2.5 text-[15px] font-medium text-[#2B5CE6] hover:text-[#1E40AF] transition-colors duration-200 flex items-center gap-1"
                            >
                                {courseSectionContent.showMoreLabel}
                            </button>
                        )}
                    </div>
                </div>

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {visibleCourses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>

            </Container>

            <LearningPathsSection />
        </section>
    );
}
