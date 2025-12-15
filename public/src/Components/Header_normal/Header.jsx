import { useState } from 'react'
import './header.css'
import menu from "../../assets/menu.svg"
import close from "../../assets/close.svg"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { label: "Home", path: "/" },
        { label: "Projects", path: "/projects" },
        { label: "Blog", path: "/blog" },
        { label: "Testimonials", path: "/testimonials" },
        { label: "About Us", path: "/about" },
        { label: "Contact Us", path: "/contact" },
    ]

    return (
        <header className="header-normal">
            <div className="header-normal__logo">LOGO</div>
            <nav className={`header-normal__nav ${isOpen ? 'open' : ''}`}>
                <ul className="header-normal__nav-list">
                    {navLinks.map((link) => (
                        <li key={link.label} className="header-normal__nav-item">
                            <a href={link.path} onClick={() => setIsOpen(false)}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <button 
                className="header-normal__toggle" 
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
            >
                <img 
                    src={isOpen ? close : menu} 
                    alt={isOpen ? "Close menu" : "Open menu"}
                    style={{ filter: "invert(1)" }} 
                />
            </button>
        </header>
    )
}

export default Header

