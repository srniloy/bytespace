import { Link } from 'react-router-dom';
import { creatorPageData } from '../../data/creator-page';
import type { Creator } from '../../types/creator-page';

const { cardLabels } = creatorPageData;

interface CreatorCardProps {
    creator: Creator;
}

export default function CreatorCard({ creator }: CreatorCardProps) {
    const stats = [
        `${creator.products}${cardLabels.productsSuffix}`,
        `${creator.followers}${cardLabels.followersSuffix}`,
    ];

    return (
        <Link to={`/creators/${creator.id}`} className="block h-full cursor-pointer group">
            <div
                className="flex h-full w-full flex-col items-center rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-sm font-sans transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_10px_10px_-5px_rgba(0,0,0,0.04)]"
            >
                <img
                    src={creator.avatar.src}
                    alt={creator.avatar.alt}
                    loading="lazy"
                    decoding="async"
                    className="size-24 shrink-0 rounded-3xl object-cover"
                />

                <h3 className="mt-5 heading-xs text-gray-900">{creator.name}</h3>
                <span className="mt-3 rounded-full bg-accent-lime px-4 py-1.5 label-xs font-semibold text-black">
                    {creator.badge}
                </span>
                <p className="mt-3 body-s text-gray-500">{creator.role}</p>

                <div className="mt-4 flex flex-wrap justify-center gap-3">
                    {stats.map((stat) => (
                        <span key={stat} className="rounded-full bg-chip px-4 py-1.5 label-xs text-gray-700">
                            {stat}
                        </span>
                    ))}
                </div>

                <span className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-accent-lime px-6 py-2.5 label-s text-black transition-colors duration-200 group-hover:brightness-95">
                    {cardLabels.viewLabel}
                </span>
            </div>
        </Link>
    );
}
