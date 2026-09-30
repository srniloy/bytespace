import type { CourseDetailsData } from '../types/course-details';

export type {
    CourseDetailsData,
    CourseDetailsLesson,
    CourseDetailsTab,
    CourseIncludeItem,
    CourseModule,
    CourseRatingFilter,
    CourseReview,
    CourseTabId,
    IncludeIconKey,
    ReviewSummaryRow,
    SneakPeakImage,
} from '../types/course-details';

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
            src: '/images/course-details-video-thumbnail.webp',
            embedUrl: 'https://www.youtube.com/embed/gjffmgucDSw',
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
            avatar: '/images/user-image-4.webp',
            name: 'PurePearl Studio',
            role: 'Professional Creator',
            prompt: 'Ready to Dive In? Enroll Now and Start Building Your Digital Future!',
            profileLabel: 'See Full Profile',
        },
    },
    tabs: [
        { id: 'about', label: 'About' },
        { id: 'lessons', label: 'Lesson' },
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
            { src: '/images/sneak-peak-image-1.webp', alt: 'Wireframe sketching session' },
            { src: '/images/sneak-peak-image-2.webp', alt: 'Design workspace setup' },
            { src: '/images/sneak-peak-image-3.webp', alt: 'Course project on laptop' },
            { src: '/images/sneak-peak-image-4.webp', alt: 'Mobile app interfaces' },
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
        heading: 'Explore the Modules',
        intro: 'Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.',
        listHeading: 'Lesson List',
        modules: [
            {
                title: 'Module 1: Introduction to Digital Assets',
                description:
                    "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools'. Dive into the essentials of digital asset creation.",
            },
            {
                title: 'Module 2: Design Principles for Impact',
                description:
                    "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials'. Elevate your visual communication skills.",
            },
            {
                title: 'Module 4: User-Centric Design Strategies',
                description:
                    "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials'. Craft digital assets with a focus on user-centric design.",
            },
            {
                title: 'Module 5: Interactive Media and Engagement',
                description:
                    "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements'. Master the art of creating immersive digital experiences.",
            },
            {
                title: 'Module 6: Project Showcase and Critique',
                description:
                    "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration'. Showcase your work with confidence.",
            },
            {
                title: 'Module 7: Optimizing Digital Assets for Various Platforms',
                description:
                    "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media'. Ensure widespread accessibility and engagement across diverse digital landscapes.",
            },
        ],
        contentHeading: 'Lesson Content',
        contentDescription:
            'Engage each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.',
        trackingHeading: 'Lesson Progress Tracking',
        trackingDescription:
            'Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.',
        trackingProgress: 55,
    },
    reviewsPanel: {
        heading: 'What Learners Are Saying',
        intro: "Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.",
        summary: {
            label: 'Ratings',
            rating: '4.7',
            rows: [
                { stars: 5, count: 720, percentage: 92 },
                { stars: 4, count: 120, percentage: 39 },
                { stars: 3, count: 21, percentage: 9 },
                { stars: 2, count: 12, percentage: 5 },
                { stars: 1, count: 16, percentage: 3 },
            ],
        },
        listHeading: 'Individual Reviews:',
        filters: [
            { id: 'all', label: 'All rating' },
            { id: '5', label: '5' },
            { id: '4', label: '4' },
            { id: '3', label: '3' },
            { id: '2', label: '2' },
            { id: '1', label: '1' },
        ],
        items: [
            {
                avatar: '/images/user-image-4.webp',
                name: 'PurePearl Studio',
                role: 'UI/UX Designer',
                timeAgo: 'a year ago',
                rating: 5,
                text: 'The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!',
            },
            {
                avatar: '/images/user-image-1.webp',
                name: 'Albert Flores',
                role: 'UI/UX Designer',
                timeAgo: 'a year ago',
                rating: 5,
                text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
            },
            {
                avatar: '/images/user-image-2.webp',
                name: 'Cody Fisher',
                role: 'UI/UX Designer',
                timeAgo: 'a year ago',
                rating: 5,
                text: 'The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.',
            },
            {
                avatar: '/images/user-image-3.webp',
                name: 'Brooklyn Simons',
                role: 'UI/UX Designer',
                timeAgo: 'a year ago',
                rating: 5,
                text: 'The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.',
            },
        ],
    },
};
