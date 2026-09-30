import { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import CourseCard from "./course-card";
import CoursePagination from "./course-pagination";
import FilterBar from "./filter-bar";
import { homeCourses } from "../../data/courses";
import { coursesPageData } from "../../data/courses-page";

const { pagination } = coursesPageData;

export default function CourseGridSection() {
    const [searchParams, setSearchParams] = useSearchParams();
    const sectionRef = useRef<HTMLElement>(null);

    const totalPages = Math.max(1, Math.ceil(homeCourses.length / pagination.coursesPerPage));
    const requestedPage = Number(searchParams.get("page"));
    const currentPage = Number.isFinite(requestedPage) && requestedPage >= 1
        ? Math.min(Math.floor(requestedPage), totalPages)
        : 1;

    const startIndex = (currentPage - 1) * pagination.coursesPerPage;
    const pageCourses = homeCourses.slice(startIndex, startIndex + pagination.coursesPerPage);

    const handlePageChange = (page: number) => {
        setSearchParams(page > 1 ? { page: String(page) } : {});
        sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section ref={sectionRef} className="w-full bg-white pt-20 pb-16 font-sans scroll-mt-20">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8">

                <FilterBar />

                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14">
                    {pageCourses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>

                <CoursePagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    className="mt-20"
                />

            </div>
        </section>
    );
}
