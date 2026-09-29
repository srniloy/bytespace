import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "lime" | "blue";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children?: ReactNode;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
    lime: "bg-[#CCFF00] hover:bg-[#b3e600] text-black",
    blue: "bg-persian-blue hover:opacity-90 text-white",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
    sm: "py-2.5 px-6 label-s",
    md: "py-3.5 px-8 label-m",
    lg: "py-4 px-8 label-l",
};

export default function Button({
    variant = "lime",
    size = "md",
    type = "button",
    className = "",
    children,
    ...rest
}: ButtonProps) {
    return (
        <button
            type={type}
            className={`inline-flex items-center justify-center font-medium rounded-full transition-colors duration-200 shrink-0 cursor-pointer ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
}
