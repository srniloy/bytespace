import type { HeroData } from '../types/hero';

export type { HeroData } from '../types/hero';

export const heroData: HeroData = {
    headingLines: ['Get Access to Hundreds', 'Courses Available'],
    description:
        'Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.',
    search: {
        placeholder: 'Course, topic, creator',
        buttonLabel: 'Search',
    },
    personImage: {
        src: '/images/hero-section-boy.webp',
        alt: 'Student learning',
    },
    floatingCard: {
        title: 'UI/UX Design',
        subtitle: '200 Courses • 1000+ Students',
    },
    learningProgress: 55,
};
