import { navLinks } from '../../data';

const Footer = () => {
    return (
        <footer className="h-[26vh] mx-[1rem] flex flex-col justify-center items-center">
            <nav>
                <div className="nav-links-container">
                    <ul className="flex gap-8 text-xl list-none mb-8 flex-wrap justify-center">
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
            <p className="text-center text-gray-600">Copyright &#169; 2024 Shawn Gao. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
