interface LearningProgressCardProps {
    progress?: number;
    positionClassName?: string;
}

const DEFAULT_POSITION = 'hidden sm:block absolute top-[30%] right-0 sm:right-4 md:right-[25%]';

export default function LearningProgressCard({
    progress = 55,
    positionClassName = DEFAULT_POSITION,
}: LearningProgressCardProps) {
    return (
        <div className={`bg-white text-black rounded-2xl p-4 shadow-xl z-20 w-36 md:w-44 ${positionClassName}`}>
            <h3 className="font-medium text-xs md:text-sm label-s">Learning Progress</h3>
            <p className="font-bold text-2xl md:text-3xl mt-1 mb-2 heading-m">{progress}%</p>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-accent-lime h-1.5 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    );
}
