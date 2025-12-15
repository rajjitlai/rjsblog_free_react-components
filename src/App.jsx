import { useState, useMemo, useEffect } from "react"
import "./global.css"
import SiteFooter from "./Components/SiteFooter/SiteFooter"
import { siteConfig } from "./config/site.config"

// Icon component helper
const Icon = ({ name, className = "" }) => {
  return <i className={`bx ${name} ${className}`}></i>
}

// Import all components
import { DropDown_01 } from "./Components/DropDown_01/DropDown_01"
import DropDown_02 from "./Components/DropDown_02/DropDown_02"
import DropDown_03 from "./Components/DropDown_03/DropDown_03"
import { DropDown_04 } from "./Components/DropDown_04/DropDown_04"
import DropDown_05 from "./Components/DropDown_05/DropDown_05"
import HeaderNormal from "./Components/Header_normal/Header"
import HeaderFramerMotion from "./Components/Header_framer-motion/Header"
import Carousel from "./Components/Image_Slider_01/Image_Slider_01"
import Menu_01 from "./Components/Menu_01/Menu_01"
import Menu_02 from "./Components/Menu_02/Menu_02"
import Notifications from "./Components/Notification/Notifications"
import PageTransition from "./Components/PageTransition/PageTransition"
import SiteHeader from "./Components/SiteHeader/SiteHeader"

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState("dropdown-01")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [categoriesSidebarOpen, setCategoriesSidebarOpen] = useState(true)
  const [componentsSidebarOpen, setComponentsSidebarOpen] = useState(true)
  const [showDescription, setShowDescription] = useState(false)
  const [showCode, setShowCode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [codeContent, setCodeContent] = useState({ jsx: "", css: "" })
  const [activeCodeTab, setActiveCodeTab] = useState("jsx")
  const [copiedState, setCopiedState] = useState({ jsx: false, css: false })
  const [loadingCode, setLoadingCode] = useState(false)

  const components = [
    {
      id: "dropdown-01",
      name: "Dropdown 01",
      category: "dropdown",
      description: "Simple account dropdown with profile menu and click-outside-to-close functionality",
      icon: "bx-chevron-down",
      component: <DropDown_01 />
    },
    {
      id: "dropdown-02",
      name: "Dropdown 02",
      category: "dropdown",
      description: "Animated dropdown with icon support and dynamic positioning",
      icon: "bx-chevron-down",
      component: <DropDown_02 />
    },
    {
      id: "dropdown-03",
      name: "Dropdown 03 (Search)",
      category: "dropdown",
      description: "Search-based dropdown with real-time filtering capabilities",
      icon: "bx-search",
      component: <DropDown_03 />
    },
    {
      id: "dropdown-04",
      name: "Dropdown 04 (Swiper)",
      category: "dropdown",
      description: "Swiper-powered dropdown with pagination and slide navigation",
      icon: "bx-file",
      component: <DropDown_04 />
    },
    {
      id: "dropdown-05",
      name: "Dropdown 05 (Nested)",
      category: "dropdown",
      description: "Nested menu dropdown with sub-items and smooth transitions",
      icon: "bx-folder",
      component: <DropDown_05 />
    },
    {
      id: "header-normal",
      name: "Header (Normal)",
      category: "header",
      description: "Standard responsive header with mobile hamburger menu",
      icon: "bx-menu",
      component: <HeaderNormal />
    },
    {
      id: "header-framer",
      name: "Header (Framer Motion)",
      category: "header",
      description: "Animated header with smooth transitions using Framer Motion",
      icon: "bx-sparkles",
      component: <HeaderFramerMotion />
    },
    {
      id: "image-slider",
      name: "Image Slider",
      category: "slider",
      description: "Beautiful coverflow image carousel with navigation controls",
      icon: "bx-image",
      component: <Carousel />
    },
    {
      id: "menu-01",
      name: "Menu 01 (Swiper)",
      category: "menu",
      description: "Swiper-based navigation menu with slide transitions",
      icon: "bx-menu-alt-left",
      component: <Menu_01 />
    },
    {
      id: "menu-02",
      name: "Menu 02 (Router)",
      category: "menu",
      description: "Router-integrated menu with page transitions and navigation",
      icon: "bx-navigation",
      component: <Menu_02 />
    },
    {
      id: "notifications",
      name: "Notifications",
      category: "other",
      description: "Tabbed notification system with filtering and read/unread states",
      icon: "bx-bell",
      component: <Notifications />
    },
    {
      id: "page-transition",
      name: "Page Transition",
      category: "other",
      description: "Smooth page transitions with loading bars and router integration",
      icon: "bx-zap",
      component: <PageTransition />
    },
    {
      id: "site-header",
      name: "Site Header",
      category: "header",
      description: "Complete site header with navigation, logo, and mobile menu",
      icon: "bx-window",
      component: <SiteHeader />
    },
    {
      id: "site-footer",
      name: "Site Footer",
      category: "other",
      description: "Comprehensive footer with links, social media, and copyright information",
      icon: "bx-info-circle",
      component: <SiteFooter />
    },
  ]

  const categories = [
    { id: "all", name: "All", icon: "bx-package", color: "#EBEDD6" },
    { id: "dropdown", name: "Dropdowns", icon: "bx-chevron-down", color: "#EBEDD6" },
    { id: "header", name: "Headers", icon: "bx-menu", color: "#EBEDD6" },
    { id: "menu", name: "Menus", icon: "bx-menu-alt-left", color: "#EBEDD6" },
    { id: "slider", name: "Sliders", icon: "bx-image", color: "#EBEDD6" },
    { id: "other", name: "Other", icon: "bx-sparkles", color: "#EBEDD6" },
  ]

  const filteredComponents = useMemo(() => {
    return components.filter(comp => {
      const matchesSearch = comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        comp.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "all" || comp.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  const currentComponent = components.find(c => c.id === selectedComponent)

  // Get component file paths based on component ID
  const getComponentPaths = (componentId) => {
    const pathMap = {
      "dropdown-01": { jsx: "../Components/DropDown_01/DropDown_01.tsx", css: "../Components/DropDown_01/dropdown_01.css" },
      "dropdown-02": { jsx: "../Components/DropDown_02/DropDown_02.tsx", css: "../Components/DropDown_02/dropdown_02.css" },
      "dropdown-03": { jsx: "../Components/DropDown_03/DropDown_03.tsx", css: "../Components/DropDown_03/dropdown_03.css" },
      "dropdown-04": { jsx: "../Components/DropDown_04/DropDown_04.tsx", css: "../Components/DropDown_04/dropdown_04.css" },
      "dropdown-05": { jsx: "../Components/DropDown_05/DropDown_05.tsx", css: "../Components/DropDown_05/dropdown_05.css" },
      "header-normal": { jsx: "../Components/Header_normal/Header.jsx", css: "../Components/Header_normal/header.css" },
      "header-framer": { jsx: "../Components/Header_framer-motion/Header.jsx", css: "../Components/Header_framer-motion/header.css" },
      "image-slider": { jsx: "../Components/Image_Slider_01/Image_Slider_01.tsx", css: "../Components/Image_Slider_01/styles.css" },
      "menu-01": { jsx: "../Components/Menu_01/Menu_01.jsx", css: "../Components/Menu_01/menu_01.css" },
      "menu-02": { jsx: "../Components/Menu_02/Menu_02.jsx", css: "../Components/Menu_02/menu_02.css" },
      "notifications": { jsx: "../Components/Notification/Notifications.tsx", css: "../Components/Notification/Notifications.css" },
      "page-transition": { jsx: "../Components/PageTransition/PageTransition.tsx", css: "../Components/PageTransition/transition.css" },
      "site-header": { jsx: "../Components/SiteHeader/SiteHeader.jsx", css: "../Components/SiteHeader/SiteHeader.css" },
      "site-footer": { jsx: "../Components/SiteFooter/SiteFooter.jsx", css: "../Components/SiteFooter/SiteFooter.css" },
    }
    return pathMap[componentId] || { jsx: "", css: "" }
  }

  // Clean code by removing source map comments and paths
  const cleanCode = (code, type) => {
    if (!code) return code

    // Remove source map comments (/*# sourceMappingURL=... */)
    let cleaned = code.replace(/\/\*# sourceMappingURL=.*?\*\//g, '')

    // Remove source map comments (//# sourceMappingURL=...)
    cleaned = cleaned.replace(/\/\/# sourceMappingURL=.*$/gm, '')

    // Remove any lines containing absolute paths (like D:\Other\...)
    cleaned = cleaned.split('\n')
      .filter(line => {
        // Remove lines with Windows paths (D:\, C:\, etc.)
        if (/^[A-Z]:\\/.test(line.trim())) return false
        // Remove lines with absolute Unix paths starting with /
        if (/^\/[a-zA-Z]/.test(line.trim()) && line.includes(':')) return false
        // Remove source map references
        if (line.includes('sourceMappingURL')) return false
        return true
      })
      .join('\n')

    return cleaned.trim()
  }

  // Fetch component code files - fetch raw source files directly
  // This gets the actual source code, not the compiled/transformed version
  const fetchComponentCode = async (componentId) => {
    setLoadingCode(true)
    const paths = getComponentPaths(componentId)

    try {
      // Convert relative paths to absolute paths for fetch
      // Remove '../' and prepend '/src/' to get the actual source files
      const jsxPath = paths.jsx.replace('../', '/src/')
      const cssPath = paths.css.replace('../', '/src/')

      // Fetch raw source files directly (this gets the original source, not compiled)
      const [jsxResponse, cssResponse] = await Promise.all([
        fetch(jsxPath).catch(() => null),
        fetch(cssPath).catch(() => null),
      ])

      let jsxContent = null
      let cssContent = null

      if (jsxResponse?.ok) {
        jsxContent = await jsxResponse.text()
      } else {
        console.warn(`Failed to fetch JSX: ${jsxPath}`, jsxResponse?.status)
      }

      if (cssResponse?.ok) {
        cssContent = await cssResponse.text()
      } else {
        console.warn(`Failed to fetch CSS: ${cssPath}`, cssResponse?.status)
      }

      // Clean and set the code content
      const jsxText = jsxContent
        ? cleanCode(jsxContent, 'jsx')
        : `// Code not available\n// Path: ${jsxPath}\n// Status: ${jsxResponse?.status || 'unknown'}`

      const cssText = cssContent
        ? cleanCode(cssContent, 'css')
        : `/* CSS not available */\n/* Path: ${cssPath} */\n/* Status: ${cssResponse?.status || 'unknown'} */`

      setCodeContent({ jsx: jsxText, css: cssText })
    } catch (error) {
      console.error("Error loading code:", error)
      setCodeContent({
        jsx: `// Error loading code\n// ${error.message}\n// Please check the component files manually`,
        css: `/* Error loading CSS */\n/* ${error.message} */`
      })
    } finally {
      setLoadingCode(false)
    }
  }

  // Load code when component changes and code viewer is open
  useEffect(() => {
    if (showCode && selectedComponent) {
      fetchComponentCode(selectedComponent)
    }
  }, [selectedComponent, showCode])

  // Syntax highlighter using Cyano Bact Theme colors
  const highlightCode = (code, type) => {
    if (!code) return code

    // Escape HTML
    let highlighted = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')

    if (type === 'jsx' || type === 'tsx') {
      // Theme colors from Cyano Bact Theme
      const colors = {
        keyword: '#d57bff',           // Keyword, Storage
        string: '#76c1ff',            // String (italic)
        comment: '#6766b3',           // Comment (italic)
        number: '#fffc58',            // Number, Constant
        function: '#00b0ff',           // Function, Special Method
        operator: '#00b0ff',          // Operator
        tag: '#ff5680',                // Tag
        variable: '#EEFFFF',           // Variables
        class: '#55eefd',              // Class, Support
        attribute: '#ee6dff',          // Attributes
        jsxTag: '#ff5680',            // JSX Tags
        jsxAttribute: '#55eefd',      // HTML Attributes
      }

      // Highlight comments first (to avoid highlighting inside comments)
      highlighted = highlighted.replace(/\/\/.*$/gm, `<span style="color: ${colors.comment}; font-style: italic;">$&</span>`)
      highlighted = highlighted.replace(/\/\*[\s\S]*?\*\//g, (match) => {
        return `<span style="color: ${colors.comment}; font-style: italic;">${match}</span>`
      })

      // Highlight strings (single, double quotes, template literals)
      highlighted = highlighted.replace(/(['"`])((?:\\.|(?!\1)[^\\])*?)\1/g, `<span style="color: ${colors.string}; font-style: italic;">$1$2$1</span>`)

      // Highlight template literals ${...}
      highlighted = highlighted.replace(/\$\{([^}]+)\}/g, `<span style="color: ${colors.variable};">${'$'}{$1}</span>`)

      // Highlight keywords
      const keywords = ['import', 'export', 'const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'switch', 'case', 'default', 'break', 'continue', 'try', 'catch', 'finally', 'throw', 'new', 'this', 'class', 'extends', 'super', 'static', 'async', 'await', 'from', 'as', 'type', 'interface', 'enum', 'namespace', 'declare', 'module', 'use', 'strict', 'useState', 'useEffect', 'useRef', 'useMemo', 'useCallback', 'React', 'use', 'true', 'false', 'null', 'undefined']
      keywords.forEach(keyword => {
        const regex = new RegExp(`\\b(${keyword})\\b`, 'g')
        highlighted = highlighted.replace(regex, `<span style="color: ${colors.keyword};">$1</span>`)
      })

      // Highlight numbers
      highlighted = highlighted.replace(/\b(\d+\.?\d*)\b/g, `<span style="color: ${colors.number};">$1</span>`)

      // Highlight JSX tags <Tag> and </Tag>
      highlighted = highlighted.replace(/(&lt;\/?)([\w-]+)(\s|&gt;)/g, (match, p1, p2, p3) => {
        return `${p1}<span style="color: ${colors.jsxTag};">${p2}</span>${p3}`
      })

      // Highlight JSX attributes
      highlighted = highlighted.replace(/([\w-]+)(=)/g, `<span style="color: ${colors.jsxAttribute}; font-style: italic;">$1</span>$2`)

      // Highlight function calls
      highlighted = highlighted.replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/g, `<span style="color: ${colors.function};">$1</span>`)

      // Highlight class names and React components (capitalized)
      highlighted = highlighted.replace(/\b([A-Z][a-zA-Z0-9_$]*)\b/g, (match) => {
        // Skip if it's already highlighted or is a keyword
        if (match.includes('<span') || keywords.includes(match)) return match
        return `<span style="color: ${colors.class};">${match}</span>`
      })

    } else if (type === 'css') {
      // Theme colors for CSS
      const colors = {
        selector: '#55eefd',          // CSS Classes, Entity name
        property: '#98e3ff',          // CSS Property Name
        value: '#EEFFFF',             // CSS Values
        comment: '#6766b3',           // Comment (italic)
        atRule: '#d57bff',            // At-rules (keywords)
        number: '#fffc58',            // Numbers
        string: '#76c1ff',            // Strings
        color: '#76c1ff',             // Color values
      }

      // Highlight comments first
      highlighted = highlighted.replace(/\/\*[\s\S]*?\*\//g, (match) => {
        return `<span style="color: ${colors.comment}; font-style: italic;">${match}</span>`
      })

      // Highlight at-rules (@media, @keyframes, etc.)
      highlighted = highlighted.replace(/@[\w-]+\b/g, `<span style="color: ${colors.atRule};">$&</span>`)

      // Highlight CSS selectors (before {)
      highlighted = highlighted.replace(/([.#]?[\w-]+(?:\s*[.#]?[\w-]+)*)\s*(?={)/g, `<span style="color: ${colors.selector};">$1</span>`)

      // Highlight CSS properties (before :)
      highlighted = highlighted.replace(/([\w-]+)\s*(?=:)/g, `<span style="color: ${colors.property};">$1</span>`)

      // Highlight CSS values
      highlighted = highlighted.replace(/(:\s*)([^;]+)(;)/g, (match, p1, p2, p3) => {
        // Highlight color values
        if (/^#[0-9a-fA-F]{3,6}|rgb|rgba|hsl|hsla|var\(/.test(p2.trim())) {
          return `${p1}<span style="color: ${colors.color};">${p2}</span>${p3}`
        }
        // Highlight numbers
        if (/^\d+/.test(p2.trim())) {
          return `${p1}<span style="color: ${colors.number};">${p2}</span>${p3}`
        }
        // Highlight strings
        if (/^['"]/.test(p2.trim())) {
          return `${p1}<span style="color: ${colors.string}; font-style: italic;">${p2}</span>${p3}`
        }
        return `${p1}<span style="color: ${colors.value};">${p2}</span>${p3}`
      })
    }

    return highlighted
  }

  // Copy to clipboard function
  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedState(prev => ({ ...prev, [type]: true }))
      setTimeout(() => {
        setCopiedState(prev => ({ ...prev, [type]: false }))
      }, 2000)
    } catch (error) {
      console.error("Failed to copy:", error)
    }
  }

  return (
    <div className="app-wrapper">
      {/* Merged Header with Navigation and Categories */}
      <div className="merged-header">
        <div className="merged-header__top">
          <div className="merged-header__left">
            <a href={siteConfig.mainSite.url} className="merged-header__logo">
              <span className="merged-header__logo-text">{siteConfig.mainSite.name}</span>
              <span className="merged-header__logo-divider">/</span>
              <span className="merged-header__logo-subdomain">{siteConfig.subdomain.shortName}</span>
            </a>
          </div>

          {/* Mobile Menu Backdrop */}
          {mobileMenuOpen && (
            <div
              className="merged-header__backdrop"
              onClick={() => setMobileMenuOpen(false)}
            ></div>
          )}

          {/* Mobile Menu - Full Screen Overlay */}
          <nav className={`merged-header__nav ${mobileMenuOpen ? 'open' : ''}`}>
            {/* Close button inside menu */}
            {mobileMenuOpen && (
              <button
                className="merged-header__nav-close"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}
            <ul className="merged-header__nav-list">
              {siteConfig.navigation.mainSite.map((link) => (
                <li key={link.label} className="merged-header__nav-item">
                  <a
                    href={link.url}
                    className="merged-header__nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            className="merged-header__mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

      </div>

      <div className="app-layout">
        {/* Left Sidebar - Categories */}
        <aside className={`categories-sidebar ${categoriesSidebarOpen ? "open" : "closed"}`}>
          <div className="categories-sidebar-inner">
            <div className="categories-sidebar-header">
              <h2 className="categories-sidebar-title">Categories</h2>
              <button
                className="categories-sidebar-toggle"
                onClick={() => setCategoriesSidebarOpen(!categoriesSidebarOpen)}
                aria-label="Toggle categories sidebar"
              >
                {categoriesSidebarOpen ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                )}
              </button>
            </div>

            <div className="categories-list">
              {categories.map(category => {
                const count = category.id === "all"
                  ? components.length
                  : components.filter(c => c.category === category.id).length
                return (
                  <button
                    key={category.id}
                    className={`category-item ${selectedCategory === category.id ? "active" : ""}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <span className="category-icon"><Icon name={category.icon} /></span>
                    <div className="category-info">
                      <span className="category-name">{category.name}</span>
                      <span className="category-count">{count}</span>
                    </div>
                  </button>
                )
              })}
            </div>

            <div className="categories-sidebar-footer">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link-button"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </aside>

        {/* Floating Toggle Button for Categories - Shows when closed */}
        {!categoriesSidebarOpen && (
          <button
            className="categories-sidebar-floating-toggle"
            onClick={() => setCategoriesSidebarOpen(true)}
            aria-label="Open categories sidebar"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        )}

        {/* Right Sidebar - Components */}
        <aside className={`components-sidebar ${componentsSidebarOpen ? "open" : "closed"}`}>
          <div className="components-sidebar-inner">
            <div className="components-sidebar-header">
              <h2 className="components-sidebar-title">Components</h2>
              <button
                className="components-sidebar-toggle"
                onClick={() => setComponentsSidebarOpen(!componentsSidebarOpen)}
                aria-label="Toggle components sidebar"
              >
                {componentsSidebarOpen ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                )}
              </button>
            </div>

            {/* Search */}
            <div className="search-section">
              <div className="search-box">
                <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Search components..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
                {searchQuery && (
                  <button
                    className="search-clear-btn"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Components List */}
            <div className="components-section">
              <div className="components-list">
                {filteredComponents.length > 0 ? (
                  filteredComponents.map((comp) => (
                    <button
                      key={comp.id}
                      className={`component-item ${selectedComponent === comp.id ? "active" : ""}`}
                      onClick={() => setSelectedComponent(comp.id)}
                    >
                      <div className="component-icon">
                        <Icon name={comp.icon} />
                      </div>
                      <div className="component-details">
                        <div className="component-name">{comp.name}</div>
                        <div className="component-desc">{comp.description}</div>
                      </div>
                      {selectedComponent === comp.id && (
                        <div className="component-check">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      )}
                    </button>
                  ))
                ) : (
                  <div className="empty-state">
                    <div className="empty-icon"><Icon name="bx-search" /></div>
                    <p className="empty-text">No components found</p>
                    <p className="empty-hint">Try a different search</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </aside>

        {/* Floating Toggle Button for Components - Shows when closed */}
        {!componentsSidebarOpen && (
          <button
            className="components-sidebar-floating-toggle"
            onClick={() => setComponentsSidebarOpen(true)}
            aria-label="Open components sidebar"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
        )}

        {/* Main Content - Playground */}
        <main className={`main-content ${!categoriesSidebarOpen && !componentsSidebarOpen ? "full-width" : categoriesSidebarOpen && componentsSidebarOpen ? "both-open" : categoriesSidebarOpen ? "left-open" : "right-open"}`}>
          <div className="playground-area">
            {currentComponent ? (
              <div className="preview-frame">
                {currentComponent.component}
              </div>
            ) : (
              <div className="welcome-screen">
                <div className="welcome-content">
                  <div className="welcome-icon"><Icon name="bx-palette" /></div>
                  <h2 className="welcome-title">Playground</h2>
                  <p className="welcome-text">Select a component to start</p>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons - Bottom Right */}
          {currentComponent && (
            <div className="action-buttons">
              <button
                className="action-btn description-btn"
                onClick={() => {
                  setShowDescription(!showDescription)
                  setShowCode(false)
                }}
              >
                Description
              </button>
              <button
                className="action-btn code-btn"
                onClick={() => {
                  setShowCode(!showCode)
                  setShowDescription(false)
                  if (!showCode) {
                    fetchComponentCode(selectedComponent)
                  }
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                Code
              </button>
            </div>
          )}

          {/* Description Panel */}
          {showDescription && currentComponent && (
            <div className="description-panel">
              <div className="description-header">
                <h3>{currentComponent.name}</h3>
                <button
                  className="description-close"
                  onClick={() => setShowDescription(false)}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              <div className="description-content">
                <p>{currentComponent.description}</p>
                <div className="description-meta">
                  <span className="meta-item">
                    <strong>Category:</strong> {categories.find(c => c.id === currentComponent.category)?.name}
                  </span>
                  <span className="meta-item">
                    <strong>Path:</strong> src/Components/{currentComponent.name.replace(/\s+/g, "_")}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Code Viewer Panel */}
          {showCode && currentComponent && (
            <div className="code-panel">
              <div className="code-panel-header">
                <div className="code-panel-tabs">
                  <button
                    className={`code-tab ${activeCodeTab === "jsx" ? "active" : ""}`}
                    onClick={() => setActiveCodeTab("jsx")}
                  >
                    {getComponentPaths(selectedComponent).jsx.endsWith('.tsx') ? 'TSX' : 'JSX'}
                  </button>
                  <button
                    className={`code-tab ${activeCodeTab === "css" ? "active" : ""}`}
                    onClick={() => setActiveCodeTab("css")}
                  >
                    CSS
                  </button>
                </div>
                <div className="code-panel-actions">
                  <button
                    className="code-copy-btn"
                    onClick={() => copyToClipboard(
                      activeCodeTab === "jsx" ? codeContent.jsx : codeContent.css,
                      activeCodeTab
                    )}
                    title="Copy to clipboard"
                  >
                    {copiedState[activeCodeTab] ? (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                  <button
                    className="code-close-btn"
                    onClick={() => setShowCode(false)}
                    title="Close"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="code-panel-content">
                {loadingCode ? (
                  <div className="code-loading">
                    <div className="code-loading-spinner"></div>
                    <p>Loading code...</p>
                  </div>
                ) : (
                  <pre className="code-block">
                    <code
                      className={`language-${activeCodeTab === "jsx" ? "javascript" : "css"}`}
                      dangerouslySetInnerHTML={{
                        __html: highlightCode(
                          activeCodeTab === "jsx" ? codeContent.jsx : codeContent.css,
                          activeCodeTab === "jsx" ? (getComponentPaths(selectedComponent).jsx.endsWith('.tsx') ? 'tsx' : 'jsx') : 'css'
                        )
                      }}
                    />
                  </pre>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
      <SiteFooter />
    </div>
  )
}

export default App
