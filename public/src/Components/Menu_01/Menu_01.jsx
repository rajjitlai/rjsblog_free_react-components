import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import "swiper/css"
import "swiper/css/navigation"
import { useState } from 'react'
import "./menu_01.css"

const navs = [
    {
        id: 'about',
        content: (
            <>
                <h2>About</h2>
                <nav>
                    <a href="#profile" style={{ animationDelay: "0.1s" }}>Profile</a>
                    <a href="#skills" style={{ animationDelay: "0.2s" }}>Skills</a>
                    <a href="#experience" style={{ animationDelay: "0.3s" }}>Experience</a>
                    <a href="#education" style={{ animationDelay: "0.4s" }}>Education</a>
                </nav>
            </>
        )
    },
    {
        id: 'projects',
        content: (
            <>
                <h2>Projects</h2>
                <nav>
                    <a href="#web-apps" style={{ animationDelay: "0.1s" }}>Web Apps</a>
                    <a href="#mobile-apps" style={{ animationDelay: "0.2s" }}>Mobile Apps</a>
                    <a href="#design-work" style={{ animationDelay: "0.3s" }}>Design Work</a>
                </nav>
            </>
        )
    },
    {
        id: 'contact',
        content: (
            <>
                <h2>Contact</h2>
                <nav>
                    <a href="mailto:contact@example.com" style={{ animationDelay: "0.1s" }}>Email</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ animationDelay: "0.2s" }}>LinkedIn</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ animationDelay: "0.3s" }}>GitHub</a>
                </nav>
            </>
        )
    }
]

const Menu_01 = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div 
                className={`menu-01__background ${isOpen ? 'open' : ''}`}
                onClick={toggleMenu}
            ></div>
            <button 
                className={`menu-01__burger ${isOpen ? 'open' : ''}`} 
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={`menu-01__menu ${isOpen ? 'open' : ''}`}>
                <Swiper 
                    speed={750} 
                    modules={[Navigation]} 
                    navigation
                    className="menu-01__swiper"
                >
                    {navs.map(nav => (
                        <SwiperSlide key={nav.id} className="menu-01__slide">
                            {nav.content}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default Menu_01

