import LearningProgressCard from '../shared/learning-progress-card';
import { courseDetailsData } from '../../data/course-details';

const { lessonsPanel } = courseDetailsData;

const HEADING_CLASSES = 'font-poppins text-2xl font-semibold text-gray-900';

export default function CourseLessonsPanel() {
    return (
        <div className="mt-10">
            <h2 className={HEADING_CLASSES}>{lessonsPanel.heading}</h2>
            <p className="mt-6 body-m text-gray-600">{lessonsPanel.intro}</p>

            <h3 className={`mt-6 ${HEADING_CLASSES}`}>{lessonsPanel.listHeading}</h3>
            <ul className="mt-5 space-y-8">
                {lessonsPanel.modules.map((module) => (
                    <li key={module.title} className="flex items-start gap-6">
                        <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-accent-lime">
                            <img src="/icons/camera-icon.webp" alt="" className="size-8" />
                        </span>
                        <div className="min-w-0">
                            <p className="font-satoshi text-sm font-semibold text-gray-900">{module.title}</p>
                            <p className="mt-2 body-s text-gray-600">{module.description}</p>
                        </div>
                    </li>
                ))}
            </ul>

            <h3 className={`mt-10 ${HEADING_CLASSES}`}>{lessonsPanel.contentHeading}</h3>
            <p className="mt-6 body-m text-gray-600">{lessonsPanel.contentDescription}</p>

            <h3 className={`mt-14 ${HEADING_CLASSES}`}>{lessonsPanel.trackingHeading}</h3>
            <p className="mt-6 body-m text-gray-600">{lessonsPanel.trackingDescription}</p>

            <div className="mt-10">
                <LearningProgressCard
                    progress={lessonsPanel.trackingProgress}
                    positionClassName="relative"
                    cardClassName="w-full p-6 border border-gray-200"
                />
            </div>
        </div>
    );
}
