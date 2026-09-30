import Button from '../button';
import { creatorPageData, type Creator } from '../../data/creator-page';

const { followLabel, cardLabels } = creatorPageData;

interface CreatorHeroProps {
    creator: Creator;
}

export default function CreatorHero({ creator }: CreatorHeroProps) {
    const stats = [
        { count: creator.products, suffix: cardLabels.productsSuffix },
        { count: creator.followers, suffix: cardLabels.followersSuffix },
    ];

    return (
        <section
            style={{ backgroundImage: 'url(/layout-designs/hero-section-grid.png)' }}
            className="relative overflow-hidden bg-persian-blue bg-cover pt-44 pb-20 font-sans"
        >
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">

                {/* --- AVATAR + NAME ROW --- */}
                <div className="flex flex-col sm:flex-row items-center gap-5">
                    <img
                        src={creator.avatar.src}
                        alt={creator.avatar.alt}
                        className="size-26 shrink-0 rounded-3xl object-cover"
                    />

                    <div className="min-w-0 flex flex-col items-center sm:items-start">
                        <div className="flex flex-wrap flex-col sm:flex-row items-center gap-4">
                            <h1 className="heading-s text-white">{creator.name}</h1>
                            <span className="rounded-full bg-accent-lime px-5 py-2 label-m font-semibold text-black">
                                {creator.badge}
                            </span>
                        </div>
                        <p className="mt-2 body-l text-white">{creator.role}</p>
                    </div>
                </div>

                {/* --- BIO --- */}
                <div className="mt-12 space-y-3 text-center sm:text-left">
                    {creator.bio.map((paragraph) => (
                        <p key={paragraph} className="body-l text-white">{paragraph}</p>
                    ))}
                </div>

                {/* --- STATS + FOLLOW --- */}
                <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-4 md:gap-6">
                        {stats.map((stat) => (
                            <span key={stat.count} className="rounded-full bg-white px-6 py-3 label-m text-gray-900">
                                <span className='text-persian-blue'>{stat.count}</span>{stat.suffix}
                            </span>
                        ))}
                    </div>

                    <Button variant="lime" size="sm" className="px-7">
                        {followLabel}
                    </Button>
                </div>

            </div>
        </section>
    );
}
