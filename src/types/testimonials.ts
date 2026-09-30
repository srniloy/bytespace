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
