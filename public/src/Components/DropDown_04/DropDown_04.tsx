import React, { useState } from "react"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "./dropdown_04.css"
import menu from "../../assets/menu.svg"
import account from "../../assets/account.png"

const slides = [
    {
        name: "Frontend",
        image: menu,
        items: ["React", "Vue", "Angular", "Next.js"]
    },
    {
        name: "Backend",
        image: account,
        items: ["Node.js", "Python", "Java", "Go"]
    },
    {
        name: "Design",
        image: menu,
        items: ["Figma", "Sketch", "Adobe XD", "Photoshop"]
    }
]

export const DropDown_04 = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={`dropdown-04 ${isOpen ? "open" : ""}`}>
            <button 
                className="dropdown-04__trigger"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span>Skills</span>
                <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className={`dropdown-04__chevron ${isOpen ? "open" : ""}`}
                >
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </button>
            {isOpen && (
                <div className="dropdown-04__menu">
                    <Swiper 
                        modules={[Pagination]} 
                        pagination={{ clickable: true }}
                        className="dropdown-04__swiper"
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index} className="dropdown-04__slide">
                                <div className="dropdown-04__slide-content">
                                    <div className="dropdown-04__slide-image">
                                        <img src={slide.image} alt={slide.name} />
                                    </div>
                                    <h3 className="dropdown-04__slide-title">{slide.name}</h3>
                                    <div className="dropdown-04__slide-items">
                                        {slide.items.map((item, idx) => (
                                            <span key={idx} className="dropdown-04__slide-tag">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </div>
    )
}
