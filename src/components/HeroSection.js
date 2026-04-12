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
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1280
  );

  const heroImages = [img1, img2, img3, img4, img5, img6];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isTablet = viewportWidth <= 1100;
  const isMobile = viewportWidth <= 768;
  const imageCardTransforms = isMobile
    ? [{}, {}, {}, {}]
    : [
        { transform: "translateY(-10px) rotate(-2deg)" },
        { transform: "translateY(-6px) rotate(2deg)" },
        { transform: "translateY(8px) rotate(-1.5deg)" },
        { transform: "translateY(12px) rotate(1.5deg)" },
      ];

  return (
    <section
      style={{
        ...styles.hero,
        ...(isTablet ? styles.heroTablet : {}),
        ...(isMobile ? styles.heroMobile : {}),
      }}
    >
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

      <div
        style={{
          ...styles.container,
          ...(isMobile ? styles.containerMobile : {}),
        }}
      >
        <div
          style={{
            ...styles.content,
            ...(isTablet ? styles.contentTablet : {}),
            ...(isMobile ? styles.contentMobile : {}),
          }}
        >
          {/* Main Content */}
          <div
            style={{
              ...styles.textContent,
              ...styles.fadeInUp,
              ...(isVisible ? { animation: "fadeInUp 1s ease-out" } : {}),
              ...(isMobile ? styles.textContentMobile : {}),
            }}
          >
            <span style={styles.badge}>Discover Hidden Gems</span>

            <h1
              style={{
                ...styles.heading,
                ...(isTablet ? styles.headingTablet : {}),
                ...(isMobile ? styles.headingMobile : {}),
              }}
            >
              Journey to the Heart of{" "}
              <span className="gradient-text-fallback" style={styles.highlight}>Maikoti Village</span>
            </h1>
            
            <p
              style={{
                ...styles.description,
                ...(isMobile ? styles.descriptionMobile : {}),
              }}
            >
              Nestled in the majestic Himalayas, Maikoti offers an authentic glimpse into
              traditional mountain life, ancient temples, and breathtaking natural beauty
              that will leave you spellbound.
            </p>

            <div
              style={{
                ...styles.stats,
                ...(isMobile ? styles.statsMobile : {}),
              }}
            >
              <div style={styles.statItem}>
                <span style={styles.statNumber}>100+</span>
                <span style={styles.statLabel}>Annual Visitors</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>500+</span>
                <span style={styles.statLabel}>Years History</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>5+</span>
                <span style={styles.statLabel}>Sacred Temples</span>
              </div>
            </div>

            <div
              style={{
                ...styles.buttonGroup,
                ...(isMobile ? styles.buttonGroupMobile : {}),
              }}
            >
              <Link to="/plan" style={styles.primaryButton} className="btn btn-primary">
                Plan Your Journey
              </Link>
              <Link to="/gallery" style={styles.secondaryButton} className="btn btn-glass">
                Explore Gallery
              </Link>
            </div>
          </div>

          {/* Visual Elements */}
          <div
            style={{
              ...styles.visualContent,
              ...(isTablet ? styles.visualContentTablet : {}),
              ...(isMobile ? styles.visualContentMobile : {}),
            }}
          >
            <div
              style={{
                ...styles.imageGrid,
                ...(isMobile ? styles.imageGridMobile : {}),
              }}
            >
              {heroImages.slice(0, 4).map((img, index) => (
                <div
                  key={index}
                  className="hero-grid-image"
                  style={{
                    ...styles.gridImage,
                    ...imageCardTransforms[index],
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <img
                    src={img}
                    alt={`Maikoti scene ${index + 1}`}
                    className="hero-grid-photo"
                    style={styles.image}
                  />
                  <div style={styles.imageOverlay}></div>
                </div>
              ))}
            </div>

            {/* Floating decorative elements */}
            {!isMobile ? (
              <div style={styles.floatingElements}>
                <div style={{ ...styles.floatingElement, ...styles.float1 }}>M</div>
                <div style={{ ...styles.floatingElement, ...styles.float2 }}>Village</div>
                <div style={{ ...styles.floatingElement, ...styles.float3 }}>Uttarakhand</div>
              </div>
            ) : null}
          </div>
        </div>

        {/* Scroll indicator */}
        {!isMobile ? (
          <div style={styles.scrollIndicator}>
            <div style={styles.scrollMouse}>
              <div style={styles.scrollWheel}></div>
            </div>
            <span style={styles.scrollText}>Scroll to explore</span>
          </div>
        ) : null}
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

        .hero-grid-image:hover .hero-grid-photo {
          transform: scale(1.08);
        }
      `}</style>
    </section>
  );
};

const styles = {
  hero: {
    position: "relative",
    minHeight: "min(94vh, 860px)",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    paddingTop: "92px",
    paddingBottom: "56px",
  },
  heroTablet: {
    minHeight: "auto",
    paddingBottom: "44px",
  },
  heroMobile: {
    paddingTop: "82px",
    paddingBottom: "28px",
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
    background:
      "linear-gradient(130deg, rgba(5, 24, 37, 0.86) 0%, rgba(9, 84, 89, 0.76) 45%, rgba(33, 106, 76, 0.78) 100%)",
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
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 var(--space-5)",
    width: "100%",
  },
  containerMobile: {
    padding: "0 var(--space-4)",
  },
  content: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.08fr) minmax(320px, 0.92fr)",
    gap: "clamp(1.5rem, 3vw, 3.75rem)",
    alignItems: "center",
  },
  contentTablet: {
    gridTemplateColumns: "1fr",
    gap: "var(--space-10)",
  },
  contentMobile: {
    gap: "var(--space-7)",
  },
  textContent: {
    color: "#f8fafc",
    padding: 0,
    position: "relative",
    zIndex: 10,
    maxWidth: "700px",
  },
  textContentMobile: {
    padding: 0,
  },
  fadeInUp: {
    opacity: 1,
    transform: "translateY(0)",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    background: "rgba(255, 255, 255, 0.78)",
    backdropFilter: "blur(4px)",
    padding: "0.45rem 0.82rem",
    borderRadius: "999px",
    fontSize: "0.78rem",
    fontWeight: "700",
    letterSpacing: "0.03em",
    marginBottom: "var(--space-4)",
    border: "1px solid rgba(15, 23, 42, 0.18)",
    color: "#0f172a",
    textTransform: "uppercase",
  },
  heading: {
    fontSize: "clamp(2.35rem, 4.5vw, 4.15rem)",
    fontWeight: "800",
    lineHeight: "1.05",
    marginBottom: "var(--space-5)",
    fontFamily: "var(--font-family-serif)",
    color: "#111827",
    maxWidth: "18ch",
  },
  headingTablet: {
    maxWidth: "100%",
  },
  headingMobile: {
    fontSize: "clamp(2rem, 9vw, 2.9rem)",
    lineHeight: "1.06",
    marginBottom: "var(--space-4)",
  },
  highlight: {
    background: "linear-gradient(120deg, #fde68a 0%, #bfdbfe 50%, #c4b5fd 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "#dbeafe",
  },
  description: {
    fontSize: "clamp(1.05rem, 1.35vw, 1.36rem)",
    lineHeight: "1.65",
    marginBottom: "var(--space-7)",
    color: "#334155",
    maxWidth: "58ch",
  },
  descriptionMobile: {
    fontSize: "1.02rem",
    lineHeight: "1.55",
    marginBottom: "var(--space-6)",
  },
  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(100px, 1fr))",
    gap: "0.75rem",
    marginBottom: "var(--space-8)",
    maxWidth: "560px",
  },
  statsMobile: {
    gridTemplateColumns: "repeat(3, minmax(82px, 1fr))",
    gap: "0.55rem",
    marginBottom: "var(--space-6)",
  },
  statItem: {
    textAlign: "center",
    background: "rgba(255, 255, 255, 0.74)",
    border: "1px solid rgba(15, 23, 42, 0.14)",
    borderRadius: "14px",
    padding: "0.72rem 0.55rem 0.62rem",
    backdropFilter: "blur(4px)",
  },
  statNumber: {
    display: "block",
    fontSize: "clamp(1.55rem, 2.25vw, 2.1rem)",
    fontWeight: "800",
    color: "#b45309",
    lineHeight: "1",
  },
  statLabel: {
    fontSize: "0.82rem",
    color: "#334155",
    fontWeight: "600",
    marginTop: "0.26rem",
    display: "block",
  },
  buttonGroup: {
    display: "flex",
    gap: "0.8rem",
    flexWrap: "wrap",
  },
  buttonGroupMobile: {
    flexDirection: "column",
    alignItems: "stretch",
  },
  primaryButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.86rem 1.45rem",
    background: "linear-gradient(135deg, #f59e0b, #d97706)",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "999px",
    fontWeight: "700",
    fontSize: "0.99rem",
    boxShadow: "0 12px 26px rgba(245, 158, 11, 0.36)",
    transition: "all 0.3s ease",
    border: "none",
  },
  secondaryButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.86rem 1.45rem",
    background: "rgba(255, 255, 255, 0.84)",
    backdropFilter: "blur(4px)",
    color: "#0f172a",
    textDecoration: "none",
    borderRadius: "999px",
    fontWeight: "600",
    fontSize: "0.99rem",
    border: "1px solid rgba(15, 23, 42, 0.2)",
    transition: "all 0.3s ease",
  },
  visualContent: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  visualContentTablet: {
    justifyContent: "flex-start",
  },
  visualContentMobile: {
    justifyContent: "center",
  },
  imageGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(150px, 1fr))",
    gap: "var(--space-4)",
    width: "min(100%, 440px)",
  },
  imageGridMobile: {
    gap: "0.65rem",
    width: "100%",
    maxWidth: "360px",
  },
  gridImage: {
    position: "relative",
    borderRadius: "22px",
    overflow: "hidden",
    aspectRatio: "1 / 1",
    animation: "float 6s ease-in-out infinite",
    boxShadow: "0 20px 40px rgba(2, 6, 23, 0.35)",
    border: "1px solid rgba(255, 255, 255, 0.28)",
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
    background:
      "linear-gradient(160deg, rgba(15, 23, 42, 0.16), rgba(16, 185, 129, 0.12))",
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
    fontSize: "0.74rem",
    fontWeight: "700",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "rgba(255, 255, 255, 0.84)",
    border: "1px solid rgba(255, 255, 255, 0.28)",
    background: "rgba(5, 24, 37, 0.52)",
    borderRadius: "999px",
    padding: "0.35rem 0.55rem",
    animation: "float 4s ease-in-out infinite",
  },
  float1: {
    top: "4%",
    right: "4%",
    animationDelay: "0s",
  },
  float2: {
    bottom: "8%",
    left: "-2%",
    animationDelay: "1s",
  },
  float3: {
    top: "68%",
    right: "-4%",
    animationDelay: "2s",
  },
  scrollIndicator: {
    position: "absolute",
    bottom: "var(--space-6)",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "var(--space-2)",
    color: "rgba(255, 255, 255, 0.8)",
  },
  scrollMouse: {
    width: "22px",
    height: "36px",
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
    fontSize: "0.7rem",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
};

export default HeroSection;
