import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CoursePagination from '../course-pagination';

function setup(currentPage: number, totalPages = 5) {
    const onPageChange = vi.fn();
    render(<CoursePagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />);
    return { onPageChange };
}

describe('CoursePagination', () => {
    it('marks the current page with aria-current', () => {
        setup(2);
        expect(screen.getByRole('button', { name: 'Page 2' })).toHaveAttribute('aria-current', 'page');
        expect(screen.getByRole('button', { name: 'Page 3' })).not.toHaveAttribute('aria-current');
    });

    it('requests the clicked page', async () => {
        const user = userEvent.setup();
        const { onPageChange } = setup(1);
        await user.click(screen.getByRole('button', { name: 'Page 3' }));
        expect(onPageChange).toHaveBeenCalledWith(3);
    });

    it('advances one page with the next button', async () => {
        const user = userEvent.setup();
        const { onPageChange } = setup(2);
        await user.click(screen.getByRole('button', { name: 'Next page' }));
        expect(onPageChange).toHaveBeenCalledWith(3);
    });

    it('clamps at the boundaries instead of going out of range', async () => {
        const user = userEvent.setup();
        const first = setup(1);
        await user.click(screen.getByRole('button', { name: 'Previous page' }));
        expect(first.onPageChange).toHaveBeenCalledWith(1);
        expect(first.onPageChange).not.toHaveBeenCalledWith(0);
    });
});
