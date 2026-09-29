export interface LearningPath {
    id: string;
    label: string;
    iconSrc: string;
    iconAlt: string;
}

export interface LearningPathsData {
    heading: string;
    description: string;
    paths: LearningPath[];
}

export const learningPathsData: LearningPathsData = {
    heading: 'Explore Diverse Learning Paths at Bytespace',
    description:
        "At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.",
    paths: [
        { id: 'design', label: 'Design', iconSrc: '/icons/learning-path-icon-1.png', iconAlt: 'design Icon' },
        { id: 'development', label: 'Development', iconSrc: '/icons/learning-path-icon-2.png', iconAlt: 'development Icon' },
        { id: 'it-software', label: 'IT & Software', iconSrc: '/icons/learning-path-icon-3.png', iconAlt: 'it-software Icon' },
        { id: 'business', label: 'Business', iconSrc: '/icons/learning-path-icon-4.png', iconAlt: 'business Icon' },
        { id: 'marketing', label: 'Marketing', iconSrc: '/icons/learning-path-icon-5.png', iconAlt: 'marketing Icon' },
        { id: 'photography', label: 'Photography', iconSrc: '/icons/learning-path-icon-6.png', iconAlt: 'photography Icon' },
    ],
};
