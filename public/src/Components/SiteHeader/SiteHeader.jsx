import { useState } from 'react'
import './SiteHeader.css'
import { siteConfig } from '../../config/site.config'

const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="site-header__container">
        <div className="site-header__left">
          <a href={siteConfig.mainSite.url} className="site-header__logo">
            <span className="site-header__logo-text">{siteConfig.mainSite.name}</span>
            <span className="site-header__logo-divider">/</span>
            <span className="site-header__logo-subdomain">{siteConfig.subdomain.shortName}</span>
          </a>
        </div>
        
        <nav className={`site-header__nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="site-header__nav-list">
            {siteConfig.navigation.mainSite.map((link) => (
              <li key={link.label} className="site-header__nav-item">
                <a 
                  href={link.url} 
                  className="site-header__nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="site-header__nav-item">
              <a 
                href={siteConfig.social.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="site-header__nav-link site-header__nav-link--github"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>

        <button 
          className="site-header__toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default SiteHeader

