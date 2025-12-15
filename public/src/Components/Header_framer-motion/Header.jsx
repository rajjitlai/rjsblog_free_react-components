import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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

    const navVariants = {
        open: {
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 30
            }
        },
        closed: {
            x: '100%',
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 40
            }
        }
    }

    const itemVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 24
            }
        },
        closed: {
            opacity: 0,
            y: 20
        }
    }

    return (
        <header className="header-framer">
            <div className="header-framer__logo">LOGO</div>
            <motion.nav
                className="header-framer__nav"
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
                variants={navVariants}
            >
                <ul className="header-framer__nav-list">
                    <AnimatePresence>
                        {navLinks.map((link, index) => (
                            <motion.li
                                key={link.label}
                                className="header-framer__nav-item"
                                variants={itemVariants}
                                initial="closed"
                                animate={isOpen ? 'open' : 'closed'}
                                transition={{ delay: index * 0.1 }}
                            >
                                <a href={link.path} onClick={() => setIsOpen(false)}>
                                    {link.label}
                                </a>
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </ul>
            </motion.nav>
            <button
                className="header-framer__toggle"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
            >
                <motion.img
                    src={isOpen ? close : menu}
                    alt={isOpen ? "Close menu" : "Open menu"}
                    style={{ filter: "invert(1)" }}
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                />
            </button>
        </header>
    )
}

export default Header

