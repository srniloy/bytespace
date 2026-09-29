import Button from "./button";

type SearchVariant = "hero" | "footer";

interface SearchBarProps {
    variant?: SearchVariant;
    type?: string;
    placeholder?: string;
    buttonLabel?: string;
    required?: boolean;
    className?: string;
}

const WRAPPER_CLASSES: Record<SearchVariant, string> = {
    hero: "justify-center max-w-2xl mx-auto mb-16 relative z-20",
    footer: "mb-4",
};

const BUTTON_CLASSES: Record<SearchVariant, string> = {
    hero: "",
    footer: "w-full sm:w-auto",
};

const BUTTON_SIZE: Record<SearchVariant, "lg" | "md"> = {
    hero: "lg",
    footer: "md",
};

export default function SearchBar({
    variant = "hero",
    type = "text",
    placeholder = "Course, topic, creator",
    buttonLabel = "Search",
    required,
    className = "",
}: SearchBarProps) {
    const isHero = variant === "hero";

    return (
        <form
            className={`flex flex-col sm:flex-row items-start w-full gap-3 ${WRAPPER_CLASSES[variant]} ${className}`}
            onSubmit={(e) => e.preventDefault()}
        >
            {isHero ? (
                <div className="flex items-center flex-1 bg-white rounded-full py-3 px-6 shadow-sm h-14">
                    <div className="flex items-center justify-center text-gray-400 mr-3">
                        <img src="/icons/search-icon.png" className="h-7 w-7 opacity-70" alt="Search" />
                    </div>

                    <input
                        type={type}
                        placeholder={placeholder}
                        required={required}
                        aria-label={buttonLabel}
                        className="flex-1 bg-transparent border-none outline-none text-gray-700 body-m placeholder-gray-400 placeholder:body-l h-full"
                    />
                </div>
            ) : (
                <input
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    aria-label={buttonLabel}
                    className="w-full sm:flex-1 px-5 py-3.5 rounded-full border border-gray-300 body-m text-gray-800 placeholder-gray-400 outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all duration-200"
                />
            )}

            <Button
                type="submit"
                size={BUTTON_SIZE[variant]}
                className={BUTTON_CLASSES[variant]}
            >
                {buttonLabel}
            </Button>
        </form>
    );
}
