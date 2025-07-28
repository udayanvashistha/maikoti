import React, { useEffect, useRef, useState } from "react";
import img1 from "../assets/images/village/haryalidevi.jpg_large";
import img2 from "../assets/images/home.jpg";
import img3 from "../assets/images/home.jpg";
import img4 from "../assets/images/village/temple.png";

const locations = [
  {
    title: "Haryali Devi Temple",
    desc: "A sacred temple dedicated to Haryali Devi, the goddess of nature and prosperity. Experience divine tranquility surrounded by lush greenery.",
    img: img1,
    category: "Sacred Sites",
    rating: 4.8,
    visitors: "1.2k+ visitors"
  },
  {
    title: "Narshingh Temple",
    desc: "An ancient temple devoted to Lord Narasimha, a powerful avatar of Vishnu. Marvel at the intricate stone carvings and spiritual atmosphere.",
    img: img2,
    category: "Heritage",
    rating: 4.7,
    visitors: "950+ visitors"
  },
  {
    title: "Bugani Market",
    desc: "Experience local culture at this vibrant traditional market. Fresh mountain produce, handcrafted items, and authentic Himalayan flavors await.",
    img: img3,
    category: "Cultural",
    rating: 4.6,
    visitors: "2.1k+ visitors"
  },
  {
    title: "Padmavati Temple",
    desc: "A serene temple dedicated to Goddess Padmavati, known for its peaceful ambiance and beautiful mountain views that inspire meditation.",
    img: img4,
    category: "Spiritual",
    rating: 4.9,
    visitors: "800+ visitors"
  },
];

const TopLocations = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate cards one by one
            locations.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div style={styles.starRating}>
        {[...Array(fullStars)].map((_, i) => (
          <span key={i} style={styles.starFull}>⭐</span>
        ))}
        {hasHalfStar && <span style={styles.starHalf}>⭐</span>}
        <span style={styles.ratingText}>{rating}</span>
      </div>
    );
  };

  return (
    <section ref={sectionRef} style={styles.section}>
      <div style={styles.container}>
        {/* Section Header */}
        <div style={styles.header}>
          <div style={styles.headerBadge}>
            ✨ Discover Amazing Places
          </div>
          <h2 style={styles.heading}>
            Top Destinations in <span style={styles.highlight}>Maikoti Village</span>
          </h2>
          <p style={styles.subheading}>
            Explore the most captivating locations that showcase the rich heritage, 
            spiritual essence, and natural beauty of our mountain village.
          </p>
        </div>

        {/* Locations Grid */}
        <div style={styles.grid}>
          {locations.map((location, index) => (
            <div
              key={index}
              style={{
                ...styles.card,
                ...(visibleCards.includes(index) ? styles.cardVisible : styles.cardHidden),
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Card Image */}
              <div style={styles.imageContainer}>
                <img 
                  src={location.img} 
                  alt={location.title} 
                  style={styles.image}
                />
                <div style={styles.imageOverlay}>
                  <span style={styles.category}>{location.category}</span>
                  <div style={styles.visitorsCount}>
                    <span style={styles.visitorsIcon}>👥</span>
                    {location.visitors}
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div style={styles.content}>
                <div style={styles.titleRow}>
                  <h3 style={styles.title}>{location.title}</h3>
                  <StarRating rating={location.rating} />
                </div>
                
                <p style={styles.description}>{location.desc}</p>
                
                <div style={styles.cardFooter}>
                  <button style={styles.exploreButton}>
                    <span style={styles.buttonIcon}>📍</span>
                    Explore Location
                  </button>
                  <button style={styles.shareButton}>
                    <span style={styles.buttonIcon}>🔗</span>
                  </button>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div style={styles.hoverOverlay}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={styles.ctaSection}>
          <div style={styles.ctaContent}>
            <h3 style={styles.ctaTitle}>Ready to explore Maikoti?</h3>
            <p style={styles.ctaDescription}>
              Plan your journey and discover the hidden gems of our beautiful village.
            </p>
            <button style={styles.ctaButton}>
              <span>🗺️</span>
              Start Planning Your Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: "var(--gray-50)",
    padding: "var(--space-24) 0",
    position: "relative",
    overflow: "hidden",
  },
  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 var(--space-4)",
  },
  header: {
    textAlign: "center",
    marginBottom: "var(--space-16)",
    maxWidth: "800px",
    margin: "0 auto var(--space-16)",
  },
  headerBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--space-2)",
    background: "var(--gradient-primary)",
    color: "white",
    padding: "var(--space-2) var(--space-4)",
    borderRadius: "var(--radius-full)",
    fontSize: "var(--text-sm)",
    fontWeight: "600",
    marginBottom: "var(--space-4)",
    boxShadow: "var(--shadow-lg)",
  },
  heading: {
    fontSize: "clamp(2rem, 4vw, 3.5rem)",
    fontWeight: "800",
    color: "var(--gray-900)",
    marginBottom: "var(--space-4)",
    fontFamily: "var(--font-family-serif)",
    lineHeight: "1.2",
  },
  highlight: {
    background: "var(--gradient-primary)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  subheading: {
    fontSize: "var(--text-lg)",
    color: "var(--gray-600)",
    lineHeight: "1.6",
    maxWidth: "600px",
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "var(--space-8)",
    marginBottom: "var(--space-16)",
  },
  card: {
    position: "relative",
    background: "white",
    borderRadius: "var(--radius-2xl)",
    overflow: "hidden",
    boxShadow: "var(--shadow-lg)",
    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    border: "1px solid var(--gray-200)",
  },
  cardHidden: {
    opacity: 0,
    transform: "translateY(60px) scale(0.95)",
  },
  cardVisible: {
    opacity: 1,
    transform: "translateY(0) scale(1)",
  },
  imageContainer: {
    position: "relative",
    height: "250px",
    overflow: "hidden",
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
    background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, transparent 50%, rgba(0,0,0,0.8) 100%)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "var(--space-4)",
  },
  category: {
    background: "rgba(255, 255, 255, 0.9)",
    color: "var(--primary-700)",
    padding: "var(--space-1) var(--space-3)",
    borderRadius: "var(--radius-full)",
    fontSize: "var(--text-xs)",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  visitorsCount: {
    display: "flex",
    alignItems: "center",
    gap: "var(--space-1)",
    background: "rgba(0, 0, 0, 0.7)",
    color: "white",
    padding: "var(--space-1) var(--space-3)",
    borderRadius: "var(--radius-full)",
    fontSize: "var(--text-xs)",
    fontWeight: "600",
  },
  visitorsIcon: {
    fontSize: "var(--text-sm)",
  },
  content: {
    padding: "var(--space-6)",
  },
  titleRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "var(--space-3)",
    gap: "var(--space-4)",
  },
  title: {
    fontSize: "var(--text-xl)",
    fontWeight: "700",
    color: "var(--gray-900)",
    lineHeight: "1.3",
    flex: 1,
  },
  starRating: {
    display: "flex",
    alignItems: "center",
    gap: "var(--space-1)",
    flexShrink: 0,
  },
  starFull: {
    fontSize: "var(--text-sm)",
    filter: "grayscale(0)",
  },
  starHalf: {
    fontSize: "var(--text-sm)",
    filter: "grayscale(50%)",
  },
  ratingText: {
    fontSize: "var(--text-sm)",
    fontWeight: "600",
    color: "var(--gray-700)",
    marginLeft: "var(--space-1)",
  },
  description: {
    fontSize: "var(--text-sm)",
    color: "var(--gray-600)",
    lineHeight: "1.6",
    marginBottom: "var(--space-5)",
  },
  cardFooter: {
    display: "flex",
    gap: "var(--space-3)",
    alignItems: "center",
  },
  exploreButton: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-2)",
    padding: "var(--space-3) var(--space-4)",
    background: "var(--gradient-primary)",
    color: "white",
    border: "none",
    borderRadius: "var(--radius-lg)",
    fontSize: "var(--text-sm)",
    fontWeight: "600",
    cursor: "pointer",
    transition: "var(--transition-normal)",
  },
  shareButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "44px",
    height: "44px",
    background: "var(--gray-100)",
    color: "var(--gray-600)",
    border: "none",
    borderRadius: "var(--radius-lg)",
    cursor: "pointer",
    transition: "var(--transition-normal)",
  },
  buttonIcon: {
    fontSize: "var(--text-sm)",
  },
  hoverOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "var(--gradient-primary)",
    opacity: 0,
    transition: "opacity 0.3s ease",
    pointerEvents: "none",
    mixBlendMode: "multiply",
  },
  ctaSection: {
    background: "var(--gradient-primary)",
    borderRadius: "var(--radius-2xl)",
    padding: "var(--space-12)",
    textAlign: "center",
    color: "white",
    position: "relative",
    overflow: "hidden",
  },
  ctaContent: {
    position: "relative",
    zIndex: 2,
  },
  ctaTitle: {
    fontSize: "var(--text-3xl)",
    fontWeight: "800",
    marginBottom: "var(--space-4)",
    fontFamily: "var(--font-family-serif)",
  },
  ctaDescription: {
    fontSize: "var(--text-lg)",
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: "var(--space-6)",
    maxWidth: "500px",
    margin: "0 auto var(--space-6)",
  },
  ctaButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--space-2)",
    padding: "var(--space-4) var(--space-8)",
    background: "white",
    color: "var(--primary-600)",
    border: "none",
    borderRadius: "var(--radius-full)",
    fontSize: "var(--text-base)",
    fontWeight: "700",
    cursor: "pointer",
    transition: "var(--transition-normal)",
    boxShadow: "var(--shadow-lg)",
  },
};

// Add hover effects
if (typeof document !== 'undefined') {
  const hoverStyles = `
    .top-locations-card:hover {
      transform: translateY(-8px) !important;
      box-shadow: var(--shadow-2xl) !important;
    }
    
    .top-locations-card:hover .card-image {
      transform: scale(1.1) !important;
    }
    
    .top-locations-card:hover .card-hover-overlay {
      opacity: 0.05 !important;
    }
    
    .top-locations-explore-btn:hover {
      filter: brightness(1.1) !important;
      transform: translateY(-2px) !important;
    }
    
    .top-locations-share-btn:hover {
      background: var(--primary-100) !important;
      color: var(--primary-600) !important;
    }
    
    .top-locations-cta-btn:hover {
      transform: translateY(-3px) !important;
      box-shadow: var(--shadow-xl) !important;
    }
    
    @media (max-width: 768px) {
      .top-locations-grid {
        grid-template-columns: 1fr !important;
        gap: var(--space-6) !important;
      }
      
      .top-locations-card {
        margin: 0 var(--space-2) !important;
      }
    }
  `;
  
  const styleSheet = document.createElement('style');
  styleSheet.textContent = hoverStyles;
  document.head.appendChild(styleSheet);
}

export default TopLocations;
