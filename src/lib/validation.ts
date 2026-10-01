
export type ValidationRule = (value: string) => string | undefined;

export interface FieldSchema {
    label: string;
    rules: readonly ValidationRule[];
}

export type FormSchema<FieldName extends string> = Record<FieldName, FieldSchema>;

export type FormErrors<FieldName extends string> = Partial<Record<FieldName, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const NAME_PATTERN = /^[A-Za-z][A-Za-z.'\- ]*$/;

export const required =
    (label: string): ValidationRule =>
        (value) =>
            value.trim() === '' ? `${label} is required` : undefined;

export const minLength =
    (label: string, min: number): ValidationRule =>
        (value) =>
            value.trim() !== '' && value.length < min
                ? `${label} must be at least ${min} characters`
                : undefined;

export const validEmail = (): ValidationRule => (value) =>
    value.trim() !== '' && !EMAIL_PATTERN.test(value.trim()) ? 'Enter a valid email address' : undefined;

export const validFullName =
    (label: string): ValidationRule =>
        (value) => {
            const trimmed = value.trim();
            if (trimmed === '') return undefined;
            if (trimmed.length < 2) return `${label} must be at least 2 characters`;
            return NAME_PATTERN.test(trimmed) ? undefined : `${label} can only contain letters, spaces, and hyphens`;
        };

export function validateField(schema: FieldSchema, value: string): string | undefined {
    for (const rule of schema.rules) {
        const error = rule(value);
        if (error) return error;
    }
    return undefined;
}

export function validateForm<FieldName extends string>(
    schema: FormSchema<FieldName>,
    values: Record<FieldName, string>,
): FormErrors<FieldName> {
    const errors: FormErrors<FieldName> = {};
    (Object.keys(schema) as FieldName[]).forEach((name) => {
        const error = validateField(schema[name], values[name] ?? '');
        if (error) errors[name] = error;
    });
    return errors;
}

export function hasErrors<FieldName extends string>(errors: FormErrors<FieldName>): boolean {
    return Object.keys(errors).length > 0;
}
