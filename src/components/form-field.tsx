interface FormFieldProps {
    label: string;
    name: string;
    type: string;
    placeholder?: string;
    autoComplete?: string;
    required?: boolean;
}

export default function FormField({ label, name, type, placeholder, autoComplete, required = true }: FormFieldProps) {
    return (
        <label className="block">
            <span className="label-s text-gray-700">{label}</span>
            <input
                type={type}
                name={name}
                required={required}
                placeholder={placeholder}
                autoComplete={autoComplete}
                className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 body-l text-gray-800 placeholder:text-gray-400 outline-none transition-all duration-200 focus:border-persian-blue focus:ring-1 focus:ring-persian-blue"
            />
        </label>
    );
}
