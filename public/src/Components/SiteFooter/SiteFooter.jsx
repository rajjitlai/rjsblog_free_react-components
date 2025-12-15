import './SiteFooter.css'
import { siteConfig } from '../../config/site.config'

const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        <div className="site-footer__content">
          {/* Column 1: RJ's Blog. */}
          <div className="site-footer__section">
            <h3 className="site-footer__title">
              <span className="site-footer__title-main">RJ's Blog</span>
              <span className="site-footer__title-highlight">.</span>
            </h3>
            <p className="site-footer__description">
              RJ's BLOG is a platform that connects individuals with the latest and greatest knowledge in the tech industry.
            </p>
            <div className="site-footer__social">
              <p className="site-footer__social-text">Follow us on social networks</p>
              <div className="site-footer__social-icons">
                <a href="https://www.instagram.com/rjinstitue.rajjit/" className="site-footer__social-icon" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" target="_blank">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100087904707580&mibextid=ZbWKwL" className="site-footer__social-icon" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" target="_blank">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@rjinstitute.rajjit" className="site-footer__social-icon" aria-label="YouTube">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" target="_blank">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>                
              </div>
            </div>
            <div className="site-footer__copyright">
              <p>©2023-2025 RJ's BLOG. | All rights reserved</p>
              <p>Owner: {''}
                <a href="https://rajjitlaishram.netlify.app/" target="_blank" className="site-footer__link--highlight" >Rajjit Laishram</a>
              </p>
            </div>
          </div>

          {/* Column 2: Categories */}
          <div className="site-footer__section">
            <h4 className="site-footer__heading">Categories</h4>
            <ul className="site-footer__links">
              <li>
                <a href={`${siteConfig.mainSite.url}/category/physics`} className="site-footer__link">Physics</a>
              </li>
              <li>
                <a href={`${siteConfig.mainSite.url}/category/english`} className="site-footer__link">English</a>
              </li>
              <li>
                <a href={`${siteConfig.mainSite.url}/category/chemistry`} className="site-footer__link">Chemistry</a>
              </li>
              <li>
                <a href={`${siteConfig.mainSite.url}/category/updates`} className="site-footer__link">Updates</a>
              </li>
              <li>
                <a href={`${siteConfig.mainSite.url}/categories`} className="site-footer__link site-footer__link--highlight">View all</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div className="site-footer__section">
            <h4 className="site-footer__heading">Useful Links</h4>
            <ul className="site-footer__links">
              <li>
                <a href={siteConfig.mainSite.url} className="site-footer__link">Home</a>
              </li>
              <li>
                <a href={`${siteConfig.mainSite.url}/blog`} className="site-footer__link">Blog</a>
              </li>
              <li>
                <a href={`${siteConfig.mainSite.url}/author`} className="site-footer__link">Author</a>
              </li>
              <li>
                <a href={`${siteConfig.mainSite.url}/notes`} className="site-footer__link">Notes</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Information */}
          <div className="site-footer__section">
            <h4 className="site-footer__heading">Information</h4>
            <ul className="site-footer__links">
              <li>
                <a href={`${siteConfig.mainSite.url}/contact`} className="site-footer__link">Contact us</a>
              </li>
              <li>
                <a href={`${siteConfig.mainSite.url}/privacy-policy`} className="site-footer__link">Privacy Policy</a>
              </li>
              <li>
                <a href={`${siteConfig.mainSite.url}/terms-conditions`} className="site-footer__link">Terms & Conditions</a>
              </li>
              <li>
                <a href={`${siteConfig.mainSite.url}/cookie-policy`} className="site-footer__link">Cookie Policy</a>
              </li>
              <li>
                <a href={`${siteConfig.mainSite.url}/disclaimer`} className="site-footer__link">Disclaimer</a>
              </li>
              <li>
                <a href={`${siteConfig.mainSite.url}/dmca-policy`} className="site-footer__link">DMCA Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
