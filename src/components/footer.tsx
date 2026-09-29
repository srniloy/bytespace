import { NavLink } from "react-router-dom";
import SearchBar from "./search-bar";
import { footerData } from "../data/footer";

const { logo, newsletter, linkColumns, legalLinks, copyright } = footerData;

export default function Footer() {
    return (
        <footer className="w-full bg-white pt-20 pb-8 px-6 lg:px-12 font-sans border-t border-gray-100">
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-12">

                        <div className="flex items-center gap-2 mb-6">
                            <NavLink to={logo.href} aria-label={logo.ariaLabel} className="w-40 cursor-pointer">
                                <img src={logo.src} alt={logo.alt} />
                            </NavLink>
                        </div>
                        <p className="text-gray-600 body-s mb-6">
                            {newsletter.text}
                        </p>

                        <SearchBar
                            variant="footer"
                            type="email"
                            placeholder={newsletter.searchPlaceholder}
                            buttonLabel={newsletter.searchButtonLabel}
                            required
                        />

                        <p className="text-gray-600 body-xs max-w-md">
                            {newsletter.disclaimer}
                        </p>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {linkColumns.map((column) => (
                            <nav key={column.id} className="flex flex-col gap-4">
                                {column.links.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        className="text-gray-600 hover:text-black body-s transition-colors duration-200"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        ))}
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

                    <p className="text-gray-600 text-[13px]">
                        © {new Date().getFullYear()} {copyright.brand}. {copyright.rights}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        {legalLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-gray-600 hover:text-black text-[13px] transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
}