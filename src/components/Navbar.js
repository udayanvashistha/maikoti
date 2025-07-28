import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Plan Visit", path: "/plan" },
    { name: "Contact", path: "/ContactForm" },
  ];

  return (
    <>
      <nav style={{
        ...styles.navbar,
        ...(isScrolled ? styles.navbarScrolled : {}),
      }}>
        <div style={styles.container}>
          {/* Logo */}
          <Link to="/" style={styles.logo}>
            <span style={styles.logoIcon}>🏔️</span>
            <span style={styles.logoText}>MAIKOTI</span>
          </Link>

          {/* Desktop Navigation */}
          <div style={styles.navLinks} className="navbar-nav-links">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  ...styles.navItem,
                  ...(location.pathname === item.path ? styles.navItemActive : {}),
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            style={styles.mobileMenuButton}
            className="navbar-mobile-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div style={{
              ...styles.hamburgerLine,
              ...(isMobileMenuOpen ? styles.hamburgerLineTop : {}),
            }}></div>
            <div style={{
              ...styles.hamburgerLine,
              ...(isMobileMenuOpen ? styles.hamburgerLineMiddle : {}),
            }}></div>
            <div style={{
              ...styles.hamburgerLine,
              ...(isMobileMenuOpen ? styles.hamburgerLineBottom : {}),
            }}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div style={{
          ...styles.mobileMenu,
          ...(isMobileMenuOpen ? styles.mobileMenuOpen : {}),
        }}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                ...styles.mobileNavItem,
                ...(location.pathname === item.path ? styles.mobileNavItemActive : {}),
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          style={styles.mobileOverlay}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    transition: "all 0.3s ease",
    padding: "var(--space-4) 0",
  },
  navbarScrolled: {
    background: "rgba(255, 255, 255, 0.98)",
    boxShadow: "var(--shadow-lg)",
    padding: "var(--space-3) 0",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 var(--space-4)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "var(--space-2)",
    textDecoration: "none",
    color: "var(--gray-900)",
    fontWeight: "800",
    fontSize: "var(--text-xl)",
    transition: "var(--transition-normal)",
  },
  logoIcon: {
    fontSize: "var(--text-2xl)",
    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
  },
  logoText: {
    background: "var(--gradient-primary)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    letterSpacing: "0.5px",
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "var(--space-8)",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    textDecoration: "none",
    color: "var(--gray-700)",
    fontWeight: "600",
    fontSize: "var(--text-sm)",
    padding: "var(--space-2) var(--space-4)",
    borderRadius: "var(--radius-lg)",
    transition: "var(--transition-normal)",
    position: "relative",
    overflow: "hidden",
  },
  navItemActive: {
    color: "var(--primary-600)",
    background: "var(--primary-50)",
  },
  mobileMenuButton: {
    display: "none",
    flexDirection: "column",
    gap: "4px",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "var(--space-2)",
    borderRadius: "var(--radius-md)",
    transition: "var(--transition-normal)",
  },
  hamburgerLine: {
    width: "24px",
    height: "3px",
    background: "var(--gray-700)",
    borderRadius: "2px",
    transition: "var(--transition-normal)",
    transformOrigin: "center",
  },
  hamburgerLineTop: {
    transform: "rotate(45deg) translateY(7px)",
  },
  hamburgerLineMiddle: {
    opacity: 0,
  },
  hamburgerLineBottom: {
    transform: "rotate(-45deg) translateY(-7px)",
  },
  mobileMenu: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    background: "rgba(255, 255, 255, 0.98)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "var(--shadow-xl)",
    transform: "translateY(-100%)",
    opacity: 0,
    visibility: "hidden",
    transition: "all 0.3s ease",
    padding: "var(--space-6) 0",
  },
  mobileMenuOpen: {
    transform: "translateY(0)",
    opacity: 1,
    visibility: "visible",
  },
  mobileNavItem: {
    display: "block",
    textDecoration: "none",
    color: "var(--gray-700)",
    fontWeight: "600",
    fontSize: "var(--text-base)",
    padding: "var(--space-4) var(--space-6)",
    transition: "var(--transition-normal)",
    borderLeft: "4px solid transparent",
  },
  mobileNavItemActive: {
    color: "var(--primary-600)",
    background: "var(--primary-50)",
    borderLeftColor: "var(--primary-600)",
  },
  mobileOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.3)",
    zIndex: 999,
    backdropFilter: "blur(4px)",
  },
};

// Add responsive styles via CSS
if (typeof document !== 'undefined') {
  const responsiveStyles = `
    @media (max-width: 768px) {
      .navbar-nav-links {
        display: none !important;
      }
      
      .navbar-mobile-button {
        display: flex !important;
      }
    }
    
    @media (min-width: 769px) {
      .navbar-nav-links {
        display: flex !important;
      }
      
      .navbar-mobile-button {
        display: none !important;
      }
    }
  `;
  
  const styleSheet = document.createElement('style');
  styleSheet.textContent = responsiveStyles;
  document.head.appendChild(styleSheet);
}

export default Navbar;
