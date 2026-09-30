import type { CoursesPageData } from '../types/courses-page';

export type {
    CoursesPageData,
    CoursesPageHero,
    CourseCategoryOption,
    FilterOption,
    PaginationConfig,
} from '../types/courses-page';

export const coursesPageData: CoursesPageData = {
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
