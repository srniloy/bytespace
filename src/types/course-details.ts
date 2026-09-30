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
    role: string;
    timeAgo: string;
    rating: number;
    text: string;
}

export interface ReviewSummaryRow {
    stars: number;
    count: number;
    percentage: number;
}

export interface CourseRatingFilter {
    id: string;
    label: string;
}

export interface CourseModule {
    title: string;
    description: string;
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
            embedUrl: string;
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
        intro: string;
        listHeading: string;
        modules: CourseModule[];
        contentHeading: string;
        contentDescription: string;
        trackingHeading: string;
        trackingDescription: string;
        trackingProgress: number;
    };
    reviewsPanel: {
        heading: string;
        intro: string;
        summary: {
            label: string;
            rating: string;
            rows: ReviewSummaryRow[];
        };
        listHeading: string;
        filters: CourseRatingFilter[];
        items: CourseReview[];
    };
}
