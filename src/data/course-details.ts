export type IncludeIconKey = 'book' | 'video' | 'award' | 'presentation';
export type CourseTabId = 'about' | 'lessons' | 'reviews';

export interface CourseDetailsLesson {
    number: string;
    title: string;
    duration: string;
}

export interface CourseIncludeItem {
    icon: IncludeIconKey;
    label: string;
}

export interface SneakPeakImage {
    src: string;
    alt: string;
}

export interface CourseReview {
    avatar: string;
    name: string;
    rating: number;
    text: string;
}

export interface CourseDetailsTab {
    id: CourseTabId;
    label: string;
}

export interface CourseDetailsData {
    hero: {
        titleSuffix: string;
        subtitle: string;
        byLabel: string;
        shareLabel: string;
        stats: {
            level: string;
            rating: string;
            reviews: number;
            students: number;
        };
        video: {
            src: string;
            playLabel: string;
        };
    };
    enroll: {
        lessons: {
            heading: string;
            items: CourseDetailsLesson[];
            moreLabel: string;
        };
        prompt: string;
        priceSuffix: string;
        enrollLabel: string;
        includesHeading: string;
        includes: CourseIncludeItem[];
        creator: {
            avatar: string;
            name: string;
            role: string;
            prompt: string;
            profileLabel: string;
        };
    };
    tabs: CourseDetailsTab[];
    about: {
        descriptionHeading: string;
        description: string[];
        sneakPeakHeading: string;
        sneakPeakImages: SneakPeakImage[];
        keyPointsHeading: string;
        keyPoints: string[];
    };
    lessonsPanel: {
        heading: string;
    };
    reviewsPanel: {
        heading: string;
        countLabelPrefix: string;
        items: CourseReview[];
    };
}

export const courseDetailsData: CourseDetailsData = {
    hero: {
        titleSuffix: ': A Comprehensive Guide',
        subtitle: 'Unlock the Power of Digital Creation with Expert Guidance',
        byLabel: 'by',
        shareLabel: 'Share',
        stats: {
            level: 'Intermediate',
            rating: '4.8',
            reviews: 172,
            students: 199,
        },
        video: {
            src: '/images/course-details-video-thumbnail.png',
            playLabel: 'Play course video',
        },
    },
    enroll: {
        lessons: {
            heading: '112 Lessons (24 hours)',
            items: [
                { number: '01', title: 'Introduction to Digital Assets', duration: '12 mins' },
                { number: '02', title: 'Design Principles for Impacts', duration: '21 mins' },
                { number: '03', title: 'Advanced Techniques in Digital Creation', duration: '15 mins' },
            ],
            moreLabel: '99+ more videos',
        },
        prompt: 'Ready to Dive In? Enroll Now and Start Building Your Digital Future!',
        priceSuffix: '/lifetime',
        enrollLabel: 'Enroll Now',
        includesHeading: 'This course include',
        includes: [
            { icon: 'book', label: 'Learning Resources' },
            { icon: 'video', label: 'Quality Lesson Videos' },
            { icon: 'award', label: 'Certificate of Completion' },
            { icon: 'presentation', label: 'Private Consultation' },
        ],
        creator: {
            avatar: '/images/user-image-4.png',
            name: 'PurePearl Studio',
            role: 'Professional Creator',
            prompt: 'Ready to Dive In? Enroll Now and Start Building Your Digital Future!',
            profileLabel: 'See Full Profile',
        },
    },
    tabs: [
        { id: 'about', label: 'About' },
        { id: 'lessons', label: 'Lessons' },
        { id: 'reviews', label: 'Reviews' },
    ],
    about: {
        descriptionHeading: 'Description',
        description: [
            'Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.',
            "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
            "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
        ],
        sneakPeakHeading: 'Sneak Peak',
        sneakPeakImages: [
            { src: '/images/sneak-peak-image-1.jpg', alt: 'Wireframe sketching session' },
            { src: '/images/sneak-peak-image-2.jpg', alt: 'Design workspace setup' },
            { src: '/images/sneak-peak-image-3.jpg', alt: 'Course project on laptop' },
            { src: '/images/sneak-peak-image-4.jpg', alt: 'Mobile app interfaces' },
        ],
        keyPointsHeading: 'Key Points',
        keyPoints: [
            'Foundational Concepts',
            'Design Principles Mastery',
            'Advanced Techniques in Digital Creation',
            'Project Showcase and Critique',
            'Optimizing for Various Platforms',
            'Digital Asset Management Best Practices',
            'Monetization Strategies',
            'Capstone Project: Building Your Portfolio',
        ],
    },
    lessonsPanel: {
        heading: 'Lessons',
    },
    reviewsPanel: {
        heading: 'Reviews',
        countLabelPrefix: 'Based on',
        items: [
            {
                avatar: '/images/user-image-1.png',
                name: 'Sophia Bennett',
                rating: 5,
                text: 'Clear, practical and beautifully structured. I shipped my very first digital product the same weekend I started this course.',
            },
            {
                avatar: '/images/user-image-2.png',
                name: 'Liam Carter',
                rating: 5,
                text: 'The design principles module alone is worth it. Every lesson builds on the previous one without ever feeling overwhelming.',
            },
        ],
    },
};
