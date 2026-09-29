export interface HappyUserCardData {
    title: string;
    rating: string;
    reviewCount: string;
    avatars: string[];
    badge: string;
}

export const happyUserCardData: HappyUserCardData = {
    title: 'Happy Students',
    rating: '4.5',
    reviewCount: '(240)',
    avatars: [
        '/images/user-image-1.png',
        '/images/user-image-2.png',
        '/images/user-image-3.png',
        '/images/user-image-4.png',
        '/images/user-image-1.png',
        '/images/user-image-3.png',
    ],
    badge: '2K+',
};
