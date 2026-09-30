import CourseCard from '../courses/course-card';
import HappyUserCard from '../happy-user-card';
import { homeCourses } from '../../data/courses';
import type { AuthShowcaseData } from '../../data/auth';
import type { Shape } from '../home/creator-section';

interface AuthShowcaseProps {
    copy: AuthShowcaseData;
}

const SHAPES: Shape[] = [
    { src: '/layout-designs/hero-spiral-bg-10.png', className: 'top-[29%] left-[20%] z-30 w-32' },
    { src: '/layout-designs/hero-spiral-bg-4.png', className: 'bottom-[24%] right-[18%] z-30 w-16 md:w-36' },
    { src: '/layout-designs/hero-spiral-bg-8.png', className: 'bottom-[20%] left-[18%] w-24 md:w-32' },
];

function Shape({ src, className }: Shape) {
    return (
        <img
            aria-hidden="true"
            src={src}
            alt=""
            className={`absolute select-none object-contain ${className}`}
        />
    );
}

// decorative left half: intro copy + two real course cards, the happy students
// card and the lime shapes that also appear in the home hero
export default function AuthShowcase({ copy }: AuthShowcaseProps) {
    return (
        <div className="relative w-full overflow-hidden p-8 lg:w-1/2 lg:min-h-screen lg:p-16">


            <div className="relative z-20 mx-auto max-w-lg text-center lg:absolute lg:left-[16%] lg:top-16 lg:mx-0 lg:text-left">
                <div className="mb-10 flex justify-center lg:justify-start">
                    <img src="/images/logo.png" alt="ByteSpace" className="h-10 w-10 object-contain" />
                </div>

                <div className="max-w-lg">
                    <h1 className="heading-xs text-white">{copy.heading}</h1>
                    <p className="mt-3 body-l text-blue-100">{copy.description}</p>
                </div>
            </div>

            <div className="pointer-events-none absolute inset-0 hidden lg:block">
                {/* peeking course card (behind) */}
                <div className="absolute left-[16%] top-[35%] w-90">
                    <CourseCard course={homeCourses[0]} />
                </div>

                {/* main course card */}
                <div className="absolute left-[30%] top-[29%] z-10 w-90">
                    <CourseCard course={homeCourses[2]} />
                </div>

                <HappyUserCard
                    variant="lime"
                    positionClassName="absolute left-[48%] top-[72%]"
                />

                <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                    {SHAPES.map((shape) => (
                        <Shape key={`${shape.src}-${shape.className}`} {...shape} />
                    ))}
                </div>

            </div>

        </div>
    );
}
