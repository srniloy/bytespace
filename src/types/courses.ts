export interface CourseCategory {
    id: string;
    label: string;
    hidden?: boolean;
}

export interface Course {
    id: string;
    imageSrc: string;
    lessonCount: number;
    duration: string;
    commentCount?: number;
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

export interface CourseCardLabels {
    lessonsSuffix: string;
    commentsSuffix: string;
    creatorPrefix: string;
    studentsSuffix: string;
    priceSuffix: string;
    levelIcon: {
        src: string;
        alt: string;
    };
}
