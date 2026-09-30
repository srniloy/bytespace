import CourseCard from '../courses/course-card';
import FilterBar from '../courses/filter-bar';
import { homeCourses } from '../../data/courses';

const PRODUCT_COUNT = 6;

const creatorProducts = homeCourses.slice(0, PRODUCT_COUNT);

export default function CreatorProductsSection() {
    return (
        <section className="w-full bg-white pt-20 pb-16 font-sans">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8">

                <FilterBar showCategories={false} />

                <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14">
                    {creatorProducts.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>

            </div>
        </section>
    );
}
