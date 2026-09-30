import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { creatorPageData, type Creator } from '../../data/creator-page';

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
            <motion.div
                whileHover={{ y: -4, boxShadow: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="flex h-full w-full flex-col items-center rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-sm font-sans"
            >
                <img
                    src={creator.avatar.src}
                    alt={creator.avatar.alt}
                    className="size-24 shrink-0 rounded-3xl object-cover"
                />

                <h3 className="mt-5 heading-xs text-gray-900">{creator.name}</h3>
                <span className="mt-3 rounded-full bg-accent-lime px-4 py-1.5 label-xs font-semibold text-black">
                    {creator.badge}
                </span>
                <p className="mt-3 body-s text-gray-500">{creator.role}</p>

                <div className="mt-4 flex flex-wrap justify-center gap-3">
                    {stats.map((stat) => (
                        <span key={stat} className="rounded-full bg-[#F4F5F6] px-4 py-1.5 label-xs text-gray-700">
                            {stat}
                        </span>
                    ))}
                </div>

                <span className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#CCFF00] px-6 py-2.5 label-s text-black transition-colors duration-200 group-hover:bg-[#b3e600]">
                    {cardLabels.viewLabel}
                </span>
            </motion.div>
        </Link>
    );
}
