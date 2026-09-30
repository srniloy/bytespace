import { useEffect, useState } from 'react';
import type { PhotoProvider as PhotoProviderType, PhotoView as PhotoViewType } from 'react-photo-view';
import { courseDetailsData } from '../../data/course-details';

const { about } = courseDetailsData;

const HEADING_CLASSES = 'font-poppins text-2xl font-semibold text-gray-900';

type GalleryComponents = {
    PhotoProvider: typeof PhotoProviderType;
    PhotoView: typeof PhotoViewType;
};

// the 123KB lightbox loads after first paint and upgrades the identical grid;
// initial pixels never change, so LCP/CLS are untouched
function SneakPeekGallery() {
    const [gallery, setGallery] = useState<GalleryComponents | null>(null);

    useEffect(() => {
        let cancelled = false;
        Promise.all([import('react-photo-view'), import('react-photo-view/dist/react-photo-view.css')]).then(
            ([module]) => {
                if (!cancelled) setGallery({ PhotoProvider: module.PhotoProvider, PhotoView: module.PhotoView });
            },
        );
        return () => {
            cancelled = true;
        };
    }, []);

    const images = about.sneakPeakImages.map((image) => (
        <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            loading="lazy"
            decoding="async"
            className="h-32 w-full cursor-zoom-in rounded-xl object-cover"
        />
    ));

    if (!gallery) {
        return <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">{images}</div>;
    }

    const { PhotoProvider, PhotoView } = gallery;
    return (
        <PhotoProvider>
            <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
                {about.sneakPeakImages.map((image) => (
                    <PhotoView key={image.src} src={image.src}>
                        <img
                            src={image.src}
                            alt={image.alt}
                            loading="lazy"
                            decoding="async"
                            className="h-32 w-full cursor-zoom-in rounded-xl object-cover"
                        />
                    </PhotoView>
                ))}
            </div>
        </PhotoProvider>
    );
}

export default function CourseAboutPanel() {
    return (
        <div className="mt-10">
            <h2 className={HEADING_CLASSES}>{about.descriptionHeading}</h2>
            <div className="mt-6 space-y-6">
                {about.description.map((paragraph) => (
                    <p key={paragraph} className="body-m text-gray-600">{paragraph}</p>
                ))}
            </div>

            <h2 className={`mt-12 ${HEADING_CLASSES}`}>{about.sneakPeakHeading}</h2>
            <SneakPeekGallery />

            <h2 className={`mt-10 ${HEADING_CLASSES}`}>{about.keyPointsHeading}</h2>
            <ul className="mt-6 space-y-5">
                {about.keyPoints.map((point) => (
                    <li key={point} className="flex items-center gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-persian-blue">
                            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" />
                            </svg>
                        </span>
                        <span className="body-m text-gray-700">{point}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
