import AvatarStack from './avatar-stack';
import { happyUserCardData } from '../data/happy-user-card';

const { title, rating, reviewCount, avatars, badge } = happyUserCardData;

type HappyUserCardVariant = 'light' | 'lime';

interface HappyUserCardProps {
    positionClassName?: string;
    variant?: HappyUserCardVariant;
}

const DEFAULT_POSITION = 'hidden sm:block absolute bottom-[14%] -left-2 md:left-20';

const VARIANT_CLASSES: Record<HappyUserCardVariant, string> = {
    light: 'bg-white w-44 md:w-52',
    lime: 'bg-accent-lime w-56 lg:w-64',
};

export default function HappyUserCard({ positionClassName = DEFAULT_POSITION, variant = 'light' }: HappyUserCardProps) {
    const isLime = variant === 'lime';

    return (
        <div className={`rounded-2xl p-4 shadow-xl z-20 ${VARIANT_CLASSES[variant]} ${positionClassName}`}>
            <h3 className={`font-bold text-sm md:text-base label-m ${isLime ? 'text-gray-900' : 'text-gray-800'}`}>{title}</h3>
            <div className="flex items-center gap-1 mt-1 mb-3">
                <span className="text-[10px] md:text-xs text-black body-xs">
                    {rating} <span className={isLime ? 'text-gray-700' : 'text-gray-500'}>{reviewCount}</span>
                </span>
                <span className={`text-lg leading-3 ${isLime ? 'text-yellow-500' : 'text-accent-lime'}`}>★</span>
            </div>
            <AvatarStack
                avatars={avatars}
                badge={badge}
                size="sm"
            />
        </div>
    )
}
