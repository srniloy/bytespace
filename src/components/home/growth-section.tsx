import CourseCard from '../courses/course-card';
import HappyUserCard from '../shared/happy-user-card';
import LearningProgressCard from '../shared/learning-progress-card';
import { growthSectionData, singleCourse } from '../../data/growth-section';

const { growth, creators, revenueCard, yearCard, learningProgress } = growthSectionData;

const SECTION_BACKGROUND = [
    'radial-gradient(circle at 25% 5%, rgba(217, 255, 59, 0.45) 0%, rgba(217, 255, 59, 0) 20%)',
    'radial-gradient(circle at 100% 15%, rgba(190, 205, 255, 0.65) 0%, rgba(190, 205, 255, 0) 20%)',
    'radial-gradient(circle at 0% 40%, rgba(190, 205, 255, 0.55) 0%, rgba(190, 205, 255, 0) 18%)',
    'radial-gradient(circle at 5% 80%, rgba(217, 255, 59, 0.60) 0%, rgba(217, 255, 59, 0) 12%)',
    'radial-gradient(circle at 94% 96%, rgba(185, 199, 255, 0.7) 0%, rgba(185, 199, 255, 0) 20%)',
    '#ffffff',
].join(', ');


function CheckIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
            <circle cx="12" cy="12" r="10" fill="#003BE2" />
            <path d="M7.5 12.5l3 3 6-6.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default function GrowthSection() {
    return (
        <section className="relative overflow-hidden py-16 md:py-24" style={{ background: SECTION_BACKGROUND }}>


            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-24 px-4 md:gap-32 md:px-8">

                {/* --- row 1 --- */}
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    <div className="max-w-xl text-center lg:text-left">
                        <h2 className="text-3xl md:text-[44px] heading-m text-gray-900 mb-6">
                            {growth.heading}
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg body-l mb-10 max-w-lg">
                            {growth.description}
                        </p>

                        <div className="flex justify-center lg:justify-start gap-8 md:gap-12">
                            {growth.stats.map((stat) => (
                                <div key={stat.label}>
                                    <p className="text-3xl md:text-4xl heading-s text-persian-blue mb-1">
                                        {stat.value}
                                    </p>
                                    <p className="text-gray-600 body-m">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative mx-auto min-h-70 min-[450px]:min-h-82.5  w-full max-w-130 sm:min-h-117.5">


                        <div className="hidden sm:block relative left-0 top-10 z-10 w-[70%] sm:w-[55%] select-none">
                            <CourseCard course={singleCourse} />
                        </div>

                        <img
                            src={growth.image.src}
                            alt={growth.image.alt}
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-[90%] max-w-130"
                        />


                        <LearningProgressCard
                            progress={learningProgress}
                            positionClassName="hidden sm:block absolute right-5 top-[46%] z-30 w-44 md:w-52"
                        />
                        <img className='hidden sm:block absolute top-30 z-30 -right-5 w-40' src="/layout-designs/growth-spiral-1.webp" alt="" />

                    </div>
                </div>

                {/* --- row 2 --- */}
                <div className="flex items-center flex-col-reverse lg:flex-row gap-20 lg:gap-16">

                    <div className="relative mx-auto min-h-105 min-[450px]:min-h-130 w-full max-w-120 sm:min-h-130">


                        {/* Revenue Card */}
                        <div className="hidden sm:block absolute left-0 top-0 z-20 w-52 rounded-2xl bg-persian-blue p-4 text-white shadow-xl">
                            <p className="label-s">{revenueCard.title}</p>
                            <p className="body-xs text-white/70">{revenueCard.period}</p>
                            <p className="heading-xs mt-2 mb-3">{revenueCard.amount}</p>
                            <div className="h-1.5 w-full rounded-full bg-white/50">
                                <div className="h-1.5 rounded-full bg-accent-lime" style={{ width: `${revenueCard.progress}%` }} />
                            </div>
                        </div>

                        {/* Year to Date Card */}
                        <div className="hidden sm:block absolute left-0 top-44 z-20 w-fit rounded-2xl bg-persian-blue p-4 text-white shadow-xl">
                            <p className="label-s">{yearCard.title}</p>
                            <p className="body-xs text-white/70">{yearCard.year}</p>
                            <p className="heading-xs mt-2">{yearCard.amount}</p>
                            <span className="mt-3 inline-block rounded-md bg-accent-lime px-2 py-0.5 label-xs text-black">
                                {yearCard.badge}
                            </span>
                        </div>

                        <img
                            src={creators.image.src}
                            alt={creators.image.alt}
                            className="absolute bottom-0 left-1/2 z-30 w-[80%] max-w-135 -translate-x-1/2"
                        />

                        <img className='hidden sm:block absolute top-10 z-30 right-10 w-40' src="/layout-designs/growth-spiral-2.webp" alt="" />


                        <HappyUserCard positionClassName="hidden sm:block absolute bottom-45 right-0 z-40 w-52 md:w-60" />
                    </div>

                    <div className="max-w-xl flex flex-col items-center lg:items-start text-center lg:text-left">
                        <h2 className="text-3xl md:text-[44px] heading-m text-gray-900 mb-6">
                            {creators.heading}
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg body-l mb-8 max-w-lg">
                            <span className="font-semibold text-gray-900">{creators.brand}</span> {creators.description}
                        </p>

                        <ul className="flex flex-col gap-4">
                            {creators.features.map((feature) => (
                                <li key={feature} className="flex items-center gap-3">
                                    <CheckIcon />
                                    <span className="label-l font-medium text-gray-700">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
