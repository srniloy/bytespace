import React from 'react';


interface LogoItem {
    id: number;
    name: string;
    icon: React.ReactNode;
}

export default function TrustedBy() {
    const logos: LogoItem[] = [
        { id: 1, name: 'Logoipsum', icon: <img src="/icons/trusted-by-icon-1.png" alt="Logoipsum" className="h-8 w-8" /> },
        { id: 2, name: 'Logoipsum', icon: <img src="/icons/trusted-by-icon-2.png" alt="Logoipsum" className="h-8 w-8" /> },
        { id: 3, name: 'Logoipsum', icon: <img src="/icons/trusted-by-icon-3.png" alt="Logoipsum" className="h-8 w-8" /> },
        { id: 4, name: 'Logoipsum', icon: <img src="/icons/trusted-by-icon-4.png" alt="Logoipsum" className="h-8 w-8" /> },
        { id: 5, name: 'Logoipsum', icon: <img src="/icons/trusted-by-icon-5.png" alt="Logoipsum" className="h-8 w-8" /> },
    ];

    return (
        <section className="w-full bg-[#F9F9F9] py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 md:gap-x-16 lg:gap-x-24">

                    {logos.map((logo) => (
                        <div
                            key={logo.id}
                            className="flex items-center gap-3 text-[#8C93A0] hover:text-[#6B7280] transition-colors duration-300 cursor-pointer"
                        >
                            <div className="flex-shrink-0">
                                {logo.icon}
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