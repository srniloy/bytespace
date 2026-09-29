export interface TrustedLogo {
    id: number;
    name: string;
    iconSrc: string;
}

export interface TrustedByData {
    logos: TrustedLogo[];
}

export const trustedByData: TrustedByData = {
    logos: [
        { id: 1, name: 'Logoipsum', iconSrc: '/icons/trusted-by-icon-1.png' },
        { id: 2, name: 'Logoipsum', iconSrc: '/icons/trusted-by-icon-2.png' },
        { id: 3, name: 'Logoipsum', iconSrc: '/icons/trusted-by-icon-3.png' },
        { id: 4, name: 'Logoipsum', iconSrc: '/icons/trusted-by-icon-4.png' },
        { id: 5, name: 'Logoipsum', iconSrc: '/icons/trusted-by-icon-5.png' },
    ],
};
