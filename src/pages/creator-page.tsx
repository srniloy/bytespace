import { useParams } from 'react-router-dom';
import CreatorHero from '../components/creator/creator-hero';
import CreatorProductsSection from '../components/creator/creator-products-section';
import { creators } from '../data/creator-page';

export default function CreatorPage() {
    const { id } = useParams();
    const creator = creators.find((item) => item.id === id) ?? creators[0];

    return (
        <>
            <CreatorHero creator={creator} />
            <CreatorProductsSection />
        </>
    );
}
