import { Link } from 'react-router-dom';
import FormField from '../components/form-field';


// Dummy component for now, will update it later with appropiate design and content.

export default function LoginPage() {
    return (
        <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-custom sm:p-10">
            <h1 className="heading-s text-persian-blue">Welcome back</h1>
            <p className="body-m text-text-main mb-8 mt-2">Sign in to continue learning.</p>

            <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
                <FormField label="Email" name="email" type="email" placeholder="you@example.com" autoComplete="email" />
                <FormField label="Password" name="password" type="password" placeholder="••••••••" autoComplete="current-password" />

                <button
                    type="submit"
                    className="w-full rounded-full bg-persian-blue py-3.5 label-l text-white transition-colors duration-200 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-persian-blue"
                >
                    Sign In
                </button>
            </form>

            <p className="body-s text-text-main mt-6 text-center">
                Don&apos;t have an account?{' '}
                <Link to="/sign-up" className="label-l text-persian-blue hover:underline">
                    Join Us
                </Link>
            </p>
        </div>
    );
}
