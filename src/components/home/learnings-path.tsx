import { learningPathsData } from '../../data/learning-paths';

export default function LearningPathsSection() {
    return (
        <section className="w-full bg-white mt-4 py-20 flex flex-col items-center justify-center">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-[40px] text-black heading-s mb-4">
                        {learningPathsData.heading}
                    </h2>
                    <p className="text-[#8C93A0] text-base md:text-[17px] max-w-3xl mx-auto body-l font-light">
                        {learningPathsData.description}
                    </p>
                </div>

                <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                    {learningPathsData.paths.map((path) => (
                        <div
                            key={path.id}
                            className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-3xl p-4 md:p-6 cursor-pointer group hover:border-gray-300 hover:-translate-y-[5px] hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.05)] transition-all duration-200"
                        >
                            <div className="w-14 h-14 rounded-full bg-accent-lime flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                                <img src={path.iconSrc} alt={path.iconAlt} loading="lazy" decoding="async" />
                            </div>

                            <span className="label-l text-gray-800 text-center">
                                {path.label}
                            </span>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
}