export interface HeroData {
    headingLines: string[];
    description: string;
    search: {
        placeholder: string;
        buttonLabel: string;
    };
    personImage: {
        src: string;
        alt: string;
    };
    floatingCard: {
        title: string;
        subtitle: string;
    };
    learningProgress: number;
}
