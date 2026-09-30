import type { Course, CourseCardLabels, CourseCategory, CourseSectionContent } from '../types/courses';

export type { Course, CourseCardLabels, CourseCategory, CourseSectionContent } from '../types/courses';

export const courseSectionContent: CourseSectionContent = {
    heading: 'Discover Your Passion, Build Your Skills',
    description:
        'At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.',
    showMoreLabel: '+ More',
};

export const courseCardLabels: CourseCardLabels = {
    lessonsSuffix: ' Lessons',
    commentsSuffix: ' Comments',
    creatorPrefix: 'by',
    studentsSuffix: '+',
    priceSuffix: '/lifetime',
    levelIcon: {
        src: '/icons/signal-icon.png',
        alt: 'signal',
    },
};

export const courseCategories: CourseCategory[] = [
    { id: 'featured', label: 'Featured' },
    { id: 'music', label: 'Music' },
    { id: 'drawing', label: 'Drawing & Painting' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'animation', label: 'Animation' },
    { id: 'social', label: 'Social Media' },
    { id: 'uiux', label: 'UI/UX Design' },
    { id: 'creative-marketing', label: 'Creative Marketing' },
    { id: 'digital-illustration', label: 'Digital Illustration' },
    { id: 'film', label: 'Film & Video' },
    { id: 'crafts', label: 'Crafts' },
    { id: 'freelance', label: 'Freelance & Entrepreneurship' },
    { id: 'graphic-design', label: 'Graphic Design' },
    { id: 'photography', label: 'Photography' },
    { id: 'productivity', label: 'Productivity', hidden: true },
    { id: 'web-dev', label: 'Web Development', hidden: true },
    { id: 'data-science', label: 'Data Science', hidden: true },
    { id: 'cooking', label: 'Cooking', hidden: true },
];

const baseCourses: Omit<Course, 'id'>[] = [
    {
        imageSrc: '/images/course-card-thumbnail-1.jpg',
        lessonCount: 17,
        duration: '2 hours 16 mins',
        commentCount: 59,
        title: 'Build Digital Asset',
        creator: 'purepearl studio',
        rating: 4.5,
        level: 'Beginner',
        price: 25,
        avatars: ['/images/user-image-1.png', '/images/user-image-2.png', '/images/user-image-3.png'],
        extraStudents: 26,
    },
    {
        imageSrc: '/images/course-card-thumbnail-2.jpg',
        lessonCount: 17,
        duration: '2 hours 16 mins',
        commentCount: 59,
        title: 'Learn Figma from Basic',
        creator: 'purepearl studio',
        rating: 4.5,
        level: 'Beginner',
        price: 25,
        avatars: ['/images/user-image-1.png', '/images/user-image-2.png', '/images/user-image-3.png'],
        extraStudents: 26,
    },
    {
        imageSrc: '/images/course-card-thumbnail-3.jpg',
        lessonCount: 17,
        duration: '2 hours 16 mins',
        commentCount: 59,
        title: 'The Power of Big Data',
        creator: 'purepearl studio',
        rating: 4.5,
        level: 'Beginner',
        price: 25,
        avatars: ['/images/user-image-1.png', '/images/user-image-2.png', '/images/user-image-3.png'],
        extraStudents: 26,
    },
    {
        imageSrc: '/images/course-card-thumbnail-4.jpg',
        lessonCount: 17,
        duration: '2 hours 16 mins',
        commentCount: 59,
        title: 'Balancing Productivity an...',
        creator: 'purepearl studio',
        rating: 4.5,
        level: 'Beginner',
        price: 25,
        avatars: ['/images/user-image-1.png', '/images/user-image-2.png', '/images/user-image-3.png'],
        extraStudents: 26,
    },
    {
        imageSrc: '/images/course-card-thumbnail-5.jpg',
        lessonCount: 17,
        duration: '2 hours 16 mins',
        commentCount: 59,
        title: 'Mastering Money Manage...',
        creator: 'purepearl studio',
        rating: 4.5,
        level: 'Beginner',
        price: 25,
        avatars: ['/images/user-image-1.png', '/images/user-image-2.png', '/images/user-image-3.png'],
        extraStudents: 26,
    },
    {
        imageSrc: '/images/course-card-thumbnail-6.jpg',
        lessonCount: 17,
        duration: '2 hours 16 mins',
        commentCount: 59,
        title: 'From Idea to Startup Succe...',
        creator: 'purepearl studio',
        rating: 4.5,
        level: 'Beginner',
        price: 25,
        avatars: ['/images/user-image-1.png', '/images/user-image-2.png', '/images/user-image-3.png'],
        extraStudents: 26,
    },
];

const COURSE_COUNT = 45;
const RUN_LENGTH = 9;

// ascending / descending runs of RUN_LENGTH (one run per page) so every page reads differently:
// 1..9, 9..1, 1..9, 9..1, 1..9
const buildCourses = (): Course[] =>
    Array.from({ length: COURSE_COUNT }, (_, index) => {
        const run = Math.floor(index / RUN_LENGTH);
        const step = index % RUN_LENGTH;
        const slot = run % 2 === 0 ? step : RUN_LENGTH - 1 - step;

        return {
            ...baseCourses[slot % baseCourses.length],
            id: `course-${index + 1}`,
        };
    });

export const homeCourses: Course[] = buildCourses();
