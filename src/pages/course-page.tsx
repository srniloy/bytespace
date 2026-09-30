import CoursesHero from '../components/courses/courses-hero'
import CourseGridSection from '../components/courses/course-grid-section'
import usePageTitle from '../hooks/use-page-title'

export default function CoursePage() {
    usePageTitle('Courses');
    return (
        <>
            <CoursesHero />
            <CourseGridSection />
        </>
    )
}
