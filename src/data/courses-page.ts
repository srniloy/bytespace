export interface CoursesPageHero {
    heading: string;
    search: {
        placeholder: string;
        buttonLabel: string;
        showChevron: boolean;
    };
}

export interface FilterOption {
    id: string;
    label: string;
}

export interface CourseCategoryOption {
    id: string;
    label: string;
}

export interface PaginationConfig {
    coursesPerPage: number;
}

export const coursesPageData: {
    hero: CoursesPageHero;
    filters: {
        options: FilterOption[];
        sortLabel: string;
    };
    categories: CourseCategoryOption[];
    pagination: PaginationConfig;
} = {
    hero: {
        heading: 'Find Your Next Course',
        search: {
            placeholder: 'Search',
            buttonLabel: 'Courses',
            showChevron: true,
        },
    },
    filters: {
        options: [
            { id: 'filter', label: 'Filter' },
            { id: 'level', label: 'Level' },
            { id: 'category', label: 'Category' },
        ],
        sortLabel: 'Most relevant',
    },
    categories: [
        { id: 'featured', label: 'Featured' },
        { id: 'music', label: 'Music' },
        { id: 'drawing', label: 'Drawing & Painting' },
        { id: 'marketing', label: 'Marketing' },
        { id: 'animation', label: 'Animation' },
        { id: 'social', label: 'Social Media' },
        { id: 'uiux', label: 'UI/UX Design' },
        { id: 'creative-marketing', label: 'Creative Marketing' },
        { id: 'cooking', label: 'Cooking' },
    ],
    pagination: {
        coursesPerPage: 9,
    },
};
