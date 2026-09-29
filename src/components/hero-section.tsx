import HappyUserCard from "./happy-user-card";
import SearchBar from "./search-bar";

export default function HeroSection() {
    return (
        <section
            style={{ backgroundImage: 'url(/layout-designs/hero-section-grid.png)' }}
            className="min-h-screen bg-persian-blue bg-cover flex flex-col relative overflow-hidden font-sans"
        >
            <div className="flex-1 flex flex-col items-center pt-50 px-4 w-full max-w-7xl mx-auto relative z-10">

                {/* --- HERO TEXT SECTION --- */}
                <div className="text-center max-w-4xl mx-auto mb-10">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl heading-l text-white mb-12">
                        Get Access to Hundreds <br className="hidden md:block" /> Courses Available
                    </h1>
                    <p className="text-blue-100 text-base md:text-lg mx-auto body-l">
                        Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
                    </p>
                </div>

                {/* --- SEARCH BAR SECTION --- */}
                <SearchBar variant="hero" />





                {/* --- HERO IMAGE & FLOATING ELEMENTS AREA --- */}
                <div className="relative w-full max-w-4xl mx-auto flex justify-center mt-auto">

                    {/* Background Lime Green Circle */}
                    <div className="absolute -top-20 mt-10 w-[90vw] h-[150vw] md:w-[70vw] md:h-[70vw] bg-[#CCFF00] rounded-full -z-10"></div>

                    {/* Main Person Image Placeholder */}
                    <img
                        src="/images/hero-section-boy.png"
                        alt="Student learning"
                        className="relative z-10"
                    />

                    {/* --- FLOATING CARDS --- */}

                    {/* Card 1: UI/UX Design (Top Left) */}
                    <div className="hidden sm:block absolute top-0 sm:top-[20%] left-0 md:left-[10%] bg-white rounded-2xl p-4 shadow-xl z-20 w-40 md:w-52 animate-fade-in-up">
                        <h3 className="font-bold text-gray-800 text-sm md:text-base label-m">UI/UX Design</h3>
                        <p className=" text-gray-500 body-xs">200 Courses • 1000+ Students</p>
                    </div>

                    {/* Card 2: Learning Progress (Top Right) */}
                    <div className="hidden sm:block absolute top-[30%] right-0 sm:right-4 md:right-[25%] bg-white text-black rounded-2xl p-4 shadow-xl z-20 w-36 md:w-44">
                        <h3 className="font-medium text-xs md:text-sm label-s">Learning Progress</h3>
                        <p className="font-bold text-2xl md:text-3xl mt-1 mb-2 heading-m">55%</p>
                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div className="bg-accent-lime h-1.5 rounded-full" style={{ width: '55%' }}></div>
                        </div>
                    </div>

                    {/* Card 3: Happy Students (Bottom Left) */}
                    <HappyUserCard />
                </div>
            </div>

            {/* ------ layout floating styles ---------- */}

            <img className='hidden xl:block absolute -left-21.25 top-62.5' src="/layout-designs/hero-spiral-bg-1.png" alt="layout styles" />
            <img className='hidden xl:block absolute -right-40 top-62.5' src="/layout-designs/hero-spiral-bg-2.png" alt="layout styles" />
            <img className='hidden xl:block absolute right-40 bottom-90' src="/layout-designs/hero-spiral-bg-3.png" alt="layout styles" />
            <img className='hidden xl:block absolute left-50 bottom-100' src="/layout-designs/hero-spiral-bg-4.png" alt="layout styles" />
            <img className='hidden xl:block absolute right-15 bottom-0 max-[1550px]:w-70 z-10' src="/layout-designs/hero-spiral-bg-5.png" alt="layout styles" />
            <img className='hidden xl:block absolute left-40 max-[1550px]:w-80 max-[1550px]:left-0 bottom-0 z-10' src="/layout-designs/hero-spiral-bg-6.png" alt="layout styles" />
        </section>
    )
}
