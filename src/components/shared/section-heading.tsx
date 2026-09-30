import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface SectionHeadingProps {
    title: string;
    description?: string;
    align?: 'center' | 'left';
    className?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    children?: ReactNode;
}

export default function SectionHeading({
    title,
    description,
    align = 'center',
    className,
    titleClassName,
    descriptionClassName,
}: SectionHeadingProps) {
    const centered = align === 'center';
    return (
        <div className={cn('max-w-3xl', centered ? 'mx-auto text-center' : 'text-left', className)}>
            <h2 className={cn('heading-m text-gray-900', titleClassName)}>{title}</h2>
            {description ? (
                <p className={cn('body-l mt-5 text-gray-600', descriptionClassName)}>{description}</p>
            ) : null}
        </div>
    );
}
