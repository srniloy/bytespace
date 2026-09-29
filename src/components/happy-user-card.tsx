import AvatarStack from './avatar-stack';
import { happyUserCardData } from '../data/happy-user-card';

const { title, rating, reviewCount, avatars, badge } = happyUserCardData;

interface HappyUserCardProps {
    positionClassName?: string;
}

const DEFAULT_POSITION = 'hidden sm:block absolute bottom-[14%] -left-2 md:left-20';

export default function HappyUserCard({ positionClassName = DEFAULT_POSITION }: HappyUserCardProps) {
    return (
        <div className={`bg-white rounded-2xl p-4 shadow-xl z-20 w-44 md:w-52 ${positionClassName}`}>
            <h3 className="font-bold text-gray-800 text-sm md:text-base label-m">{title}</h3>
            <div className="flex items-center gap-1 mt-1 mb-3">
                <span className="text-[10px] md:text-xs text-black body-xs">{rating} <span className='text-gray-500'>{reviewCount}</span></span>
                <span className="text-accent-lime text-lg leading-3">★</span>
            </div>
            {/* Avatar Stack */}
            <AvatarStack
                avatars={avatars}
                badge={badge}
                size="sm"
            />
        </div>
    )
}
