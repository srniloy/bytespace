import SearchBar from "../shared/search-bar";
import { coursesPageData } from "../../data/courses-page";

const { hero } = coursesPageData;

export default function CoursesHero() {
    return (
        <section
            style={{ backgroundImage: 'url(/layout-designs/hero-section-grid.webp)' }}
            className="relative overflow-hidden bg-persian-blue bg-cover pt-44 font-sans"
        >
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">

                <h1 className="text-3xl md:text-4xl heading-s text-white text-center mb-8">
                    {hero.heading}
                </h1>

                <SearchBar
                    variant="hero"
                    placeholder={hero.search.placeholder}
                    buttonLabel={hero.search.buttonLabel}
                    showChevron={hero.search.showChevron}
                />
            </div>
        </section>
    );
}
