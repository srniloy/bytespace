export interface Testimonial {
    id: string;
    name: string;
    role: string;
    quote: string;
    avatar: string;
}

export interface TestimonialsData {
    heading: string;
    description: string;
    testimonials: Testimonial[];
}

export const testimonialsData: TestimonialsData = {
    heading: 'Discover What Our Community Is Saying',
    description:
        'At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.',
    testimonials: [
        {
            id: 'sarah-m',
            name: 'Sarah M.',
            role: 'Enthusiastic Learner',
            quote:
                '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
            avatar: '/images/user-image-1.png',
        },
        {
            id: 'james-l',
            name: 'James L.',
            role: 'Lifelong Learner',
            quote:
                '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
            avatar: '/images/user-image-2.png',
        },
        {
            id: 'alex-b',
            name: 'Alex B.',
            role: 'Inspired Creator',
            quote:
                '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
            avatar: '/images/user-image-3.png',
        },
    ],
};
