import type { Course } from "../types/courses";
import type { GrowthSectionData } from "../types/growth-section";

export type { GrowthSectionData, StatItem } from "../types/growth-section";

export const growthSectionData: GrowthSectionData = {
    growth: {
        heading: 'Your Path to Professional Growth Starts Here!',
        description:
            'Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.',
        stats: [
            { value: '12K', label: 'Students' },
            { value: '70+', label: 'Courses' },
            { value: '16', label: 'Creators' },
        ],
        image: {
            src: '/images/hero-section-boy.webp',
            alt: 'Student learning',
        },
    },
    creators: {
        heading: 'Create & Manage Courses Easily.',
        brand: 'ByteSpace',
        description:
            'supports individuals or entities in the creation, publication, and administration of educational courses.',
        features: [
            'Share Your Expertise',
            'Monetize Your Passion',
            'Flexibility and Autonomy',
            'Build a Community',
        ],
        image: {
            src: '/images/growth-section-girl.webp',
            alt: 'Course creator',
        },
    },
    revenueCard: {
        title: 'Total Revenue',
        period: 'July 1-28',
        amount: '$120.29',
        progress: 65,
    },
    yearCard: {
        title: 'Year to Date',
        year: '2023',
        amount: '$1,200.38',
        badge: '+125',
    },
    learningProgress: 55,
};


export const singleCourse: Course = {
    id: 'course-1',
    imageSrc: '/images/course-card-thumbnail-1.webp',
    lessonCount: 17,
    duration: '2 hours 16 mins',
    title: 'Learn Figma from Basic',
    creator: 'purepearl studio',
    rating: 4.5,
    level: 'Beginner',
    price: 25,
    avatars: ['/images/user-image-1.webp', '/images/user-image-2.webp', '/images/user-image-3.webp'],
    extraStudents: 26,
}