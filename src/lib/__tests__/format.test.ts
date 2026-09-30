import { describe, expect, it } from 'vitest';
import { formatPrice } from '../format';
import { courseCardLabels } from '../../data/courses';

describe('formatPrice', () => {
    it('formats the amount with a dollar sign', () => {
        expect(formatPrice(25).amount).toBe('$25');
    });

    it('uses the shared price suffix label', () => {
        expect(formatPrice(25).suffix).toBe(courseCardLabels.priceSuffix);
    });

    it('handles zero and decimals without crashing', () => {
        expect(formatPrice(0).amount).toBe('$0');
        expect(formatPrice(19.99).amount).toBe('$19.99');
    });
});
