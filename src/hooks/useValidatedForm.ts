import { useCallback, useState } from 'react';
import {
    hasErrors,
    validateField,
    validateForm,
    type FormErrors,
    type FormSchema,
} from '../lib/validation';

export interface ValidatedForm<FieldName extends string> {
    values: Record<FieldName, string>;
    errors: FormErrors<FieldName>;
    /** Error to display: only after the field was touched or the form submitted. */
    visibleError: (name: FieldName) => string | undefined;
    handleChange: (name: FieldName, value: string) => void;
    handleBlur: (name: FieldName) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

/**
 * Schema-driven form state. UX contract:
 * - Typing never shows errors (no shouting while the user types).
 * - Blur validates that field (immediate, contextual feedback).
 * - Submit validates everything and reveals all errors at once.
 * - Fixing a shown error clears it live.
 */
export function useValidatedForm<FieldName extends string>(
    schema: FormSchema<FieldName>,
    initialValues: Record<FieldName, string>,
    onValidSubmit: (values: Record<FieldName, string>) => void,
): ValidatedForm<FieldName> {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState<FormErrors<FieldName>>({});
    const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = useCallback(
        (name: FieldName, value: string) => {
            setValues((previous) => ({ ...previous, [name]: value }));
            // Re-validate live only once an error is already visible for this field.
            if (touched[name] || submitted) {
                const error = validateField(schema[name], value);
                setErrors((previous) => {
                    const next = { ...previous };
                    if (error) next[name] = error;
                    else delete next[name];
                    return next;
                });
            }
        },
        [schema, submitted, touched],
    );

    const handleBlur = useCallback(
        (name: FieldName) => {
            setTouched((previous) => ({ ...previous, [name]: true }));
            const error = validateField(schema[name], values[name] ?? '');
            setErrors((previous) => {
                const next = { ...previous };
                if (error) next[name] = error;
                else delete next[name];
                return next;
            });
        },
        [schema, values],
    );

    const handleSubmit = useCallback(
        (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            setSubmitted(true);
            const nextErrors = validateForm(schema, values);
            setErrors(nextErrors);
            if (!hasErrors(nextErrors)) onValidSubmit(values);
        },
        [onValidSubmit, schema, values],
    );

    const visibleError = useCallback(
        (name: FieldName) => (touched[name] || submitted ? errors[name] : undefined),
        [errors, submitted, touched],
    );

    return { values, errors, visibleError, handleChange, handleBlur, handleSubmit };
}
