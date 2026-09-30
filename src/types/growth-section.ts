export interface StatItem {
    value: string;
    label: string;
}

export interface GrowthSectionData {
    growth: {
        heading: string;
        description: string;
        stats: StatItem[];
        image: {
            src: string;
            alt: string;
        };
    };
    creators: {
        heading: string;
        brand: string;
        description: string;
        features: string[];
        image: {
            src: string;
            alt: string;
        };
    };
    revenueCard: {
        title: string;
        period: string;
        amount: string;
        progress: number;
    };
    yearCard: {
        title: string;
        year: string;
        amount: string;
        badge: string;
    };
    learningProgress: number;
}
