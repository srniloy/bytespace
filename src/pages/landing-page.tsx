import Navbar from '../components/navbar'
import heroGrid from '../assets/hero-section-grid.png';

export default function LandingPage() {
    return (
        <>
            <section
                style={{ backgroundImage: `url(${heroGrid})` }}
                className="min-h-screen bg-persian-blue bg-cover bg-start bg-no-repeat flex flex-col"
            >
                <Navbar />

              // write code here for the rest of the landing page content

            </section>
        </>
    )
}
