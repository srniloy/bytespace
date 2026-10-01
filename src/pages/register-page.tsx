import { Link } from 'react-router-dom';
import AuthScreen from '../components/auth/auth-screen';
import AuthFormCard from '../components/auth/auth-form-card';
import FormField from '../components/shared/form-field';
import { authData } from '../data/auth';
import { minLength, required, validEmail, validFullName, type FormSchema } from '../lib/validation';
import { useValidatedForm } from '../hooks/useValidatedForm';
import usePageTitle from '../hooks/use-page-title';
import Button from '../components/shared/button';

type RegisterField = 'fullName' | 'email' | 'password';

const registerSchema: FormSchema<RegisterField> = {
    fullName: { label: 'Full name', rules: [required('Full name'), validFullName('Full name')] },
    email: { label: 'Email', rules: [required('Email'), validEmail()] },
    password: { label: 'Password', rules: [required('Password'), minLength('Password', 8)] },
};

export default function RegisterPage() {
    usePageTitle('Sign Up');

    const form = useValidatedForm(registerSchema, { fullName: '', email: '', password: '' }, () => {
        // api call to register the user would go here.
    });

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
                <form className="flex flex-col gap-5" onSubmit={form.handleSubmit} noValidate>
                    <FormField
                        label="Full Name"
                        name="fullName"
                        type="text"
                        placeholder="Jamie Davis"
                        autoComplete="name"
                        value={form.values.fullName}
                        onChange={(value) => form.handleChange('fullName', value)}
                        onBlur={() => form.handleBlur('fullName')}
                        error={form.visibleError('fullName')}
                    />
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
                        autoComplete="new-password"
                        value={form.values.password}
                        onChange={(value) => form.handleChange('password', value)}
                        onBlur={() => form.handleBlur('password')}
                        error={form.visibleError('password')}
                    />

                    <div className="mt-4 flex justify-end">
                        <Button variant="lime" size="sm" type="submit">Continue</Button>
                    </div>
                </form>
            </AuthFormCard>
        </AuthScreen>
    );
}
