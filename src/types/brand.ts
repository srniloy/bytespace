export interface BrandLogo {
    src: string;
    alt: string;
    href: string;
    ariaLabel: string;
}

export interface BrandCart {
    label: string;
    icon: string;
}

export interface BrandData {
    logo: BrandLogo;
    cart: BrandCart;
}
