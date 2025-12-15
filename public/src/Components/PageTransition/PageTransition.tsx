import React from 'react'
import { BrowserRouter, Routes, Route, Outlet, useNavigate } from 'react-router-dom'
import "./transition.css"

const Home = () => (
    <main className="page-transition__content">
        <h1>Home</h1>
        <p>Welcome to the home page</p>
    </main>
)

const About = () => (
    <main className="page-transition__content">
        <h1>About</h1>
        <p>Learn more about us</p>
    </main>
)

const Work = () => (
    <main className="page-transition__content">
        <h1>Work</h1>
        <p>Check out our portfolio</p>
    </main>
)

const Bars = () => {
    return (
        <div id='bars' className='page-transition__bars'>
            <div className="page-transition__bar"></div>
            <div className="page-transition__bar" style={{ animationDelay: "0.1s" }}></div>
            <div className="page-transition__bar" style={{ animationDelay: "0.2s" }}></div>
            <div className="page-transition__bar" style={{ animationDelay: "0.3s" }}></div>
            <div className="page-transition__bar" style={{ animationDelay: "0.4s" }}></div>
        </div>
    )
}

const Link = ({ to, children }) => {
    const navigate = useNavigate()
    
    const handleClicked = (e) => {
        e.preventDefault()
        const bars = document.getElementById("bars")
        if (!bars) return

        bars.classList.add("show")

        setTimeout(() => {
            bars.classList.remove("show")
            bars.classList.add("hide")
            navigate(to)
            
            setTimeout(() => {
                bars.classList.remove("hide")
            }, 300)
        }, 800)
    }

    return (
        <a 
            href={to} 
            onClick={handleClicked} 
            className="page-transition__link"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleClicked(e)
                }
            }}
        >
            {children}
        </a>
    )
}

const Layout = () => {
    return (
        <>
            <nav className="page-transition__nav">
                <h1 className="page-transition__logo">Portfolio</h1>
                <ul className="page-transition__nav-list">
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/work">Work</Link>
                    </li>
                </ul>
            </nav>
            <Bars />
            <Outlet />
        </>
    )
}

const PageTransition = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='home' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='work' element={<Work />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default PageTransition
