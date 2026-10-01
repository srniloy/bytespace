import { Link } from 'react-router-dom';
import AuthScreen from '../components/auth/auth-screen';
import AuthFormCard from '../components/auth/auth-form-card';
import SocialLogin from '../components/auth/social-login';
import FormField from '../components/shared/form-field';
import { authData } from '../data/auth';
import { required, validEmail, type FormSchema } from '../lib/validation';
import { useValidatedForm } from '../hooks/useValidatedForm';
import usePageTitle from '../hooks/use-page-title';
import Button from '../components/shared/button';

type LoginField = 'email' | 'password';

const loginSchema: FormSchema<LoginField> = {
    email: { label: 'Email', rules: [required('Email'), validEmail()] },
    password: { label: 'Password', rules: [required('Password')] },
};

export default function LoginPage() {
    usePageTitle('Sign In');

    const form = useValidatedForm(loginSchema, { email: '', password: '' }, () => {
        // api call to log in the user would go here.
    });

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
                <form className="flex flex-col gap-5" onSubmit={form.handleSubmit} noValidate>
                    <FormField
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="designer@example.com"
                        autoComplete="email"
                        value={form.values.email}
                        onChange={(value) => form.handleChange('email', value)}
                        onBlur={() => form.handleBlur('email')}
                        error={form.visibleError('email')}
                    />
                    <FormField
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        autoComplete="current-password"
                        value={form.values.password}
                        onChange={(value) => form.handleChange('password', value)}
                        onBlur={() => form.handleBlur('password')}
                        error={form.visibleError('password')}
                    />

                    <div className="mt-4 flex justify-end">
                        <Button variant="lime" size="sm" type="submit">Sign In</Button>
                    </div>
                </form>

                <SocialLogin className="mt-10" />
            </AuthFormCard>
        </AuthScreen>
    );
}
