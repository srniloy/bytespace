import CreatorsHero from '../components/creator/creators-hero';
import CreatorsGridSection from '../components/creator/creators-grid-section';
import usePageTitle from '../hooks/use-page-title';

export default function CreatorsPage() {
    usePageTitle('Creators');
    return (
        <>
            <CreatorsHero />
            <CreatorsGridSection />
        </>
    );
}
