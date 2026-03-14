import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./PlanYourVisit.css";

const PlanYourVisit = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const infoCards = [
    {
      icon: "🛕",
      title: "Nearby Attractions",
      description: "Visit Kartik Swami, Haryali Devi Temple, and the picturesque nature trails.",
      color: "#0ea5e9",
    },
    {
      icon: "🚗",
      title: "How to Reach",
      description: "If you have your own vehicle, first reach Tilwara via the Kedarnath highway, then take the Tilwara–Maikoti road. For public transport, take a taxi from Rudraprayag taxi stand.",
      color: "#10b981",
    },
    {
      icon: "🏡",
      title: "Nearby Stay Options",
      description: "While Maikoti village doesn't have homestays yet, cozy accommodations are available just 3 km away. Homestay facilities may emerge in the village as tourism grows.",
      color: "#f59e0b",
    },
    {
      icon: "📅",
      title: "Best Time to Visit",
      description: "June is ideal for witnessing the Narsingh Mandir festivities and community Yagyas. August also features local rituals. The village remains cool year-round, but avoid late June to mid-August due to rains.",
      color: "#8b5cf6",
    },
  ];

  return (
    <div style={styles.wrapper}>
      <Navbar />
      
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <div style={{
            ...styles.heroText,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          }}>
            <span style={styles.badge}>🗺️ Your Journey Awaits</span>
            <h1 style={styles.heroTitle}>Plan Your Visit to <span style={styles.highlight}>Maikoti</span></h1>
            <p style={styles.heroSubtitle}>
              Experience the culture, connect with nature, and enjoy the serenity of Maikoti. 
              Whether you're an adventurer, a spiritual seeker, or simply someone looking for peace — Maikoti welcomes you.
            </p>
            <div style={styles.contactBox}>
              <span style={styles.contactIcon}>📧</span>
              <div>
                <span style={styles.contactLabel}>Have Questions?</span>
                <a href="mailto:support@maikoti.in" style={styles.contactEmail}>support@maikoti.in</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Everything You Need to Know</h2>
            <p style={styles.sectionSubtitle}>
              Essential information to help you plan the perfect trip to our mountain paradise
            </p>
          </div>

          <div style={styles.infoGrid}>
            {infoCards.map((card, index) => (
              <div 
                key={index} 
                style={{
                  ...styles.card,
                  animationDelay: `${index * 0.1}s`,
                }}
                className="plan-card"
              >
                <div style={{
                  ...styles.cardIconWrapper,
                  background: `linear-gradient(135deg, ${card.color}22 0%, ${card.color}11 100%)`,
                }}>
                  <span style={styles.cardIcon}>{card.icon}</span>
                </div>
                <h3 style={styles.cardTitle}>{card.title}</h3>
                <p style={styles.cardDescription}>{card.description}</p>
                <div style={{
                  ...styles.cardAccent,
                  background: card.color,
                }}></div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div style={styles.ctaSection}>
            <div style={styles.ctaCard}>
              <h3 style={styles.ctaTitle}>Ready to Explore?</h3>
              <p style={styles.ctaText}>
                Check out our gallery to see the breathtaking beauty of Maikoti or get in touch with us for personalized assistance.
              </p>
              <div style={styles.ctaButtons}>
                <button 
                  onClick={() => navigate('/gallery')} 
                  style={styles.ctaButtonPrimary}
                  className="cta-button-primary"
                >
                  <span>📸</span>
                  <span>View Gallery</span>
                </button>
                <button 
                  onClick={() => navigate('/ContactForm')} 
                  style={styles.ctaButtonSecondary}
                  className="cta-button-secondary"
                >
                  <span>💬</span>
                  <span>Contact Us</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "var(--gray-50)",
  },
  heroSection: {
    position: "relative",
    minHeight: "70vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
    overflow: "hidden",
    marginTop: "80px",
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    background: "radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)",
    pointerEvents: "none",
  },
  heroContent: {
    position: "relative",
    maxWidth: "900px",
    margin: "0 auto",
    padding: "0 var(--space-6)",
    textAlign: "center",
    zIndex: 1,
  },
  heroText: {
    transition: "all 0.8s ease-out",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--space-2)",
    background: "rgba(255, 255, 255, 0.25)",
    backdropFilter: "blur(10px)",
    color: "white",
    padding: "var(--space-2) var(--space-4)",
    borderRadius: "var(--radius-full)",
    fontSize: "var(--text-sm)",
    fontWeight: "600",
    marginBottom: "var(--space-6)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },
  heroTitle: {
    fontSize: "clamp(2.5rem, 5vw, 4rem)",
    fontWeight: "800",
    color: "white",
    marginBottom: "var(--space-6)",
    fontFamily: "var(--font-family-serif)",
    lineHeight: "1.1",
    textShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
  },
  highlight: {
    background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  heroSubtitle: {
    fontSize: "var(--text-lg)",
    color: "rgba(255, 255, 255, 0.95)",
    lineHeight: "1.8",
    marginBottom: "var(--space-8)",
    maxWidth: "700px",
    margin: "0 auto var(--space-8)",
  },
  contactBox: {
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--space-4)",
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(20px)",
    padding: "var(--space-4) var(--space-6)",
    borderRadius: "var(--radius-2xl)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
  },
  contactIcon: {
    fontSize: "var(--text-3xl)",
  },
  contactLabel: {
    display: "block",
    fontSize: "var(--text-sm)",
    color: "rgba(255, 255, 255, 0.85)",
    marginBottom: "var(--space-1)",
    fontWeight: "500",
  },
  contactEmail: {
    fontSize: "var(--text-lg)",
    color: "white",
    fontWeight: "700",
    textDecoration: "none",
  },
  section: {
    padding: "var(--space-24) var(--space-4)",
    background: "var(--gray-50)",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  sectionHeader: {
    textAlign: "center",
    marginBottom: "var(--space-16)",
  },
  sectionTitle: {
    fontSize: "var(--text-4xl)",
    fontWeight: "800",
    color: "var(--gray-900)",
    marginBottom: "var(--space-4)",
    fontFamily: "var(--font-family-serif)",
  },
  sectionSubtitle: {
    fontSize: "var(--text-lg)",
    color: "var(--gray-600)",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: "1.6",
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "var(--space-8)",
    marginBottom: "var(--space-16)",
  },
  card: {
    position: "relative",
    background: "white",
    borderRadius: "var(--radius-2xl)",
    padding: "var(--space-8)",
    boxShadow: "var(--shadow-md)",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    overflow: "hidden",
    border: "1px solid var(--gray-200)",
  },
  cardIconWrapper: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "80px",
    height: "80px",
    borderRadius: "var(--radius-2xl)",
    marginBottom: "var(--space-6)",
    transition: "transform 0.4s ease",
  },
  cardIcon: {
    fontSize: "var(--text-5xl)",
  },
  cardTitle: {
    fontSize: "var(--text-xl)",
    fontWeight: "700",
    color: "var(--gray-900)",
    marginBottom: "var(--space-4)",
  },
  cardDescription: {
    fontSize: "var(--text-base)",
    color: "var(--gray-600)",
    lineHeight: "1.7",
  },
  cardAccent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "4px",
    transition: "height 0.4s ease",
  },
  ctaSection: {
    marginTop: "var(--space-16)",
  },
  ctaCard: {
    background: "linear-gradient(135deg, var(--primary-600) 0%, var(--secondary-500) 100%)",
    borderRadius: "var(--radius-2xl)",
    padding: "var(--space-12) var(--space-8)",
    textAlign: "center",
    boxShadow: "var(--shadow-2xl)",
    position: "relative",
    overflow: "hidden",
  },
  ctaTitle: {
    fontSize: "var(--text-3xl)",
    fontWeight: "800",
    color: "white",
    marginBottom: "var(--space-4)",
    fontFamily: "var(--font-family-serif)",
  },
  ctaText: {
    fontSize: "var(--text-lg)",
    color: "rgba(255, 255, 255, 0.95)",
    marginBottom: "var(--space-8)",
    maxWidth: "600px",
    margin: "0 auto var(--space-8)",
    lineHeight: "1.6",
  },
  ctaButtons: {
    display: "flex",
    gap: "var(--space-4)",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  ctaButtonPrimary: {
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--space-2)",
    background: "white",
    color: "var(--primary-600)",
    padding: "var(--space-4) var(--space-8)",
    borderRadius: "var(--radius-xl)",
    border: "none",
    fontSize: "var(--text-base)",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "var(--shadow-lg)",
  },
  ctaButtonSecondary: {
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--space-2)",
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(10px)",
    color: "white",
    padding: "var(--space-4) var(--space-8)",
    borderRadius: "var(--radius-xl)",
    border: "2px solid rgba(255, 255, 255, 0.5)",
    fontSize: "var(--text-base)",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};

export default PlanYourVisit;
