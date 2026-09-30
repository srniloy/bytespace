import { cva, type VariantProps } from 'class-variance-authority';
import type { ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

export const buttonVariants = cva(
    'inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-persian-blue disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                lime: 'bg-accent-lime text-black hover:brightness-95',
                blue: 'bg-persian-blue text-white hover:opacity-90',
            },
            size: {
                sm: 'label-s px-6 py-2.5',
                md: 'label-m px-8 py-3.5',
                lg: 'label-l px-8 py-4',
            },
        },
        defaultVariants: {
            variant: 'lime',
            size: 'md',
        },
    },
);

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { }

export default function Button({ variant, size, type = 'button', className, ...rest }: ButtonProps) {
    return <button type={type} className={cn(buttonVariants({ variant, size }), className)} {...rest} />;
}
