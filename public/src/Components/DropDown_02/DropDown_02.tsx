import React, { useRef, useState } from 'react'
import "./dropdown_02.css"
import account from "../../assets/account.png"
import down from "../../assets/down.svg"
import moon from "../../assets/moon.svg"

const DropDown_02 = () => {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const chevronRef = useRef<HTMLDivElement>(null)
    const [isOpen, setIsOpen] = useState(false)
    const [menuPosition, setMenuPosition] = useState({ top: '78px', right: '0px' })

    const handleButtonClick = () => {
        if (buttonRef.current && chevronRef.current) {
            const buttonRect = buttonRef.current.getBoundingClientRect()
            const chevronRect = chevronRef.current.getBoundingClientRect()

            if (isOpen) {
                const menuRight = buttonRect.right - chevronRect.right
                const menuTop = chevronRect.top - buttonRect.top
                setMenuPosition({
                    right: `${menuRight}px`,
                    top: `${menuTop}px`
                })
            } else {
                setMenuPosition({ top: '78px', right: '0px' })
            }
        }
        setIsOpen(!isOpen)
    }

    return (
        <div className="dropdown-02">
            <div className={`dropdown-02__container ${isOpen ? "open" : ""}`}>
                <button 
                    ref={buttonRef} 
                    className="dropdown-02__trigger"
                    onClick={handleButtonClick}
                    aria-expanded={isOpen}
                >
                    <div className="dropdown-02__icon">
                        <img src={account} alt="Account" />
                    </div>
                    <span className="dropdown-02__label">Preferences</span>
                    <div ref={chevronRef} className={`dropdown-02__chevron ${isOpen ? "open" : ""}`}>
                        <img src={down} alt="" />
                    </div>
                </button>
                <div 
                    className={`dropdown-02__menu ${isOpen ? "open" : ""}`}
                    style={{ right: menuPosition.right, top: menuPosition.top }}
                >
                    <button className="dropdown-02__menu-item">
                        <div className="dropdown-02__menu-icon">
                            <img src={moon} alt="Dark Mode" />
                        </div>
                        <span>Dark Mode</span>
                    </button>
                    <button className="dropdown-02__menu-item">
                        <div className="dropdown-02__menu-icon">
                            <img src={account} alt="Account" />
                        </div>
                        <span>Account Settings</span>
                    </button>
                    <button className="dropdown-02__menu-item">
                        <div className="dropdown-02__menu-icon">
                            <img src={moon} alt="Notifications" />
                        </div>
                        <span>Notifications</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DropDown_02
