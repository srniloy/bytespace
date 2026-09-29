import { NavLink } from 'react-router-dom';
import { authLinks, centerLinks } from '../data/nav';

const footerLinks = [...centerLinks, ...authLinks];

// Dummy footer component for now, can be updated later with more content and styling

export default function Footer() {
    return (
        <footer className="border-t border-white/15 bg-persian-blue font-sans text-blue-100">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-10 sm:px-6 md:flex-row md:justify-between lg:px-8">
                <img src="/images/nav-logo.png" alt="ByteSpace" className="w-32" />

                <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 label-m" aria-label="Footer">
                    {footerLinks.map((link) => (
                        <NavLink
                            key={link.label}
                            to={link.href}
                            className="transition-colors duration-200 hover:text-white"
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                <p className="body-s">&copy; {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
            </div>
        </footer>
    );
}
