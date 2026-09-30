import HappyUserCard from "../shared/happy-user-card";
import LearningProgressCard from "../shared/learning-progress-card";
import SearchBar from "../shared/search-bar";
import { heroData } from "../../data/hero";

const { headingLines, description, search, personImage, floatingCard, learningProgress } = heroData;

export default function HeroSection() {
    return (
        <section
            style={{ backgroundImage: 'url(/layout-designs/hero-section-grid.png)' }}
            className="min-h-screen bg-persian-blue bg-cover flex flex-col relative overflow-hidden font-sans"
        >
            <div className="flex-1 flex flex-col items-center pt-50 px-4 md:px-8 w-full max-w-7xl mx-auto relative z-10">

                <div className="text-center max-w-4xl mx-auto mb-10">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl heading-l text-white mb-12">
                        {headingLines[0]} <br className="hidden md:block" /> {headingLines[1]}
                    </h1>
                    <p className="text-blue-100 text-base md:text-lg mx-auto body-l">
                        {description}
                    </p>
                </div>

                <SearchBar variant="hero" placeholder={search.placeholder} buttonLabel={search.buttonLabel} />





                <div className="relative w-full max-w-4xl mx-auto flex justify-center mt-auto">

                    <div className="absolute -top-20 mt-10 w-[90vw] h-[150vw] md:w-[70vw] md:h-[70vw] bg-accent-lime rounded-full -z-10"></div>

                    <img
                        src={personImage.src}
                        alt={personImage.alt}
                        fetchPriority="high"
                        decoding="async"
                        width={676}
                        height={515}
                        className="relative z-10 h-auto w-full max-w-169"
                    />


                    <div className="hidden sm:block absolute top-0 sm:top-[20%] left-0 md:left-[10%] bg-white rounded-2xl p-4 shadow-xl z-20 w-40 md:w-52 animate-fade-in-up">
                        <h3 className="font-bold text-gray-800 text-sm md:text-base label-m">{floatingCard.title}</h3>
                        <p className=" text-gray-500 body-xs">{floatingCard.subtitle}</p>
                    </div>

                    <LearningProgressCard progress={learningProgress} />

                    <HappyUserCard />
                </div>
            </div>

            {/* ------ layout floating styles ---------- */}

            <img aria-hidden="true" className='hidden xl:block absolute -left-21.25 top-62.5' src="/layout-designs/hero-spiral-bg-1.png" alt="" loading="lazy" decoding="async" />
            <img aria-hidden="true" className='hidden xl:block absolute -right-40 top-62.5' src="/layout-designs/hero-spiral-bg-2.png" alt="" loading="lazy" decoding="async" />
            <img aria-hidden="true" className='hidden xl:block absolute right-40 bottom-90' src="/layout-designs/hero-spiral-bg-3.png" alt="" loading="lazy" decoding="async" />
            <img aria-hidden="true" className='hidden xl:block absolute left-50 bottom-100' src="/layout-designs/hero-spiral-bg-4.png" alt="" loading="lazy" decoding="async" />
            <img aria-hidden="true" className='hidden xl:block absolute right-15 bottom-0 max-[1550px]:w-70 z-10' src="/layout-designs/hero-spiral-bg-5.png" alt="" loading="lazy" decoding="async" />
            <img aria-hidden="true" className='hidden xl:block absolute left-40 max-[1550px]:w-80 max-[1550px]:left-0 bottom-0 z-10' src="/layout-designs/hero-spiral-bg-6.png" alt="" loading="lazy" decoding="async" />
        </section>
    )
}
