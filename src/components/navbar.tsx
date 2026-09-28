import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/nav-logo.png';
import cartIcon from '../assets/cart-icon.png';
import MobileMenu, { type NavLinkItem } from './mobile-menu';

const centerLinks: NavLinkItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '/courses' },
    { label: 'Creators', href: '/creators' },
];

const authLinks: NavLinkItem[] = [
    { label: 'Sign In', href: '#' },
    { label: 'Join Us', href: '#', variant: 'primary' },
];

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    // close the drawer when the viewport grows to desktop size
    useEffect(() => {
        const query = window.matchMedia('(min-width: 768px)');
        const close = () => query.matches && setMenuOpen(false);
        query.addEventListener('change', close);
        return () => query.removeEventListener('change', close);
    }, []);

    return (
        <>
            <nav className="relative z-40 flex h-30 w-full items-center justify-between px-8 font-sans text-white sm:px-16 lg:px-24 2xl:px-36">

                <NavLink to="/" aria-label="ByteSpace home" className="w-[160px] cursor-pointer">
                    <img src={logo} alt="ByteSpace" />
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
                            <a key={link.label} href={link.href} className="transition-colors duration-200 hover:text-white">
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <button type="button" aria-label="Cart" className={`flex cursor-pointer h-10 w-10 items-center justify-center rounded-lg transition-colors duration-200 hover:text-white ${focusRing}`}>
                        <img src={cartIcon} alt="" className="h-6 w-6" />
                    </button>

                    <button
                        id="mobile-menu-trigger"
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Menu"
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                        className={`flex h-10 w-10 flex-col items-center justify-center gap-[6px] rounded-lg transition-colors hover:bg-white/10 md:hidden ${focusRing}`}
                    >
                        <span className={`h-0.5 w-6 rounded-full bg-white transition-transform duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
                        <span className={`h-0.5 w-6 rounded-full bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
                        <span className={`h-0.5 w-6 rounded-full bg-white transition-transform duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
                    </button>
                </div>
            </nav>

            <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={centerLinks} authLinks={authLinks} />
        </>
    );
}
