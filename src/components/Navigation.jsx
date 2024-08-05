import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion";

const navItems = ['Home', 'New', 'Popular', 'Trending', 'Categories'];

export const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className='relative flex w-full items-center justify-between'>
            <img src="/src/assets/images/logo.svg" className="h-8 w-auto" alt="Logo" />

            <button className="block desktop:hidden" onClick={toggleMobileMenu}>
                <motion.img
                    src="/src/assets/images/icon-menu.svg"
                    alt="Menu Open"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                />
            </button>

            <ul className='hidden desktop:flex gap-8 text-default text-color-dark-grayish-blue'>
                {navItems.map((item) => (
                    <li key={item}>
                        <button className="hover:text-color-soft-orange cursor-pointer focus:outline-none">
                            {item}
                        </button>
                    </li>
                ))}
            </ul>

            <AnimatePresence>

                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5 }}
                        exit={{ x: '100%' }}
                        className="fixed top-0 right-0 w-3/4 h-full bg-white z-50">

                        <div className="flex items-center justify-end p-8">
                            <button
                                onClick={toggleMobileMenu}
                                aria-label="Close Mobile Menu"
                            >
                                <motion.img
                                    src="/src/assets/images/icon-menu-close.svg"
                                    alt="Close Icon"
                                    className="w-6 h-6"
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                                    transition={{ delay: 0.3, duration: 0.3 }}
                                />
                            </button>
                        </div>
                        <ul className="flex flex-col gap-6 px-6 py-12 text-lg font-medium text-color-very-dark-blue">
                            {navItems.map((item) => (
                                <li key={item}>
                                    <button
                                        className="hover:text-color-soft-orange cursor-pointer focus:outline-none"
                                        onClick={toggleMobileMenu}>
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
