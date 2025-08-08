import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/images/village/haryalidevi.jpg_large";
import img2 from "../assets/images/village/haryalidhar2.png";
import img3 from "../assets/images/village/temple.png";
import img4 from "../assets/images/village/village4.jpg";
import img5 from "../assets/images/village/waterpool.png";
import img6 from "../assets/images/village/village1.jpg";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const heroImages = [img1, img2, img3, img4, img5, img6];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section style={styles.hero}>
      {/* Background with animated overlay */}
      <div style={styles.backgroundContainer}>
        <div style={styles.backgroundOverlay}></div>
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Maikoti ${index + 1}`}
            style={{
              ...styles.backgroundImage,
              opacity: currentImageIndex === index ? 0.3 : 0,
            }}
          />
        ))}
      </div>

      <div style={styles.container}>
        <div style={styles.content}>
          {/* Main Content */}
          <div style={{
            ...styles.textContent,
            ...(isVisible ? styles.fadeInUp : {})
          }}>
            <span style={styles.badge}>
              🌟 Discover Hidden Gems
            </span>
            
            <h1 style={styles.heading}>
              Journey to the Heart of{" "}
              <span style={styles.highlight}>Maikoti Village</span>
            </h1>
            
            <p style={styles.description}>
              Nestled in the majestic Himalayas, Maikoti offers an authentic glimpse into 
              traditional mountain life, ancient temples, and breathtaking natural beauty 
              that will leave you spellbound.
            </p>

            <div style={styles.stats}>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>2,000+</span>
                <span style={styles.statLabel}>Visitors Yearly</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>500+</span>
                <span style={styles.statLabel}>Years History</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>15+</span>
                <span style={styles.statLabel}>Sacred Temples</span>
              </div>
            </div>

            <div style={styles.buttonGroup}>
              <Link to="/plan" style={styles.primaryButton} className="btn btn-primary">
                <span>🗺️</span>
                Plan Your Journey
              </Link>
              <Link to="/gallery" style={styles.secondaryButton} className="btn btn-glass">
                <span>📸</span>
                Explore Gallery
              </Link>
            </div>
          </div>

          {/* Visual Elements */}
          <div style={styles.visualContent}>
            <div style={styles.imageGrid}>
              {heroImages.slice(0, 4).map((img, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.gridImage,
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <img
                    src={img}
                    alt={`Maikoti scene ${index + 1}`}
                    style={styles.image}
                  />
                  <div style={styles.imageOverlay}></div>
                </div>
              ))}
            </div>

            {/* Floating decorative elements */}
            <div style={styles.floatingElements}>
              <div style={{ ...styles.floatingElement, ...styles.float1 }}>🏔️</div>
              <div style={{ ...styles.floatingElement, ...styles.float2 }}>🌸</div>
              <div style={{ ...styles.floatingElement, ...styles.float3 }}>🕉️</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={styles.scrollIndicator}>
          <div style={styles.scrollMouse}>
            <div style={styles.scrollWheel}></div>
          </div>
          <span style={styles.scrollText}>Scroll to explore</span>
        </div>
      </div>

      {/* CSS Keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(5deg); }
          66% { transform: translateY(-10px) rotate(-3deg); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes scrollAnimation {
          0% { transform: translateY(-10px); opacity: 0; }
          50% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(10px); opacity: 0; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

const styles = {
  hero: {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    paddingTop: "80px", // Account for fixed navbar
  },
  backgroundContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  backgroundOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(135deg, rgba(6, 78, 59, 0.9) 0%, rgba(5, 150, 105, 0.8) 50%, rgba(16, 185, 129, 0.9) 100%)",
    zIndex: 1,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "opacity 2s ease-in-out",
  },
  container: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 var(--space-4)",
    width: "100%",
  },
  content: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "var(--space-16)",
    alignItems: "center",
    minHeight: "70vh",
  },
  textContent: {
    color: "white",
    opacity: 0,
    transform: "translateY(60px)",
    transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  fadeInUp: {
    opacity: 1,
    transform: "translateY(0)",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--space-2)",
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    padding: "var(--space-2) var(--space-4)",
    borderRadius: "var(--radius-full)",
    fontSize: "var(--text-sm)",
    fontWeight: "600",
    marginBottom: "var(--space-6)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },
  heading: {
    fontSize: "clamp(2.5rem, 5vw, 4rem)",
    fontWeight: "800",
    lineHeight: "1.1",
    marginBottom: "var(--space-6)",
    fontFamily: "var(--font-family-serif)",
  },
  highlight: {
    background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    position: "relative",
  },
  description: {
    fontSize: "var(--text-lg)",
    lineHeight: "1.7",
    marginBottom: "var(--space-8)",
    color: "rgba(255, 255, 255, 0.9)",
    maxWidth: "600px",
  },
  stats: {
    display: "flex",
    gap: "var(--space-8)",
    marginBottom: "var(--space-10)",
    flexWrap: "wrap",
  },
  statItem: {
    textAlign: "center",
  },
  statNumber: {
    display: "block",
    fontSize: "var(--text-3xl)",
    fontWeight: "800",
    color: "#fbbf24",
    lineHeight: "1",
  },
  statLabel: {
    fontSize: "var(--text-sm)",
    color: "rgba(255, 255, 255, 0.8)",
    fontWeight: "500",
  },
  buttonGroup: {
    display: "flex",
    gap: "var(--space-4)",
    flexWrap: "wrap",
  },
  primaryButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--space-2)",
    padding: "var(--space-4) var(--space-8)",
    background: "linear-gradient(135deg, #f59e0b, #d97706)",
    color: "white",
    textDecoration: "none",
    borderRadius: "var(--radius-full)",
    fontWeight: "700",
    fontSize: "var(--text-base)",
    boxShadow: "0 10px 30px rgba(245, 158, 11, 0.4)",
    transition: "all 0.3s ease",
    border: "none",
  },
  secondaryButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--space-2)",
    padding: "var(--space-4) var(--space-8)",
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(10px)",
    color: "white",
    textDecoration: "none",
    borderRadius: "var(--radius-full)",
    fontWeight: "600",
    fontSize: "var(--text-base)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    transition: "all 0.3s ease",
  },
  visualContent: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "var(--space-4)",
    maxWidth: "400px",
  },
  gridImage: {
    position: "relative",
    borderRadius: "var(--radius-2xl)",
    overflow: "hidden",
    aspectRatio: "1",
    animation: "float 6s ease-in-out infinite",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease",
  },
  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(45deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.1))",
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  floatingElements: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: "none",
  },
  floatingElement: {
    position: "absolute",
    fontSize: "2rem",
    animation: "float 4s ease-in-out infinite",
  },
  float1: {
    top: "10%",
    right: "10%",
    animationDelay: "0s",
  },
  float2: {
    bottom: "20%",
    left: "10%",
    animationDelay: "1s",
  },
  float3: {
    top: "60%",
    right: "20%",
    animationDelay: "2s",
  },
  scrollIndicator: {
    position: "absolute",
    bottom: "var(--space-8)",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "var(--space-2)",
    color: "rgba(255, 255, 255, 0.8)",
  },
  scrollMouse: {
    width: "24px",
    height: "40px",
    border: "2px solid rgba(255, 255, 255, 0.5)",
    borderRadius: "12px",
    position: "relative",
  },
  scrollWheel: {
    width: "4px",
    height: "8px",
    background: "white",
    borderRadius: "2px",
    position: "absolute",
    top: "6px",
    left: "50%",
    transform: "translateX(-50%)",
    animation: "scrollAnimation 2s infinite",
  },
  scrollText: {
    fontSize: "var(--text-xs)",
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
};

// Responsive styles
const mediaQueries = `
  @media (max-width: 768px) {
    .hero-content {
      grid-template-columns: 1fr !important;
      gap: var(--space-8) !important;
      text-align: center;
    }
    
    .hero-stats {
      justify-content: center !important;
    }
    
    .hero-buttons {
      justify-content: center !important;
    }
    
    .hero-visual {
      order: -1;
      max-width: 300px !important;
      margin: 0 auto;
    }
  }
`;

// Inject responsive styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = mediaQueries;
  document.head.appendChild(styleSheet);
}

export default HeroSection;
