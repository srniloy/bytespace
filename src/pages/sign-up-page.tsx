import { Link } from 'react-router-dom';
import FormField from '../components/form-field';



// Dummy component for now, will update it later with appropiate design and content.



export default function SignUpPage() {
    return (
        <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-custom sm:p-10">
            <h1 className="heading-s text-persian-blue">Create your account</h1>
            <p className="body-m text-text-main mb-8 mt-2">Join ByteSpace and start learning today.</p>

            <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
                <FormField label="Full name" name="name" type="text" placeholder="John Doe" autoComplete="name" />
                <FormField label="Email" name="email" type="email" placeholder="you@example.com" autoComplete="email" />
                <FormField label="Password" name="password" type="password" placeholder="••••••••" autoComplete="new-password" />

                <button
                    type="submit"
                    className="w-full rounded-full bg-persian-blue py-3.5 label-l text-white transition-colors duration-200 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-persian-blue"
                >
                    Create Account
                </button>
            </form>

            <p className="body-s text-text-main mt-6 text-center">
                Already have an account?{' '}
                <Link to="/login" className="label-l text-persian-blue hover:underline">
                    Sign In
                </Link>
            </p>
        </div>
    );
}
