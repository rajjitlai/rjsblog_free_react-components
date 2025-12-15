import { useRef, useState } from "react"
import "./dropdown_03.css"

const graphics = [
    { name: "Nvidia RTX 4090" },
    { name: "Nvidia RTX 4080" },
    { name: "Nvidia RTX 4070" },
    { name: "AMD RX 7900 XTX" },
    { name: "AMD RX 7800 XT" },
]

const DropDown_03 = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [search, setSearch] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const handleClick = () => {
        if (!isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100)
        }
        setIsOpen(!isOpen)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const filteredGraphics = graphics.filter(
        (graphic) =>
            !search.length || graphic.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="dropdown-03">
            <div className={`dropdown-03__search ${isOpen ? "open" : ""}`}>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Find a graphics card"
                    value={search}
                    onChange={handleChange}
                    className="dropdown-03__input"
                />
                <button 
                    className="dropdown-03__toggle"
                    onClick={handleClick}
                    aria-label={isOpen ? "Close search" : "Open search"}
                >
                    <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                    >
                        {isOpen ? (
                            <path d="M18 6L6 18M6 6l12 12" />
                        ) : (
                            <>
                                <circle cx="11" cy="11" r="8" />
                                <path d="m21 21-4.35-4.35" />
                            </>
                        )}
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className="dropdown-03__results">
                    {filteredGraphics.length > 0 ? (
                        filteredGraphics.slice(0, 5).map((graphic) => (
                            <button 
                                key={graphic.name}
                                className="dropdown-03__result-item"
                                onClick={() => {
                                    setSearch(graphic.name)
                                    setIsOpen(false)
                                }}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.35-4.35" />
                                </svg>
                                <span>{graphic.name}</span>
                            </button>
                        ))
                    ) : (
                        <div className="dropdown-03__no-results">
                            No results found
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default DropDown_03
