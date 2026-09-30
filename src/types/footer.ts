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
