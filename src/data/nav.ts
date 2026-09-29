export interface NavLinkItem {
    label: string;
    href: string;
    variant?: 'primary';
}

export const centerLinks: NavLinkItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '/courses' },
    { label: 'Creators', href: '/creators' },
];

export const authLinks: NavLinkItem[] = [
    { label: 'Sign In', href: '/login' },
    { label: 'Join Us', href: '/sign-up', variant: 'primary' },
];
