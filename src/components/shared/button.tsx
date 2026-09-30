import type { VariantProps } from 'class-variance-authority';
import type { ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';
import { buttonVariants } from './button-variants';

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { }

export default function Button({ variant, size, type = 'button', className, ...rest }: ButtonProps) {
    return <button type={type} className={cn(buttonVariants({ variant, size }), className)} {...rest} />;
}
