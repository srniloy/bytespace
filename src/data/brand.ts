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

export const brandData: BrandData = {
    logo: {
        src: '/images/nav-logo.png',
        alt: 'ByteSpace',
        href: '/',
        ariaLabel: 'ByteSpace home',
    },
    cart: {
        label: 'Cart',
        icon: '/icons/cart-icon.png',
    },
};
