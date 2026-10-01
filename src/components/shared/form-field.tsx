import { cn } from '../../lib/cn';

interface FormFieldProps {
    label: string;
    name: string;
    type: string;
    value: string;
    onChange: (value: string) => void;
    onBlur?: () => void;
    error?: string;
    placeholder?: string;
    autoComplete?: string;
    required?: boolean;
}

export default function FormField({
    label,
    name,
    type,
    value,
    onChange,
    onBlur,
    error,
    placeholder,
    autoComplete,
    required = true,
}: FormFieldProps) {
    const errorId = `${name}-error`;

    return (
        <div className="block">
            <label htmlFor={name} className="label-s text-gray-700">
                {label}
            </label>
            <input
                id={name}
                type={type}
                name={name}
                value={value}
                onChange={(event) => onChange(event.target.value)}
                onBlur={onBlur}
                required={required}
                placeholder={placeholder}
                autoComplete={autoComplete}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? errorId : undefined}
                className={cn(
                    'mt-2 w-full rounded-xl border bg-white px-4 py-3.5 body-l text-gray-800 placeholder:text-gray-400 outline-none transition-all duration-200 focus:ring-1',
                    error
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                        : 'border-gray-200 focus:border-persian-blue focus:ring-persian-blue',
                )}
            />
            {error ? (
                <p id={errorId} role="alert" className="body-s mt-1.5 text-red-600">
                    {error}
                </p>
            ) : null}
        </div>
    );
}
