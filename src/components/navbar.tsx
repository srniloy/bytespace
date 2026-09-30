import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { authLinks, centerLinks } from '../data/nav';
import { brandData } from '../data/brand';
import MobileMenu from './mobile-menu';

const { logo, cart } = brandData;

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const query = window.matchMedia('(min-width: 768px)');
        const close = () => query.matches && setMenuOpen(false);
        query.addEventListener('change', close);
        return () => query.removeEventListener('change', close);
    }, []);

    return (
        <>
            <nav className={`fixed inset-x-0 top-0 z-50 flex w-full items-center text-white transition-all duration-300 ${scrolled ? 'h-20 bg-persian-blue shadow-custom' : 'h-30 bg-transparent'}`}>

                <span
                    aria-hidden="true"
                    className={`absolute bottom-0 left-0 h-0.5 w-full origin-left bg-accent-lime transition-transform duration-500 ease-out ${scrolled ? 'scale-x-100' : 'scale-x-0'}`}
                />

                <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 md:px-8">
                    <NavLink to={logo.href} aria-label={logo.ariaLabel} className="w-40 cursor-pointer">
                        <img src={logo.src} alt={logo.alt} />
                    </NavLink>

                    <div className="hidden items-center gap-8 body-m text-blue-100 md:flex">
                        {centerLinks.map((link) => (
                            <NavLink
                                key={link.label}
                                to={link.href}
                                end={link.href === '/'}
                                className={({ isActive }) =>
                                    `relative py-1 transition-colors duration-200 hover:text-white ${isActive ? 'text-white label-m' : ''}`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 label-m text-blue-100 sm:gap-6">
                        <div className="hidden items-center gap-6 md:flex">
                            {authLinks.map((link) => (
                                <NavLink key={link.label} to={link.href} className="transition-colors duration-200 hover:text-white">
                                    {link.label}
                                </NavLink>
                            ))}
                        </div>

                        <button type="button" aria-label={cart.label} className={`flex cursor-pointer h-10 w-10 items-center justify-center rounded-lg transition-colors duration-200 hover:text-white ${focusRing}`}>
                            <img src={cart.icon} alt="" className="h-6 w-6" />
                        </button>

                        <button
                            id="mobile-menu-trigger"
                            type="button"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Menu"
                            aria-expanded={menuOpen}
                            aria-controls="mobile-menu"
                            className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg transition-colors hover:bg-white/10 md:hidden ${focusRing}`}
                        >
                            <span className={`h-0.5 w-6 rounded-full bg-white transition-transform duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
                            <span className={`h-0.5 w-6 rounded-full bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
                            <span className={`h-0.5 w-6 rounded-full bg-white transition-transform duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
                        </button>
                    </div>
                </div>
            </nav>

            <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={centerLinks} authLinks={authLinks} />
        </>
    );
}
