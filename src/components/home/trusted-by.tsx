import { trustedByData } from '../../data/trusted-by';

export default function TrustedBy() {
    return (
        <section className="w-full bg-[#F9F9F9] py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 md:gap-x-16 lg:gap-x-24">

                    {trustedByData.logos.map((logo) => (
                        <div
                            key={logo.id}
                            className="flex items-center gap-3 text-[#8C93A0] hover:text-[#6B7280] transition-colors duration-300 cursor-pointer"
                        >
                            <div className="shrink-0">
                                <img src={logo.iconSrc} alt={logo.name} className="h-8 w-8" />
                            </div>

                            <span className="heading-xs font-bold">
                                {logo.name}
                            </span>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
