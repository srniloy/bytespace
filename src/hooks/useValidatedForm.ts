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
    // show only after touch or submit, never while typing
    visibleError: (name: FieldName) => string | undefined;
    handleChange: (name: FieldName, value: string) => void;
    handleBlur: (name: FieldName) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

// typing stays silent, blur checks one field, submit checks all
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
            // re-check live only while an error is already showing
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
