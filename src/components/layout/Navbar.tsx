import { useState } from 'react';
import { navLinks } from '../../data';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav id="desktop-nav" className="hidden lg:flex justify-around items-center h-[17vh]">
                <div className="text-3xl tracking-wider">Shawn Gao</div>
                <div>
                    <ul className="flex gap-8 text-xl list-none">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="hover:text-gray-500 hover:underline underline-offset-8 decoration-1 decoration-gray-400 transition-all duration-300"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            <nav id="hamburger-nav" className="flex lg:hidden justify-around items-center h-[17vh]">
                <div className="text-3xl tracking-wider">Shawn Gao</div>
                <div className="relative inline-block">
                    <div
                        className={`flex flex-col justify-between h-6 w-8 cursor-pointer transition-transform duration-300 ${isMenuOpen ? 'open' : ''}`}
                        onClick={toggleMenu}
                    >
                        <span className={`block h-0.5 w-full bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[10px]' : ''}`}></span>
                        <span className={`block h-0.5 w-full bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block h-0.5 w-full bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[10px]' : ''}`}></span>
                    </div>
                    <div className={`absolute top-full right-0 bg-white w-fit overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[300px] border border-gray-300' : 'max-h-0 border-none'}`}>
                        <ul className="flex flex-col gap-4 p-4 list-none">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="block text-xl text-black hover:text-gray-500 hover:underline underline-offset-8 decoration-1 decoration-gray-400 transition-all duration-300"
                                        onClick={toggleMenu}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
