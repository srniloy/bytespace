import { Link } from 'react-router-dom';
import AuthScreen from '../components/auth/auth-screen';
import AuthFormCard from '../components/auth/auth-form-card';
import SocialLogin from '../components/auth/social-login';
import FormField from '../components/shared/form-field';
import { authData } from '../data/auth';
import usePageTitle from '../hooks/use-page-title';
import Button from '../components/shared/button';

export default function LoginPage() {
    usePageTitle('Sign In');

    return (
        <AuthScreen showcase={authData.signIn}>
            <AuthFormCard
                eyebrow="Sign In"
                title="Welcome Back"
                footer={
                    <p className="text-[15px] text-gray-500">
                        New user?{' '}
                        <Link to="/sign-up" className="font-medium text-persian-blue hover:underline">
                            Create an account
                        </Link>
                    </p>
                }
            >
                <form className="flex flex-col gap-5" onSubmit={(event) => event.preventDefault()}>
                    <FormField label="Email" name="email" type="email" placeholder="designer@example.com" autoComplete="email" />
                    <FormField label="Password" name="password" type="password" placeholder="••••••••" autoComplete="current-password" />

                    <div className="mt-4 flex justify-end">
                        <Button variant="lime" size="sm" type="submit">Sign In</Button>
                    </div>
                </form>

                <SocialLogin className="mt-20" />
            </AuthFormCard>
        </AuthScreen>
    );
}
