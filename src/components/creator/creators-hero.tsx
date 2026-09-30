import { creatorPageData } from '../../data/creator-page';

const { listing } = creatorPageData;

export default function CreatorsHero() {
    return (
        <section
            style={{ backgroundImage: 'url(/layout-designs/hero-section-grid.png)' }}
            className="relative overflow-hidden bg-persian-blue bg-cover pt-44 pb-16 font-sans"
        >
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">

                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-3xl md:text-4xl heading-s text-white">
                        {listing.heading}
                    </h1>
                    <p className="mt-6 body-l text-blue-100">
                        {listing.description}
                    </p>
                </div>

            </div>
        </section>
    );
}
