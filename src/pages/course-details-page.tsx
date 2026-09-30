import { useParams } from 'react-router-dom';
import { homeCourses } from '../data/courses';
import CourseDetailsHero from '../components/course-details/course-details-hero';
import CourseAboutSection from '../components/course-details/course-about-section';

export default function CourseDetailsPage() {
    const { id } = useParams();
    const course = homeCourses.find((item) => item.id === id) ?? homeCourses[0];

    return (
        <>
            <CourseDetailsHero course={course} />
            <CourseAboutSection />
        </>
    );
}
