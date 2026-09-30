export interface Creator {
    id: string;
    name: string;
    badge: string;
    role: string;
    avatar: {
        src: string;
        alt: string;
    };
    bio: string[];
    products: number;
    followers: number;
}

export interface CreatorCardLabels {
    productsSuffix: string;
    followersSuffix: string;
    viewLabel: string;
}

export interface CreatorPageData {
    listing: {
        heading: string;
        description: string;
    };
    cardLabels: CreatorCardLabels;
    followLabel: string;
}
