export interface CourseCategory {
    id: string;
    label: string;
    hidden?: boolean;
}

export interface Course {
    imageSrc: string;
    lessonCount: number;
    duration: string;
    commentCount: number;
    title: string;
    creator: string;
    rating: number;
    level: string;
    price: number;
    avatars: string[];
    extraStudents: number;
}

export interface CourseSectionContent {
    heading: string;
    description: string;
    showMoreLabel: string;
}

export const courseSectionContent: CourseSectionContent = {
    heading: 'Discover Your Passion, Build Your Skills',
    description:
        'At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.',
    showMoreLabel: '+ More',
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

export const homeCourses: Course[] = [
    {
        imageSrc: '/images/course-card-thumbnail-1.jpg',
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
        imageSrc: "/images/course-card-thumbnail-2.jpg",
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
        imageSrc: "/images/course-card-thumbnail-3.jpg",
        lessonCount: 17,
        duration: '2 hours 16 mins',
        commentCount: 59,
        title: 'the Power of Big Data',
        creator: 'purepearl studio',
        rating: 4.5,
        level: 'Beginner',
        price: 25,
        avatars: ['/images/user-image-1.png', '/images/user-image-2.png', '/images/user-image-3.png'],
        extraStudents: 26,
    },
    {
        imageSrc: "/images/course-card-thumbnail-4.jpg",
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
        imageSrc: "/images/course-card-thumbnail-5.jpg",
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
        imageSrc: "/images/course-card-thumbnail-6.jpg",
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
