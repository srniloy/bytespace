import CreatorCard from './creator-card';
import { creators } from '../../data/creator-page';

export default function CreatorsGridSection() {
    return (
        <section className="w-full bg-white pt-20 pb-16 font-sans">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14">
                    {creators.map((creator) => (
                        <CreatorCard key={creator.id} creator={creator} />
                    ))}
                </div>

            </div>
        </section>
    );
}
