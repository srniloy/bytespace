export interface StatItem {
    value: string;
    label: string;
}

export interface GrowthSectionData {
    growth: {
        heading: string;
        description: string;
        stats: StatItem[];
    };
    creators: {
        heading: string;
        brand: string;
        description: string;
        features: string[];
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

export const growthSectionData: GrowthSectionData = {
    growth: {
        heading: 'Your Path to Professional Growth Starts Here!',
        description:
            'Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.',
        stats: [
            { value: '12K', label: 'Students' },
            { value: '70+', label: 'Courses' },
            { value: '16', label: 'Creators' },
        ],
    },
    creators: {
        heading: 'Create & Manage Courses Easily.',
        brand: 'ByteSpace',
        description:
            'supports individuals or entities in the creation, publication, and administration of educational courses.',
        features: [
            'Share Your Expertise',
            'Monetize Your Passion',
            'Flexibility and Autonomy',
            'Build a Community',
        ],
    },
    revenueCard: {
        title: 'Total Revenue',
        period: 'July 1-28',
        amount: '$120.29',
        progress: 65,
    },
    yearCard: {
        title: 'Year to Date',
        year: '2023',
        amount: '$1,200.38',
        badge: '+125',
    },
    learningProgress: 55,
};
