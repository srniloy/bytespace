import HeroSection from '../components/home/hero-section'
import HomeCourseSection from '../components/home/home-course-section'
import GrowthSection from '../components/home/growth-section'
import TrustedBy from '../components/home/trusted-by'

export default function HomePage() {
    return (
        <>
            <HeroSection />

            <TrustedBy />

            <HomeCourseSection />

            <GrowthSection />
        </>
    )
}