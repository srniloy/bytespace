import { useState, type ReactNode } from 'react';
import { coursesPageData } from '../../data/courses-page';

const { filters, categories } = coursesPageData;

const PILL_CLASSES = 'flex h-12 cursor-pointer items-center gap-2 rounded-full border border-gray-200 bg-white px-4 body-s font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50';
const ACTIVE_CHIP_CLASSES = 'bg-accent-lime text-black';
const IDLE_CHIP_CLASSES = 'bg-chip text-[#5C636E] hover:bg-[#EAEBED] hover:text-black';

const ICON_CLASSES = 'h-4 w-4';

const filterIcons: Record<string, ReactNode> = {
    filter: (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={ICON_CLASSES}>
            <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
        </svg>
    ),
    level: (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={ICON_CLASSES}>
            <path d="M5 20v-6M10 20V8M15 20v-10M20 20V4" />
        </svg>
    ),
    category: (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className={ICON_CLASSES}>
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
        </svg>
    ),
};

const sortIcon = (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={ICON_CLASSES}>
        <path d="M4 7h16M6 12h12M9 17h6" />
    </svg>
);

export default function FilterBar({ showCategories = true }: { showCategories?: boolean }) {
    const [activeCategory, setActiveCategory] = useState(categories[0].id);

    return (
        <div>
            {/* --- FILTER & SORT PILLS --- */}
            <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4">
                <div className="flex flex-wrap items-center justify-center gap-4">
                    {filters.options.map((option) => (
                        <button key={option.id} type="button" className={PILL_CLASSES}>
                            {filterIcons[option.id]}
                            {option.label}
                        </button>
                    ))}
                </div>

                <button type="button" className={PILL_CLASSES}>
                    {sortIcon}
                    {filters.sortLabel}
                </button>
            </div>

            {/* --- CATEGORY CHIPS --- */}
            {showCategories && (
                <div className="mt-9 flex flex-wrap justify-center sm:justify-start gap-6">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            type="button"
                            onClick={() => setActiveCategory(category.id)}
                            className={`cursor-pointer rounded-full px-4 py-3.5 label-s transition-colors duration-200 ${activeCategory === category.id ? ACTIVE_CHIP_CLASSES : IDLE_CHIP_CLASSES
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
