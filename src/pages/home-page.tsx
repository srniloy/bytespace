import HeroSection from '../components/home/hero-section'
import HomeCourseSection from '../components/home/home-course-section'
import GrowthSection from '../components/home/growth-section'
import TestimonialsSection from '../components/home/testimonials-section'
import TrustedBy from '../components/home/trusted-by'
import CreatorSection from '../components/home/creator-section'
import usePageTitle from '../hooks/use-page-title'

export default function HomePage() {
    usePageTitle('ByteSpace - Learn from the best creators and grow your skills');
    return (
        <>

            <HeroSection />

            <TrustedBy />

            <HomeCourseSection />

            <GrowthSection />

            <CreatorSection />

            <TestimonialsSection />

        </>
    )
}