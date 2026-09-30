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

export const creatorPageData: CreatorPageData = {
    listing: {
        heading: 'Discover Our Creators',
        description:
            'Meet the talented instructors behind ByteSpace courses. Explore their profiles, browse their portfolios, and discover everything they teach.',
    },
    cardLabels: {
        productsSuffix: ' Products',
        followersSuffix: ' Followers',
        viewLabel: 'View Profile',
    },
    followLabel: 'Follow',
};

export const creators: Creator[] = [
    {
        id: 'purepearl-studio',
        name: 'PurePearl Studio',
        badge: 'Creator',
        role: 'Passionate UI/UX, Web designer',
        avatar: {
            src: '/images/user-image-1.png',
            alt: 'PurePearl Studio',
        },
        bio: [
            "Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
            'Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.',
        ],
        products: 3,
        followers: 12,
    },
    {
        id: 'albert-flores',
        name: 'Albert Flores',
        badge: 'Creator',
        role: 'Senior Product Designer, Mentor',
        avatar: {
            src: '/images/user-image-4.png',
            alt: 'Albert Flores',
        },
        bio: [
            'Design has been my language for over a decade. In my courses I break down complex product thinking into simple, practical steps that anyone can apply from day one.',
            'From wireframes to polished interfaces, every lesson is built around real projects. Join me and turn curiosity into craft, one screen at a time.',
        ],
        products: 5,
        followers: 48,
    },
    {
        id: 'cody-fisher',
        name: 'Cody Fisher',
        badge: 'Creator',
        role: 'Motion Designer, Creative Director',
        avatar: {
            src: '/images/user-image-2.png',
            alt: 'Cody Fisher',
        },
        bio: [
            'I believe motion is where brands come alive. My lessons blend storytelling, timing, and technique so your animations feel intentional, not decorative.',
            'Expect hands-on breakdowns, project files, and honest feedback loops. Let us make things move together!',
        ],
        products: 4,
        followers: 31,
    },
    {
        id: 'brooklyn-simons',
        name: 'Brooklyn Simons',
        badge: 'Creator',
        role: 'Data Visualization Expert, Educator',
        avatar: {
            src: '/images/user-image-3.png',
            alt: 'Brooklyn Simons',
        },
        bio: [
            'Numbers tell stories when you let them. I teach the art of turning messy datasets into clear, persuasive visuals that decision makers actually enjoy reading.',
            'My courses cover the full journey from raw spreadsheets to interactive dashboards, with practical exercises at every step.',
        ],
        products: 6,
        followers: 57,
    },
    {
        id: 'sarah-mitchell',
        name: 'Sarah Mitchell',
        badge: 'Creator',
        role: 'Brand Strategist, Illustrator',
        avatar: {
            src: '/images/user-image-1.png',
            alt: 'Sarah Mitchell',
        },
        bio: [
            'A brand is a promise repeated well. I help creators find their voice, build systems around it, and illustrate it with work that feels unmistakably theirs.',
            'Every course is a guided sprint from blank page to living brand kit, complete with templates you can reuse forever.',
        ],
        products: 2,
        followers: 19,
    },
    {
        id: 'ralph-edwards',
        name: 'Ralph Edwards',
        badge: 'Creator',
        role: 'Frontend Engineer, Educator',
        avatar: {
            src: '/images/user-image-2.png',
            alt: 'Ralph Edwards',
        },
        bio: [
            'I turn design files into fast, accessible interfaces. My lessons focus on the details that separate a decent build from a delightful one.',
            'Follow along as we ship responsive layouts, reusable components, and the small polish that users may never notice but always feel.',
        ],
        products: 7,
        followers: 64,
    },
];

export const getCreatorLink = (name: string): string => {
    const match = creators.find(
        (creator) => creator.name.toLowerCase() === name.trim().toLowerCase(),
    );
    return `/creators/${match?.id ?? creators[0].id}`;
};
