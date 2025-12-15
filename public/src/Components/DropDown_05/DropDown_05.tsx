import { useRef, useState } from 'react'
import "./dropdown_05.css"
import chevron_right from "../../assets/chevron_right.svg"
import arrow_back from "../../assets/arrow_back.svg"

const items = [
    {
        name: "Build",
        subItems: ["Description", "Folder", "Settings"]
    },
    {
        name: "Design",
        subItems: ["Colors", "Typography", "Components"]
    },
    {
        name: "Deploy",
        subItems: ["Production", "Staging", "Development"]
    }
]

interface MenuButtonProps {
    name: string
    icon?: string
    index?: number
    hasSubItems?: boolean
    onClick?: (index: number, height?: number) => void
}

const MenuButton = ({ name, icon, index, hasSubItems, onClick }: MenuButtonProps) => {
    return (
        <button 
            className="dropdown-05__menu-button"
            onClick={() => onClick && index !== undefined && onClick(index)}
        >
            {icon && (
                <span className="dropdown-05__button-icon">
                    <img src={icon} alt="" />
                </span>
            )}
            <span className="dropdown-05__button-text">{name}</span>
            {hasSubItems && (
                <span className="dropdown-05__button-chevron">
                    <img src={chevron_right} alt="" />
                </span>
            )}
        </button>
    )
}

interface MenuItemProps {
    name: string
    index: number
    activeSubMenu: number | undefined
    subItems?: string[]
    onClick: (index: number, height?: number) => void
}

const MenuItem = ({ name, index, activeSubMenu, subItems, onClick }: MenuItemProps) => {
    const subMenuRef = useRef<HTMLDivElement>(null)
    const isActive = activeSubMenu === index
    
    const handleBackClick = () => {
        onClick(-1, 0)
    }
    
    return (
        <>
            <MenuButton 
                onClick={subItems ? onClick : undefined} 
                name={name} 
                index={index} 
                hasSubItems={Boolean(subItems)} 
            />
            {subItems?.length && (
                <div 
                    ref={subMenuRef} 
                    className={`dropdown-05__sub-menu ${isActive ? "open" : ""}`}
                >
                    <MenuButton 
                        onClick={handleBackClick} 
                        icon={arrow_back} 
                        name={name} 
                    />
                    {subItems.map((subItem, idx) => (
                        <MenuButton 
                            key={subItem} 
                            name={subItem}
                            index={idx + 1000}
                        />
                    ))}
                </div>
            )}
        </>
    )
}

const DropDown_05 = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
    const [subMenuHeight, setSubMenuHeight] = useState(168)
    const [activeSubMenu, setActiveSubMenu] = useState<number | undefined>(undefined)
    
    const handleClick = (index: number, height?: number) => {
        if (index > -1) {
            setActiveSubMenu(index)
            if (height) setSubMenuHeight(height)
        } else {
            setActiveSubMenu(undefined)
        }
        setIsSubMenuOpen(index > -1)
    }

    return (
        <div className={`dropdown-05 ${isOpen ? 'open' : ''}`}>
            <button 
                className="dropdown-05__trigger"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                Preferences
                <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className={`dropdown-05__chevron ${isOpen ? "open" : ""}`}
                >
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </button>

            {isOpen && (
                <div 
                    className="dropdown-05__menu"
                    style={{ height: `${subMenuHeight}px` }}
                >
                    <div className={`dropdown-05__menu-inner ${isSubMenuOpen ? 'open' : ''}`}>
                        <nav className="dropdown-05__main-menu">
                            {items.map((item, index) => (
                                <MenuItem 
                                    key={item.name} 
                                    name={item.name} 
                                    index={index} 
                                    activeSubMenu={activeSubMenu} 
                                    subItems={item.subItems} 
                                    onClick={handleClick} 
                                />
                            ))}
                        </nav>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DropDown_05

