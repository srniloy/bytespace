interface FormFieldProps {
    label: string;
    name: string;
    type: string;
    placeholder?: string;
    autoComplete?: string;
}

export default function FormField({ label, name, type, placeholder, autoComplete }: FormFieldProps) {
    return (
        <label className="block">
            <span className="label-s text-text-main">{label}</span>
            <input
                type={type}
                name={name}
                required
                placeholder={placeholder}
                autoComplete={autoComplete}
                className="mt-1.5 w-full rounded-full border border-gray-200 bg-white px-5 py-3 body-m text-gray-800 outline-none transition-colors duration-200 focus:border-persian-blue"
            />
        </label>
    );
}
