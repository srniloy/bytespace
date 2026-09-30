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
