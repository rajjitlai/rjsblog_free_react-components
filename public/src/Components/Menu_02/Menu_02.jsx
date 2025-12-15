import { useState } from "react"
import { BrowserRouter, Routes, Route, Outlet, useNavigate } from "react-router-dom"
import "./menu_02.css"

const links = [
    "about",
    "blog",
    "services",
    "contact",
]

const Layout = () => {
    const navigate = useNavigate()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const onClick = (href) => {
        toggleMenu()
        navigate(`/${href}`)
    }

    return (
        <>
            <button 
                className={`menu-02__burger ${isMenuOpen ? "open" : ""}`} 
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div 
                className={`menu-02__background ${isMenuOpen ? "open" : ""}`}
                onClick={toggleMenu}
            ></div>
            <div className={`menu-02__menu ${isMenuOpen ? "open" : ""}`}>
                <nav>
                    {links.map((link, index) => (
                        <a 
                            key={link} 
                            href={`/${link}`}
                            className={`menu-02__link ${isMenuOpen ? "appear" : ""}`} 
                            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                            onClick={(e) => {
                                e.preventDefault()
                                onClick(link)
                            }}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault()
                                    onClick(link)
                                }
                            }}
                        >
                            {link}
                        </a>
                    ))}
                </nav>
            </div>
            <main className={`menu-02__page ${isMenuOpen ? "open" : ""}`}>
                <Outlet />
            </main>
        </>
    )
}

const Page = ({ title, content }) => {
    return (
        <div className="menu-02__page-content">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

const About = () => {
    return <Page title="About" content="Learn more about us and our mission." />
}

const Menu_02 = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Page title="Home" content="Welcome to the home page" />} />
                    <Route path="about" element={<About />} />
                    <Route path="blog" element={<Page title="Blog" content="Read our latest articles and updates." />} />
                    <Route path="services" element={<Page title="Services" content="Explore our services and offerings." />} />
                    <Route path="contact" element={<Page title="Contact" content="Get in touch with us." />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Menu_02
