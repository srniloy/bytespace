interface CoursePaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    className?: string;
}

export default function CoursePagination({ currentPage, totalPages, onPageChange, className = "" }: CoursePaginationProps) {
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    const goToPrevious = () => onPageChange(Math.max(1, currentPage - 1));
    const goToNext = () => onPageChange(Math.min(totalPages, currentPage + 1));

    return (
        <nav aria-label="Pagination" className={`flex items-center justify-center gap-4 ${className}`}>
            <button
                type="button"
                aria-label="Previous page"
                onClick={goToPrevious}
                className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-colors duration-200 hover:border-gray-300 hover:bg-gray-50"
            >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>

            <div className="flex items-center gap-2">
                {pages.map((page) => (
                    <button
                        key={page}
                        type="button"
                        aria-current={page === currentPage ? "page" : undefined}
                        aria-label={`Page ${page}`}
                        onClick={() => onPageChange(page)}
                        className={`flex h-8 w-8 cursor-pointer items-center justify-center body-s transition-colors duration-200 ${page === currentPage ? "text-gray-400" : "text-gray-800 hover:text-persian-blue"
                            }`}
                    >
                        {page}
                    </button>
                ))}
            </div>

            <button
                type="button"
                aria-label="Next page"
                onClick={goToNext}
                className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-colors duration-200 hover:border-gray-300 hover:bg-gray-50"
            >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M9 18l6-6-6-6" />
                </svg>
            </button>
        </nav>
    );
}
