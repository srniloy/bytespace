import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import type { NavLinkItem } from '../../types/nav';
import { brandData } from '../../data/brand';

const { logo, cart } = brandData;

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';

export default function MobileMenu({
    open,
    onClose,
    links,
    authLinks,
}: {
    open: boolean;
    onClose: () => void;
    links: NavLinkItem[];
    authLinks: NavLinkItem[];
}) {
    useEffect(() => {
        if (!open) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', onKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('keydown', onKeyDown);
            document.getElementById('mobile-menu-trigger')?.focus();
        };
    }, [open, onClose]);

    return (
        <div
            id="mobile-menu"
            inert={!open}
            aria-hidden={!open}
            className={`fixed inset-0 z-50 md:hidden ${open ? '' : 'pointer-events-none'}`}
        >
            <div
                onClick={onClose}
                className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
            />

            <aside
                style={{ backgroundImage: 'url(/layout-designs/hero-section-grid.webp)' }}
                className={`absolute left-0 top-0 flex h-full w-[86%] max-w-sm flex-col border-r border-white/15 bg-persian-blue shadow-custom transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <header className="flex h-30 shrink-0 items-center justify-between border-b border-white/15 px-6">
                    <img src={logo.src} alt={logo.alt} width={342} height={74} className="h-auto w-37.5" />
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close menu"
                        className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10 ${focusRing}`}
                    >
                        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5">
                            <path d="M6 6l12 12M18 6L6 18" />
                        </svg>
                    </button>
                </header>

                <nav className="flex-1 overflow-y-auto py-4" aria-label="Primary">
                    {links.map((link) => (
                        <NavLink
                            key={link.label}
                            to={link.href}
                            end={link.href === '/'}
                            onClick={onClose}
                            className={({ isActive }) =>
                                `group relative block px-6 py-4 label-l transition-colors duration-200 ${focusRing} ${isActive
                                    ? 'bg-white/10 text-white'
                                    : 'text-blue-100 hover:bg-white/5 hover:text-white'
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <span
                                        aria-hidden="true"
                                        className={`absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-accent-lime transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0'}`}
                                    />
                                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                                        {link.label}
                                    </span>
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>

                <div className="shrink-0 space-y-3 border-t border-white/15 px-6 py-6">
                    <button
                        type="button"
                        onClick={onClose}
                        className={`flex w-full items-center justify-between rounded-full border border-white/20 px-5 py-3 label-l text-blue-100 transition-colors duration-200 hover:border-white/40 hover:text-white ${focusRing}`}
                    >
                        <span>{cart.label}</span>
                        <img src={cart.icon} alt="" className="h-5 w-5" />
                    </button>

                    {authLinks.map((link) => {
                        const primary = link.variant === 'primary';
                        return (
                            <NavLink
                                key={link.label}
                                to={link.href}
                                onClick={onClose}
                                className={`block text-center label-l transition-colors duration-200 ${focusRing} ${primary
                                    ? 'rounded-full bg-white py-3.5 text-persian-blue hover:bg-accent-lime'
                                    : 'py-1 text-blue-100 hover:text-white'
                                    }`}
                            >
                                {link.label}
                            </NavLink>
                        );
                    })}
                </div>
            </aside>
        </div>
    );
}
