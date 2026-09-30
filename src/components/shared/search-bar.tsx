import Button from "./button";

type SearchVariant = "hero" | "footer";

interface SearchBarProps {
    variant?: SearchVariant;
    type?: string;
    placeholder: string;
    buttonLabel: string;
    showChevron?: boolean;
    required?: boolean;
    className?: string;
}

const WRAPPER_CLASSES: Record<SearchVariant, string> = {
    hero: "justify-center max-w-2xl mx-auto mb-16 relative z-20 gap-3",
    footer: "mb-8 gap-6",
};

const INPUT_WRAPPER_CLASSES: Record<SearchVariant, string> = {
    hero: "flex items-center w-full sm:flex-1 bg-white rounded-full py-3 px-6 shadow-sm h-14",
    footer: "",
};

const INPUT_CLASSES: Record<SearchVariant, string> = {
    hero: "flex-1 bg-transparent border-none outline-none text-gray-700 body-m placeholder-gray-400 placeholder:body-l h-full",
    footer: "w-full sm:flex-1 px-5 py-3.5 rounded-full border border-gray-300 body-m text-gray-800 placeholder-gray-400 outline-none focus:border-persian-blue focus:ring-1 focus:ring-persian-blue transition-all duration-200",
};

const BUTTON_CLASSES: Record<SearchVariant, string> = {
    hero: "w-full sm:w-auto",
    footer: "w-full sm:w-auto",
};

const BUTTON_SIZE: Record<SearchVariant, "lg" | "md"> = {
    hero: "lg",
    footer: "md",
};

export default function SearchBar({
    variant = "hero",
    type = "text",
    placeholder,
    buttonLabel,
    showChevron = false,
    required,
    className = "",
}: SearchBarProps) {
    return (
        <form
            className={`flex flex-col sm:flex-row items-start w-full ${WRAPPER_CLASSES[variant]} ${className}`}
            onSubmit={(e) => e.preventDefault()}
        >
            {variant === "footer" ? (
                <input
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    aria-label={buttonLabel}
                    className={INPUT_CLASSES.footer}
                />
            ) : (
                <div className={INPUT_WRAPPER_CLASSES[variant]}>
                    <div className="flex items-center justify-center text-gray-400 mr-3">
                        <img src="/icons/search-icon.png" className="h-7 w-7 opacity-70" alt="Search" />
                    </div>

                    <input
                        type={type}
                        placeholder={placeholder}
                        required={required}
                        aria-label={buttonLabel}
                        className={INPUT_CLASSES[variant]}
                    />
                </div>
            )}

            <Button
                type="submit"
                size={BUTTON_SIZE[variant]}
                className={BUTTON_CLASSES[variant]}
            >
                {buttonLabel}
                {showChevron && (
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 ml-1.5">
                        <path d="M6 9l6 6 6-6" />
                    </svg>
                )}
            </Button>
        </form>
    );
}
