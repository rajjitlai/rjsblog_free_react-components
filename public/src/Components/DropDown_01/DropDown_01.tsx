import React, { useRef, useState, useEffect } from "react"
import "./dropdown_01.css"
import account from "../../assets/account.png"
import dropdown from "../../assets/dropdown.png"

const useOnClickOutside = (
    ref: React.RefObject<HTMLDivElement>,
    handler: (event: MouseEvent | TouchEvent) => void
) => {
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return
            }
            handler(event)
        }
        document.addEventListener("mousedown", listener)
        document.addEventListener("touchstart", listener)
        return () => {
            document.removeEventListener("mousedown", listener)
            document.removeEventListener("touchstart", listener)
        }
    }, [ref, handler])
}

export const DropDown_01 = () => {
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef<HTMLDivElement>(null)
    useOnClickOutside(ref, () => setIsOpen(false))

    return (
        <div ref={ref} className={`dropdown-01 ${isOpen ? "open" : ""}`}>
            <button 
                className="dropdown-01__trigger" 
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                <div className="dropdown-01__avatar">
                    <img src={account} alt="Account" />
                </div>
                <span className="dropdown-01__name">James Bond</span>
                <div className={`dropdown-01__chevron ${isOpen ? "open" : ""}`}>
                    <img src={dropdown} alt="" />
                </div>
            </button>
            <div className="dropdown-01__menu">
                <button className="dropdown-01__menu-item">
                    <div className="dropdown-01__menu-avatar">
                        <img src={account} alt="Profile" />
                    </div>
                    <span className="dropdown-01__menu-text">Profile</span>
                </button>
                <button className="dropdown-01__menu-item">
                    <div className="dropdown-01__menu-avatar">
                        <img src={account} alt="Settings" />
                    </div>
                    <span className="dropdown-01__menu-text">Settings</span>
                </button>
                <button className="dropdown-01__menu-item">
                    <div className="dropdown-01__menu-avatar">
                        <img src={account} alt="Logout" />
                    </div>
                    <span className="dropdown-01__menu-text">Logout</span>
                </button>
            </div>
        </div>
    )
}
