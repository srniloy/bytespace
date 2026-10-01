import { describe, expect, it } from 'vitest';
import {
    minLength,
    required,
    validateField,
    validateForm,
    validEmail,
    validFullName,
} from '../validation';

describe('required', () => {
    it('rejects empty and whitespace-only values', () => {
        expect(required('Email')('')).toBe('Email is required');
        expect(required('Email')('   ')).toBe('Email is required');
    });

    it('passes non-empty values', () => {
        expect(required('Email')('a@b.co')).toBeUndefined();
    });
});

describe('validEmail', () => {
    it.each(['plain', 'a@b', 'a@b.', '@b.co', 'a b@c.co'])('rejects %s', (value) => {
        expect(validEmail()(value)).toBe('Enter a valid email address');
    });

    it.each(['a@b.co', 'jamie.davis+1@example.com'])('accepts %s', (value) => {
        expect(validEmail()(value)).toBeUndefined();
    });

    it('stays silent on empty so required() owns that message', () => {
        expect(validEmail()('')).toBeUndefined();
    });
});

describe('minLength', () => {
    it('rejects short values with the limit in the message', () => {
        expect(minLength('Password', 8)('1234567')).toBe('Password must be at least 8 characters');
    });

    it('passes values at or above the limit', () => {
        expect(minLength('Password', 8)('12345678')).toBeUndefined();
    });
});

describe('validFullName', () => {
    it('rejects single characters and non-name input', () => {
        expect(validFullName('Full name')('J')).toBe('Full name must be at least 2 characters');
        expect(validFullName('Full name')('J4mie!')).toContain('only contain letters');
    });

    it.each(['Jamie Davis', "O'Brien", 'Anne-Marie'])('accepts %s', (value) => {
        expect(validFullName('Full name')(value)).toBeUndefined();
    });
});

describe('validateField / validateForm', () => {
    const schema = {
        email: { label: 'Email', rules: [required('Email'), validEmail()] },
        password: { label: 'Password', rules: [required('Password'), minLength('Password', 8)] },
    } as const;

    it('returns the first failing rule per field', () => {
        expect(validateField(schema.email, '')).toBe('Email is required');
        expect(validateField(schema.email, 'nope')).toBe('Enter a valid email address');
    });

    it('collects one error per invalid field and skips valid ones', () => {
        const errors = validateForm(schema, { email: 'a@b.co', password: 'short' });
        expect(errors).toEqual({ password: 'Password must be at least 8 characters' });
    });

    it('returns no errors for a valid form', () => {
        expect(validateForm(schema, { email: 'a@b.co', password: 'longenough' })).toEqual({});
    });
});
