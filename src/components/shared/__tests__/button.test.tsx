import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../button';

describe('Button', () => {
    it('renders children', () => {
        render(<Button>Join Us</Button>);
        expect(screen.getByRole('button', { name: 'Join Us' })).toBeInTheDocument();
    });

    it('defaults to type="button" so it never submits a form by accident', () => {
        render(<Button>Save</Button>);
        expect(screen.getByRole('button', { name: 'Save' })).toHaveAttribute('type', 'button');
    });

    it('applies the blue variant class', () => {
        render(<Button variant="blue">Sign In</Button>);
        expect(screen.getByRole('button', { name: 'Sign In' })).toHaveClass('bg-persian-blue');
    });

    it('fires onClick when enabled', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();
        render(<Button onClick={onClick}>Go</Button>);
        await user.click(screen.getByRole('button', { name: 'Go' }));
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('does not fire onClick when disabled', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();
        render(
            <Button disabled onClick={onClick}>
                Go
            </Button>,
        );
        await user.click(screen.getByRole('button', { name: 'Go' }));
        expect(onClick).not.toHaveBeenCalled();
    });
});
