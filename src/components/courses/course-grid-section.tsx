import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CourseCard from "./course-card";
import CoursePagination from "./course-pagination";
import FilterBar from "./filter-bar";
import Container from "../shared/container";
import { CourseCardGridSkeleton } from "../shared/route-skeleton";
import { homeCourses } from "../../data/courses";
import type { Course } from "../../types/courses";
import { coursesPageData } from "../../data/courses-page";
import { getPageCourses } from "../../lib/pagination";
import { preloadImages } from "../../lib/preload-images";

const { pagination } = coursesPageData;

// skeleton appears only when the next page takes a beat to load,
// fast (cached) page changes swap instantly with no flash
const SKELETON_DELAY_MS = 150;

export default function CourseGridSection() {
    const [searchParams, setSearchParams] = useSearchParams();
    const sectionRef = useRef<HTMLElement>(null);
    const firstRender = useRef(true);

    const requestedPage = Number(searchParams.get("page"));
    const { pageCourses, currentPage, totalPages } = getPageCourses(
        homeCourses,
        requestedPage,
        pagination.coursesPerPage,
    );

    const [visibleCourses, setVisibleCourses] = useState<Course[]>(pageCourses);
    const [gridLoading, setGridLoading] = useState(false);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        let cancelled = false;
        const revealTimer = window.setTimeout(() => {
            if (!cancelled) setGridLoading(true);
        }, SKELETON_DELAY_MS);
        const { pageCourses: next } = getPageCourses(homeCourses, currentPage, pagination.coursesPerPage);
        preloadImages(next.map((course) => course.imageSrc)).then(() => {
            if (cancelled) return;
            window.clearTimeout(revealTimer);
            setVisibleCourses(next);
            setGridLoading(false);
        });
        return () => {
            cancelled = true;
            window.clearTimeout(revealTimer);
        };
    }, [currentPage]);

    const handlePageChange = (page: number) => {
        setSearchParams(page > 1 ? { page: String(page) } : {});
        sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section ref={sectionRef} aria-busy={gridLoading} className="w-full bg-white pt-20 pb-16 font-sans scroll-mt-20">
            <Container>

                <FilterBar />

                {gridLoading ? (
                    <CourseCardGridSkeleton count={pagination.coursesPerPage} />
                ) : (
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14">
                        {visibleCourses.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                )}

                <CoursePagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    className="mt-20"
                />

            </Container>
        </section>
    );
}
