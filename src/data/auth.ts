export interface AuthShowcaseData {
    heading: string;
    description: string;
}

export interface AuthData {
    register: AuthShowcaseData;
    signIn: AuthShowcaseData;
}

export const authData: AuthData = {
    register: {
        heading: 'Sign up and come in',
        description:
            'The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost',
    },
    signIn: {
        heading: 'Sign in with ease',
        description:
            'Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.',
    },
};
