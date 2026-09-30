import { Link } from 'react-router-dom';
import Button from '../components/button';
import usePageTitle from '../hooks/use-page-title';

export default function NotFoundPage() {
    usePageTitle('Page Not Found');

    return (
        <section
            style={{ backgroundImage: 'url(/layout-designs/hero-section-grid.png)' }}
            className="relative overflow-hidden bg-persian-blue bg-cover pt-44 pb-28 font-sans"
        >
            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-8 text-center">

                <img src="/images/404.png" alt="404" className="mx-auto w-full max-w-4xl" />

                <h1 className="mx-auto -mt-4 heading-l text-white">
                    The page you are looking <br className="hidden sm:block" />for doesn&apos;t exist
                </h1>

                <p className="mt-10 body-m text-blue-100">
                    Try to use a correct url or go back to homepage to start again
                </p>

                <div className="mt-10 flex justify-center">
                    <Link to="/">
                        <Button variant="lime" size="md" className="px-6">Back to Home</Button>
                    </Link>
                </div>

            </div>
        </section>
    );
}
