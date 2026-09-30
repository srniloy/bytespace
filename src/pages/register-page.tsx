import { Link } from 'react-router-dom';
import AuthScreen from '../components/auth/auth-screen';
import AuthFormCard from '../components/auth/auth-form-card';
import FormField from '../components/form-field';
import Button from '../components/button';
import { authData } from '../data/auth';
import usePageTitle from '../hooks/use-page-title';

export default function RegisterPage() {
    usePageTitle('Sign Up');

    return (
        <AuthScreen showcase={authData.register}>
            <AuthFormCard
                eyebrow="Create an Account"
                title={<>Welcome to <br /> ByteSpace</>}
                footer={
                    <p className="text-[15px] text-gray-500">
                        Already have an account?{' '}
                        <Link to="/login" className="font-medium text-persian-blue hover:underline">Login</Link>
                    </p>
                }
            >
                <form className="flex flex-col gap-5" onSubmit={(event) => event.preventDefault()}>
                    <FormField label="Full Name" name="fullName" type="text" placeholder="Jamie Davis" autoComplete="name" />
                    <FormField label="Email" name="email" type="email" placeholder="designer@example.com" autoComplete="email" />
                    <FormField label="Password" name="password" type="password" placeholder="••••••••" autoComplete="new-password" />

                    <div className="mt-4 flex justify-end">
                        <Button variant="lime" size="sm" type="submit">Continue</Button>
                    </div>
                </form>
            </AuthFormCard>
        </AuthScreen>
    );
}
