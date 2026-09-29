import HeroSection from '../components/home/hero-section'
import HomeCourseSection from '../components/home/home-course-section'
import GrowthSection from '../components/home/growth-section'
import TestimonialsSection from '../components/home/testimonials-section'
import TrustedBy from '../components/home/trusted-by'
import CreatorSection from '../components/home/creator-section'

export default function HomePage() {
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