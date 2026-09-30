import { NavLink } from 'react-router-dom';
import Button from '../button';
import { creatorCtaData } from '../../data/creator-section';

const { headingLines, description, button } = creatorCtaData;

export interface Shape {
    src: string;
    className: string;
}

const SHAPES: Shape[] = [
    { src: '/layout-designs/hero-spiral-bg-1.png', className: 'hidden lg:block -top-30 -left-15 w-32 md:w-62' },
    { src: '/layout-designs/hero-spiral-bg-4.png', className: 'hidden xl:block top-6 left-24 md:left-36 w-16 md:w-36' },
    { src: '/layout-designs/hero-spiral-bg-8.png', className: 'hidden xl:block top-4 right-24 md:right-48 w-24 md:w-32' },
    { src: '/layout-designs/hero-spiral-bg-9.png', className: 'hidden lg:block top-8 -right-20 md:-right-32 w-44 md:w-72' },
    { src: '/layout-designs/hero-spiral-bg-7.png', className: 'hidden lg:block top-1/2 -left-6 md:-left-10 w-24 md:w-40 -translate-y-1/2' },
    { src: '/layout-designs/hero-spiral-bg-10.png', className: 'hidden lg:block -bottom-30 left-0 md:left-10 w-32 md:w-72' },
    { src: '/layout-designs/growth-spiral-1.png', className: 'hidden lg:block -bottom-8 right-8 md:right-36 w-28 md:w-36' },
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

export default function CreatorSection() {
    return (
        <section
            style={{ backgroundImage: 'url(/layout-designs/hero-section-grid.png)' }}
            className="relative overflow-hidden bg-persian-blue bg-cover bg-center py-20 md:py-24 font-sans"
        >
            {/* --- bg shapes --- */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                {SHAPES.map((shape) => (
                    <Shape key={`${shape.src}-${shape.className}`} {...shape} />
                ))}
            </div>

            <div className="relative z-10 mx-auto max-w-3xl px-4 md:px-8 text-center">
                <h2 className="text-3xl md:text-[44px] heading-m text-white mb-6">
                    {headingLines[0]} <br className="hidden md:block" /> {headingLines[1]}
                </h2>

                <p className="text-blue-100 body-m md:body-l max-w-3xl mx-auto mb-10">
                    {description}
                </p>

                <NavLink to={button.href} aria-label={button.label}>
                    <Button variant="lime" size="md">
                        {button.label}
                    </Button>
                </NavLink>
            </div>
        </section>
    );
}
