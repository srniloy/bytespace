import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '../search-bar';

describe('SearchBar', () => {
    it('renders the placeholder and button label', () => {
        render(<SearchBar placeholder="Course, topic, creator" buttonLabel="Search" />);
        expect(screen.getByPlaceholderText('Course, topic, creator')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
    });

    it('calls onSearch with the typed query on submit', async () => {
        const user = userEvent.setup();
        const onSearch = vi.fn();
        render(<SearchBar placeholder="Search" buttonLabel="Search" onSearch={onSearch} />);
        await user.type(screen.getByPlaceholderText('Search'), 'figma');
        await user.click(screen.getByRole('button', { name: 'Search' }));
        expect(onSearch).toHaveBeenCalledWith('figma');
    });

    it('submits without reloading when no handler is attached', async () => {
        const user = userEvent.setup();
        render(<SearchBar placeholder="Search" buttonLabel="Courses" showChevron />);
        await user.click(screen.getByRole('button', { name: 'Courses' }));
        expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
    });
});
