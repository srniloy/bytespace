import { courseCardLabels } from '../data/courses';

export function formatPrice(price: number): { amount: string; suffix: string } {
    return {
        amount: `$${price}`,
        suffix: courseCardLabels.priceSuffix,
    };
}
