import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    explore: [
      { name: "Home", path: "/" },
      { name: "Gallery", path: "/gallery" },
      { name: "Plan Visit", path: "/plan" },
      { name: "Contact", path: "/ContactForm" },
    ],
    discover: [
      { name: "Top Locations", path: "/#locations" },
      { name: "Village Culture", path: "/#culture" },
      { name: "Local Events", path: "/#events" },
      { name: "How to Reach", path: "/#reach" },
    ],
    community: [
      { name: "Local Stories", path: "/#stories" },
      { name: "Photographers", path: "/#photographers" },
      { name: "Village Life", path: "/#village" },
      { name: "Traditions", path: "/#traditions" },
    ],
  };

  const socialLinks = [
    { icon: "📸", name: "Instagram", url: "#", color: "#E4405F" },
    { icon: "📘", name: "Facebook", url: "#", color: "#1877F2" },
    { icon: "🐦", name: "Twitter", url: "#", color: "#1DA1F2" },
    { icon: "📺", name: "YouTube", url: "#", color: "#FF0000" },
  ];

  const quickStats = [
    { number: "500+", label: "Years of Heritage" },
    { number: "15+", label: "Sacred Temples" },
    { number: "2K+", label: "Annual Visitors" },
    { number: "50+", label: "Local Families" },
  ];

  return (
    <footer style={styles.footer}>
      {/* Top Wave Decoration */}
      <div style={styles.waveContainer}>
        <svg
          style={styles.wave}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="var(--gray-50)"
          ></path>
        </svg>
      </div>

      <div style={styles.container}>
        {/* Main Footer Content */}
        <div style={styles.mainContent}>
          {/* Brand Section */}
          <div style={styles.brandSection}>
            <div style={styles.logoContainer}>
              <span style={styles.logoIcon}>🏔️</span>
              <h3 style={styles.logo}>MAIKOTI</h3>
            </div>
            <p style={styles.brandDescription}>
              Discover the timeless beauty and rich heritage of Maikoti village, 
              nestled in the heart of the Himalayas. Where tradition meets tranquility.
            </p>
            
            {/* Quick Stats */}
            <div style={styles.statsGrid}>
              {quickStats.map((stat, index) => (
                <div key={index} style={styles.statItem}>
                  <span style={styles.statNumber}>{stat.number}</span>
                  <span style={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div style={styles.socialSection}>
              <h4 style={styles.socialTitle}>Connect With Us</h4>
              <div style={styles.socialLinks}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    style={styles.socialLink}
                    title={social.name}
                  >
                    <span style={styles.socialIcon}>{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div style={styles.linksSection}>
            <div style={styles.linkColumn}>
              <h4 style={styles.linkHeading}>Explore</h4>
              <ul style={styles.linkList}>
                {footerLinks.explore.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} style={styles.footerLink}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div style={styles.linkColumn}>
              <h4 style={styles.linkHeading}>Discover</h4>
              <ul style={styles.linkList}>
                {footerLinks.discover.map((link, index) => (
                  <li key={index}>
                    <a href={link.path} style={styles.footerLink}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div style={styles.linkColumn}>
              <h4 style={styles.linkHeading}>Community</h4>
              <ul style={styles.linkList}>
                {footerLinks.community.map((link, index) => (
                  <li key={index}>
                    <a href={link.path} style={styles.footerLink}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div style={styles.contactSection}>
            <h4 style={styles.contactHeading}>Get In Touch</h4>
            
            <div style={styles.contactInfo}>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>📧</span>
                <div>
                  <span style={styles.contactLabel}>Email</span>
                  <a href="mailto:hello@maikoti.in" style={styles.contactValue}>
                    hello@maikoti.in
                  </a>
                </div>
              </div>
              
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>📍</span>
                <div>
                  <span style={styles.contactLabel}>Location</span>
                  <span style={styles.contactValue}>
                    Maikoti, Rudraprayag<br />Uttarakhand, India
                  </span>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div style={styles.newsletter}>
              <h5 style={styles.newsletterTitle}>Stay Updated</h5>
              <p style={styles.newsletterText}>
                Get the latest news about events and attractions in Maikoti
              </p>
              <div style={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={styles.newsletterInput}
                />
                <button style={styles.newsletterButton}>
                  <span>📨</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={styles.bottomSection}>
          <div style={styles.bottomContent}>
            <div style={styles.copyright}>
              <p style={styles.copyrightText}>
                © {currentYear} Maikoti Village. Made with ❤️ for preserving mountain heritage.
              </p>
            </div>
            
            <div style={styles.bottomLinks}>
              <a href="#" style={styles.bottomLink}>Privacy Policy</a>
              <span style={styles.separator}>•</span>
              <a href="#" style={styles.bottomLink}>Terms of Service</a>
              <span style={styles.separator}>•</span>
              <a href="#" style={styles.bottomLink}>Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    position: "relative",
    background: "linear-gradient(135deg, var(--gray-900) 0%, var(--gray-800) 100%)",
    color: "white",
    overflow: "hidden",
  },
  waveContainer: {
    position: "relative",
    height: "60px",
    overflow: "hidden",
  },
  wave: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "60px",
  },
  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 var(--space-4)",
  },
  mainContent: {
    display: "grid",
    gridTemplateColumns: "2fr 2fr 1.5fr",
    gap: "var(--space-12)",
    padding: "var(--space-16) 0",
  },
  brandSection: {
    maxWidth: "400px",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "var(--space-3)",
    marginBottom: "var(--space-4)",
  },
  logoIcon: {
    fontSize: "var(--text-3xl)",
    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
  },
  logo: {
    fontSize: "var(--text-2xl)",
    fontWeight: "800",
    background: "var(--gradient-primary)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    letterSpacing: "0.5px",
  },
  brandDescription: {
    fontSize: "var(--text-base)",
    color: "var(--gray-300)",
    lineHeight: "1.6",
    marginBottom: "var(--space-6)",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "var(--space-4)",
    marginBottom: "var(--space-8)",
  },
  statItem: {
    textAlign: "center",
    padding: "var(--space-3)",
    background: "rgba(255, 255, 255, 0.05)",
    borderRadius: "var(--radius-lg)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },
  statNumber: {
    display: "block",
    fontSize: "var(--text-xl)",
    fontWeight: "800",
    color: "var(--secondary-400)",
    lineHeight: "1",
  },
  statLabel: {
    fontSize: "var(--text-xs)",
    color: "var(--gray-400)",
    fontWeight: "500",
  },
  socialSection: {
    marginTop: "var(--space-6)",
  },
  socialTitle: {
    fontSize: "var(--text-base)",
    fontWeight: "600",
    marginBottom: "var(--space-3)",
    color: "white",
  },
  socialLinks: {
    display: "flex",
    gap: "var(--space-3)",
  },
  socialLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "44px",
    height: "44px",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "var(--radius-lg)",
    textDecoration: "none",
    transition: "var(--transition-normal)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
  socialIcon: {
    fontSize: "var(--text-lg)",
  },
  linksSection: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "var(--space-8)",
  },
  linkColumn: {},
  linkHeading: {
    fontSize: "var(--text-lg)",
    fontWeight: "700",
    marginBottom: "var(--space-4)",
    color: "white",
  },
  linkList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  footerLink: {
    display: "block",
    fontSize: "var(--text-sm)",
    color: "var(--gray-400)",
    textDecoration: "none",
    padding: "var(--space-1) 0",
    transition: "var(--transition-normal)",
    borderRadius: "var(--radius-sm)",
  },
  contactSection: {},
  contactHeading: {
    fontSize: "var(--text-lg)",
    fontWeight: "700",
    marginBottom: "var(--space-4)",
    color: "white",
  },
  contactInfo: {
    marginBottom: "var(--space-6)",
  },
  contactItem: {
    display: "flex",
    gap: "var(--space-3)",
    marginBottom: "var(--space-4)",
    alignItems: "flex-start",
  },
  contactIcon: {
    fontSize: "var(--text-lg)",
    marginTop: "var(--space-1)",
  },
  contactLabel: {
    display: "block",
    fontSize: "var(--text-xs)",
    fontWeight: "600",
    color: "var(--gray-400)",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    marginBottom: "var(--space-1)",
  },
  contactValue: {
    fontSize: "var(--text-sm)",
    color: "var(--gray-300)",
    textDecoration: "none",
    lineHeight: "1.4",
  },
  newsletter: {
    background: "rgba(255, 255, 255, 0.05)",
    padding: "var(--space-4)",
    borderRadius: "var(--radius-lg)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },
  newsletterTitle: {
    fontSize: "var(--text-base)",
    fontWeight: "600",
    marginBottom: "var(--space-2)",
    color: "white",
  },
  newsletterText: {
    fontSize: "var(--text-sm)",
    color: "var(--gray-400)",
    marginBottom: "var(--space-3)",
    lineHeight: "1.4",
  },
  newsletterForm: {
    display: "flex",
    gap: "var(--space-2)",
  },
  newsletterInput: {
    flex: 1,
    padding: "var(--space-2) var(--space-3)",
    background: "rgba(255, 255, 255, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "var(--radius-md)",
    color: "white",
    fontSize: "var(--text-sm)",
  },
  newsletterButton: {
    padding: "var(--space-2) var(--space-3)",
    background: "var(--gradient-primary)",
    border: "none",
    borderRadius: "var(--radius-md)",
    color: "white",
    cursor: "pointer",
    transition: "var(--transition-normal)",
  },
  bottomSection: {
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    padding: "var(--space-6) 0",
  },
  bottomContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "var(--space-4)",
  },
  copyright: {},
  copyrightText: {
    fontSize: "var(--text-sm)",
    color: "var(--gray-400)",
  },
  bottomLinks: {
    display: "flex",
    alignItems: "center",
    gap: "var(--space-3)",
  },
  bottomLink: {
    fontSize: "var(--text-sm)",
    color: "var(--gray-400)",
    textDecoration: "none",
    transition: "var(--transition-normal)",
  },
  separator: {
    color: "var(--gray-600)",
    fontSize: "var(--text-sm)",
  },
};

// Add hover effects and responsive styles
if (typeof document !== 'undefined') {
  const footerStyles = `
    .footer-link:hover {
      color: var(--primary-400) !important;
      transform: translateX(4px) !important;
    }
    
    .footer-social-link:hover {
      background: var(--primary-500) !important;
      transform: translateY(-2px) !important;
      box-shadow: var(--shadow-lg) !important;
    }
    
    .footer-newsletter-button:hover {
      filter: brightness(1.1) !important;
      transform: scale(1.05) !important;
    }
    
    .footer-bottom-link:hover {
      color: var(--primary-400) !important;
    }
    
    .footer-newsletter-input:focus {
      outline: none !important;
      border-color: var(--primary-400) !important;
      background: rgba(255, 255, 255, 0.15) !important;
    }
    
    .footer-newsletter-input::placeholder {
      color: var(--gray-500) !important;
    }
    
    @media (max-width: 1024px) {
      .footer-main-content {
        grid-template-columns: 1fr 1fr !important;
        gap: var(--space-8) !important;
      }
      
      .footer-contact-section {
        grid-column: 1 / -1 !important;
      }
    }
    
    @media (max-width: 768px) {
      .footer-main-content {
        grid-template-columns: 1fr !important;
        gap: var(--space-8) !important;
      }
      
      .footer-links-section {
        grid-template-columns: 1fr 1fr !important;
        gap: var(--space-6) !important;
      }
      
      .footer-stats-grid {
        grid-template-columns: 1fr 1fr !important;
      }
      
      .footer-bottom-content {
        flex-direction: column !important;
        text-align: center !important;
      }
      
      .footer-social-links {
        justify-content: center !important;
      }
    }
    
    @media (max-width: 480px) {
      .footer-links-section {
        grid-template-columns: 1fr !important;
      }
      
      .footer-newsletter-form {
        flex-direction: column !important;
      }
    }
  `;
  
  const styleSheet = document.createElement('style');
  styleSheet.textContent = footerStyles;
  document.head.appendChild(styleSheet);
}

export default Footer;
