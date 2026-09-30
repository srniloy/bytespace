import { describe, expect, it } from 'vitest';
import { getPageCourses } from '../pagination';

const items = Array.from({ length: 45 }, (_, index) => `course-${index + 1}`);

describe('getPageCourses', () => {
    it('returns the first page slice by default', () => {
        const result = getPageCourses(items, 1, 9);
        expect(result.currentPage).toBe(1);
        expect(result.totalPages).toBe(5);
        expect(result.pageCourses).toHaveLength(9);
        expect(result.pageCourses[0]).toBe('course-1');
    });

    it('returns the last partial page', () => {
        const result = getPageCourses(items.slice(0, 20), 3, 9);
        expect(result.totalPages).toBe(3);
        expect(result.pageCourses).toHaveLength(2);
    });

    it('clamps out-of-range pages to the last page', () => {
        const result = getPageCourses(items, 999, 9);
        expect(result.currentPage).toBe(5);
        expect(result.pageCourses).toHaveLength(9);
    });

    it.each([0, -3, Number.NaN])('falls back to page 1 for invalid input %s', (page) => {
        const result = getPageCourses(items, page, 9);
        expect(result.currentPage).toBe(1);
        expect(result.pageCourses[0]).toBe('course-1');
    });

    it('floors fractional pages', () => {
        expect(getPageCourses(items, 2.9, 9).currentPage).toBe(2);
    });

    it('handles an empty list without crashing', () => {
        const result = getPageCourses([], 1, 9);
        expect(result.totalPages).toBe(1);
        expect(result.currentPage).toBe(1);
        expect(result.pageCourses).toEqual([]);
    });
});
