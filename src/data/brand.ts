import type { BrandData } from '../types/brand';

export type { BrandCart, BrandData, BrandLogo } from '../types/brand';

export const brandData: BrandData = {
    logo: {
        src: '/images/nav-logo.webp',
        alt: 'ByteSpace',
        href: '/',
        ariaLabel: 'ByteSpace home',
    },
    cart: {
        label: 'Cart',
        icon: '/icons/cart-icon.png',
    },
};
