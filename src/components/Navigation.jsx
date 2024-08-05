import { useState } from "react"

export const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className='relative flex w-full items-center justify-between'>
            <img src="/src/assets/images/logo.svg" className="h-8 w-auto" alt="Logo" />

            <button className="block desktop:hidden" onClick={toggleMobileMenu}>
                <img src="/src/assets/images/icon-menu.svg" alt="Open Menu" />
                {!isMobileMenuOpen ? (
                    <img src="/src/assets/images/icon-menu.svg" alt="Menu Open" />
                ) : (
                    <img src="/src/assets/images/icon-menu-close.svg" alt="Menu Close" />
                )}
            </button>

            <ul className='hidden desktop:flex gap-8 text-default text-color-dark-grayish-blue'>
                {['Home', 'New', 'Popular', 'Trending', 'Categories'].map((item) => (
                    <li key={item}>
                        <button className="hover:text-color-soft-orange cursor-pointer focus:outline-none">
                            {item}
                        </button>
                    </li>
                ))}
            </ul>

            {isMobileMenuOpen && (
                <div className="fixed top-0 right-0 w-3/4 h-full bg-white z-50">
                    <div className="flex items-center justify-end p-6">
                        <button
                            onClick={toggleMobileMenu}
                            aria-label="Close Mobile Menu"
                        >
                            <img src="/src/assets/images/icon-menu-close.svg" alt="Close Icon" className="w-6 h-6" />
                        </button>
                    </div>
                    <ul className="flex flex-col gap-6 px-6 py-12 text-lg font-medium text-color-very-dark-blue">
                        {['Home', 'New', 'Popular', 'Trending', 'Categories'].map((item) => (
                            <li key={item}>
                                <button
                                    className="hover:text-color-soft-orange cursor-pointer focus:outline-none"
                                    onClick={toggleMobileMenu}>
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    )
}
