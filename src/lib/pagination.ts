export interface PageResult<T> {
    pageCourses: T[];
    currentPage: number;
    totalPages: number;
}

export function getPageCourses<T>(all: T[], requestedPage: number, perPage: number): PageResult<T> {
    // bad input falls back to the nearest valid page instead of an empty grid
    const safePerPage = Math.max(1, Math.floor(perPage));
    const totalPages = Math.max(1, Math.ceil(all.length / safePerPage));
    const currentPage =
        Number.isFinite(requestedPage) && requestedPage >= 1
            ? Math.min(Math.floor(requestedPage), totalPages)
            : 1;
    const startIndex = (currentPage - 1) * safePerPage;
    return {
        pageCourses: all.slice(startIndex, startIndex + safePerPage),
        currentPage,
        totalPages,
    };
}
