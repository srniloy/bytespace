import type { ReactNode } from 'react';

type AvatarStackSize = 'sm' | 'md';

interface AvatarStackProps {
    avatars: string[];
    badge?: ReactNode;
    size?: AvatarStackSize;
    className?: string;
}

const AVATAR_CLASSES: Record<AvatarStackSize, string> = {
    sm: 'w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white object-cover',
    md: 'w-8 h-8 rounded-full border-2 border-white object-cover',
};

const BADGE_BASE = 'rounded-full border-2 border-white bg-[#CCFF00] flex items-center justify-center font-bold text-black';

const BADGE_CLASSES: Record<AvatarStackSize, string> = {
    sm: 'w-6 h-6 md:w-8 md:h-8 text-[8px] md:text-[10px] -ml-1',
    md: 'w-8 h-8 text-[10px] z-10 shrink-0',
};

export default function AvatarStack({ avatars, badge, size = 'md', className = '' }: AvatarStackProps) {
    return (
        <div className={`flex items-center ${className}`}>
            <div className="flex -space-x-2">
                {avatars.map((url) => (
                    <img key={url} src={url} alt="Student" className={AVATAR_CLASSES[size]} />
                ))}
                {badge != null && (
                    <div className={`${BADGE_BASE} ${BADGE_CLASSES[size]}`}>
                        {badge}
                    </div>
                )}
            </div>
        </div>
    );
}
