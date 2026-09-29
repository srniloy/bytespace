export interface FooterLink {
    label: string;
    href: string;
}

export interface FooterLinkColumn {
    id: string;
    links: FooterLink[];
}

export interface FooterData {
    logo: {
        src: string;
        alt: string;
        href: string;
        ariaLabel: string;
    };
    newsletter: {
        text: string;
        disclaimer: string;
        searchPlaceholder: string;
        searchButtonLabel: string;
    };
    linkColumns: FooterLinkColumn[];
    legalLinks: FooterLink[];
    copyright: {
        brand: string;
        rights: string;
    };
}

export const footerData: FooterData = {
    logo: {
        src: '/images/footer-logo.png',
        alt: 'ByteSpace',
        href: '/',
        ariaLabel: 'ByteSpace home',
    },
    newsletter: {
        text: 'Stay Up to date with our latest features and releases by joining our newsletter.',
        disclaimer: 'By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.',
        searchPlaceholder: 'Enter your email',
        searchButtonLabel: 'Search',
    },
    linkColumns: [
        {
            id: 'col-1',
            links: [
                { label: 'Featured Courses', href: '#' },
                { label: 'Featured Categories', href: '#' },
                { label: 'Business', href: '#' },
                { label: 'IT', href: '#' },
                { label: 'Design', href: '#' },
            ],
        },
        {
            id: 'col-2',
            links: [
                { label: 'Development', href: '#' },
                { label: 'Marketing', href: '#' },
                { label: 'Photography', href: '#' },
                { label: 'Finance', href: '#' },
                { label: 'Sport', href: '#' },
            ],
        },
        {
            id: 'col-3',
            links: [
                { label: 'Become a Creator', href: '#' },
                { label: 'Affiliate Program', href: '#' },
                { label: 'Contact', href: '#' },
                { label: 'Help', href: '#' },
                { label: 'About', href: '#' },
            ],
        },
    ],
    legalLinks: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookies Settings', href: '#' },
    ],
    copyright: {
        brand: 'ByteSpace',
        rights: 'All rights reserved.',
    },
};
