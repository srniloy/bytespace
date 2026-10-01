import { describe, expect, it, vi } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { useValidatedForm } from '../useValidatedForm';
import { required, validEmail } from '../../lib/validation';

const schema = {
    email: { label: 'Email', rules: [required('Email'), validEmail()] },
} as const;

describe('useValidatedForm', () => {
    it('shows nothing while typing, validates on blur', () => {
        const { result } = renderHook(() => useValidatedForm(schema, { email: '' }, vi.fn()));

        act(() => result.current.handleChange('email', 'nope'));
        expect(result.current.visibleError('email')).toBeUndefined();

        act(() => result.current.handleBlur('email'));
        expect(result.current.visibleError('email')).toBe('Enter a valid email address');
    });

    it('clears the error live once the value is fixed', () => {
        const { result } = renderHook(() => useValidatedForm(schema, { email: '' }, vi.fn()));

        act(() => result.current.handleBlur('email'));
        expect(result.current.visibleError('email')).toBe('Email is required');

        act(() => result.current.handleChange('email', 'a@b.co'));
        expect(result.current.visibleError('email')).toBeUndefined();
    });

    it('reveals all errors on submit and only submits when valid', () => {
        const onValidSubmit = vi.fn();
        const { result } = renderHook(() => useValidatedForm(schema, { email: '' }, onValidSubmit));

        act(() =>
            result.current.handleSubmit({ preventDefault: vi.fn() } as unknown as React.FormEvent<HTMLFormElement>),
        );
        expect(result.current.visibleError('email')).toBe('Email is required');
        expect(onValidSubmit).not.toHaveBeenCalled();

        act(() => result.current.handleChange('email', 'a@b.co'));
        act(() =>
            result.current.handleSubmit({ preventDefault: vi.fn() } as unknown as React.FormEvent<HTMLFormElement>),
        );
        expect(onValidSubmit).toHaveBeenCalledWith({ email: 'a@b.co' });
    });
});
