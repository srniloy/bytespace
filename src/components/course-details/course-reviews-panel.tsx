import { useState } from 'react';
import { courseDetailsData } from '../../data/course-details';

const { reviewsPanel } = courseDetailsData;

const HEADING_CLASSES = 'font-poppins text-2xl font-semibold text-gray-900';

const FIVE_STARS = [0, 1, 2, 3, 4];

export default function CourseReviewsPanel() {
    const [ratingFilter, setRatingFilter] = useState('all');

    const filteredReviews =
        ratingFilter === 'all'
            ? reviewsPanel.items
            : reviewsPanel.items.filter((review) => review.rating === Number(ratingFilter));

    return (
        <div className="mt-10">
            <h2 className={HEADING_CLASSES}>{reviewsPanel.heading}</h2>
            <p className="mt-6 body-m text-gray-600">{reviewsPanel.intro}</p>

            <div className="mt-8 flex flex-col gap-6 rounded-2xl border border-gray-200 p-6 sm:flex-row sm:p-10">
                <div className="flex h-28 w-full shrink-0 flex-col items-center justify-center rounded-xl bg-accent-lime sm:h-[140px] sm:w-32">
                    <span className="font-poppins text-base font-bold text-gray-900">{reviewsPanel.summary.label}</span>
                    <span className="mt-2 font-poppins text-5xl font-bold text-gray-900">{reviewsPanel.summary.rating}</span>
                </div>
                <div className="min-w-0 flex-1 space-y-1.5">
                    {reviewsPanel.summary.rows.map((row) => (
                        <div key={row.stars} className="flex items-center">
                            <span className="flex shrink-0 gap-1 text-lg leading-none text-gray-900 sm:gap-1.5 sm:text-xl" aria-hidden="true">
                                {FIVE_STARS.map((star) => (
                                    <span key={star}>★</span>
                                ))}
                            </span>
                            <span className="sr-only">{row.stars} stars</span>
                            <div className="mx-4 h-2 min-w-8 flex-1 rounded-full bg-gray-200 sm:mx-5">
                                <div className="h-2 rounded-full bg-accent-lime" style={{ width: `${row.percentage}%` }} />
                            </div>
                            <span className="w-10 shrink-0 text-right font-satoshi text-base text-gray-700">{row.count}</span>
                        </div>
                    ))}
                </div>
            </div>

            <h3 className={`mt-10 ${HEADING_CLASSES}`}>{reviewsPanel.listHeading}</h3>
            <div className="mt-6 flex flex-wrap gap-4">
                {reviewsPanel.filters.map((filter) => (
                    <button
                        key={filter.id}
                        type="button"
                        onClick={() => setRatingFilter(filter.id)}
                        className={`cursor-pointer rounded-full px-4 py-3.5 label-s transition-colors duration-200 ${
                            ratingFilter === filter.id
                                ? 'bg-accent-lime text-gray-900'
                                : 'bg-[#F4F5F6] text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                        {filter.id !== 'all' && <span className="mr-1 text-sm" aria-hidden="true">★</span>}
                        {filter.label}
                    </button>
                ))}
            </div>

            <ul className="mt-8 space-y-8">
                {filteredReviews.map((review) => (
                    <li key={review.name} className="rounded-2xl border border-gray-200 p-8">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <img src={review.avatar} alt={review.name} className="h-12 w-12 shrink-0 rounded-full object-cover" />
                                <div>
                                    <p className="font-satoshi text-base font-semibold text-gray-900">{review.name}</p>
                                    <p className="body-s text-gray-500">{review.role}</p>
                                </div>
                            </div>
                            <span className="body-s shrink-0 text-gray-500">{review.timeAgo}</span>
                        </div>
                        <div className="mt-10 flex gap-1 text-lg leading-none text-gray-900" aria-label={`${review.rating} out of 5 stars`}>
                            {FIVE_STARS.map((star) => (
                                <span key={star} aria-hidden="true">★</span>
                            ))}
                        </div>
                        <p className="mt-6 body-s text-gray-600">"{review.text}"</p>
                    </li>
                ))}
            </ul>
            {filteredReviews.length === 0 && (
                <p className="mt-8 body-s text-gray-500">No reviews match this rating.</p>
            )}
        </div>
    );
}
