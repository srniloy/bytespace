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

export interface CoursesPageData {
    hero: CoursesPageHero;
    filters: {
        options: FilterOption[];
        sortLabel: string;
    };
    categories: CourseCategoryOption[];
    pagination: PaginationConfig;
}
