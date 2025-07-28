import React, { useEffect, useRef, useState } from "react";
import img1 from "../assets/images/village/village1.jpg";
import img2 from "../assets/images/village/pexel/pexel1.jpg";
import img3 from "../assets/images/village/pexel/pexel7.jpg";
import img4 from "../assets/images/village/pexel/pexel3.jpg";
import img5 from "../assets/images/village/pexel/pexel4.jpg";
import img6 from "../assets/images/village/pexel/pexel5.jpg";

const moments = [
  { 
    src: img1, 
    title: "Village Landscape", 
    description: "Breathtaking panoramic views",
    category: "Nature",
    photographer: "Local Resident"
  },
  { 
    src: img2, 
    title: "Morning Serenity", 
    description: "Dawn breaking over the mountains",
    category: "Landscape",
    photographer: "Village Explorer"
  },
  { 
    src: img3, 
    title: "Traditional Architecture", 
    description: "Ancient building heritage",
    category: "Heritage",
    photographer: "Cultural Enthusiast"
  },
  { 
    src: img4, 
    title: "Temple Gardens", 
    description: "Sacred spaces in nature",
    category: "Spiritual",
    photographer: "Pilgrim Photographer"
  },
  { 
    src: img5, 
    title: "Mountain Paths", 
    description: "Trails through time",
    category: "Adventure",
    photographer: "Trek Guide"
  },
  { 
    src: img6, 
    title: "Evening Light", 
    description: "Golden hour magic",
    category: "Photography",
    photographer: "Nature Lover"
  },
];

const FeaturedMoments = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            moments.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 150);
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

  return (
    <section ref={sectionRef} style={styles.section}>
      <div style={styles.container}>
        {/* Section Header */}
        <div style={styles.header}>
          <span style={styles.badge}>
            📸 Captured Beauty
          </span>
          <h2 style={styles.heading}>
            Featured <span style={styles.highlight}>Moments</span>
          </h2>
          <p style={styles.subheading}>
            Experience the magic of Maikoti through the lens of passionate photographers 
            who have captured the essence of our mountain village.
          </p>
        </div>

        {/* Gallery Grid */}
        <div style={styles.gallery}>
          {moments.map((moment, index) => (
            <div
              key={index}
              style={{
                ...styles.card,
                ...(visibleCards.includes(index) ? styles.cardVisible : styles.cardHidden),
                animationDelay: `${index * 0.1}s`,
              }}
              onClick={() => setSelectedImage(moment)}
            >
              {/* Image Container */}
              <div style={styles.imageContainer}>
                <img 
                  src={moment.src} 
                  alt={moment.title} 
                  style={styles.image}
                />
                <div style={styles.imageOverlay}>
                  <span style={styles.category}>{moment.category}</span>
                  <button style={styles.expandButton}>
                    <span style={styles.expandIcon}>🔍</span>
                  </button>
                </div>
              </div>

              {/* Card Content */}
              <div style={styles.content}>
                <h3 style={styles.title}>{moment.title}</h3>
                <p style={styles.description}>{moment.description}</p>
                
                <div style={styles.photographer}>
                  <span style={styles.photographerIcon}>📷</span>
                  <span style={styles.photographerName}>{moment.photographer}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={styles.cta}>
          <h3 style={styles.ctaTitle}>Share Your Moments</h3>
          <p style={styles.ctaDescription}>
            Have you captured the beauty of Maikoti? Share your photographs with us!
          </p>
          <button style={styles.ctaButton}>
            <span>📤</span>
            Submit Your Photos
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          style={styles.lightbox}
          onClick={() => setSelectedImage(null)}
        >
          <div style={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button 
              style={styles.closeButton}
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title}
              style={styles.lightboxImage}
            />
            <div style={styles.lightboxInfo}>
              <h3 style={styles.lightboxTitle}>{selectedImage.title}</h3>
              <p style={styles.lightboxDescription}>{selectedImage.description}</p>
              <div style={styles.lightboxMeta}>
                <span style={styles.lightboxCategory}>{selectedImage.category}</span>
                <span style={styles.lightboxPhotographer}>by {selectedImage.photographer}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const styles = {
  section: {
    padding: "var(--space-24) 0",
    background: "linear-gradient(135deg, var(--secondary-50) 0%, var(--primary-50) 100%)",
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
  badge: {
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
  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "var(--space-6)",
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
    background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, transparent 50%, rgba(0,0,0,0.7) 100%)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "var(--space-4)",
    opacity: 0,
    transition: "opacity 0.3s ease",
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
  expandButton: {
    background: "rgba(0, 0, 0, 0.7)",
    color: "white",
    border: "none",
    borderRadius: "var(--radius-full)",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "var(--transition-normal)",
  },
  expandIcon: {
    fontSize: "var(--text-base)",
  },
  content: {
    padding: "var(--space-5)",
  },
  title: {
    fontSize: "var(--text-xl)",
    fontWeight: "700",
    color: "var(--gray-900)",
    marginBottom: "var(--space-2)",
    lineHeight: "1.3",
  },
  description: {
    fontSize: "var(--text-sm)",
    color: "var(--gray-600)",
    lineHeight: "1.5",
    marginBottom: "var(--space-3)",
  },
  photographer: {
    display: "flex",
    alignItems: "center",
    gap: "var(--space-2)",
    fontSize: "var(--text-xs)",
    color: "var(--gray-500)",
    fontWeight: "500",
  },
  photographerIcon: {
    fontSize: "var(--text-sm)",
  },
  photographerName: {},
  cta: {
    textAlign: "center",
    background: "white",
    padding: "var(--space-12)",
    borderRadius: "var(--radius-2xl)",
    boxShadow: "var(--shadow-xl)",
    border: "1px solid var(--gray-200)",
  },
  ctaTitle: {
    fontSize: "var(--text-3xl)",
    fontWeight: "800",
    color: "var(--gray-900)",
    marginBottom: "var(--space-4)",
    fontFamily: "var(--font-family-serif)",
  },
  ctaDescription: {
    fontSize: "var(--text-lg)",
    color: "var(--gray-600)",
    marginBottom: "var(--space-6)",
    maxWidth: "500px",
    margin: "0 auto var(--space-6)",
  },
  ctaButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--space-2)",
    padding: "var(--space-4) var(--space-8)",
    background: "var(--gradient-primary)",
    color: "white",
    border: "none",
    borderRadius: "var(--radius-full)",
    fontSize: "var(--text-base)",
    fontWeight: "700",
    cursor: "pointer",
    transition: "var(--transition-normal)",
    boxShadow: "var(--shadow-lg)",
  },
  // Lightbox styles
  lightbox: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.9)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10000,
    backdropFilter: "blur(10px)",
    padding: "var(--space-4)",
  },
  lightboxContent: {
    position: "relative",
    maxWidth: "90vw",
    maxHeight: "90vh",
    background: "white",
    borderRadius: "var(--radius-2xl)",
    overflow: "hidden",
    boxShadow: "var(--shadow-2xl)",
  },
  closeButton: {
    position: "absolute",
    top: "var(--space-4)",
    right: "var(--space-4)",
    background: "rgba(0, 0, 0, 0.7)",
    color: "white",
    border: "none",
    borderRadius: "var(--radius-full)",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 1,
    fontSize: "var(--text-lg)",
    fontWeight: "bold",
  },
  lightboxImage: {
    width: "100%",
    maxHeight: "70vh",
    objectFit: "contain",
    display: "block",
  },
  lightboxInfo: {
    padding: "var(--space-6)",
  },
  lightboxTitle: {
    fontSize: "var(--text-2xl)",
    fontWeight: "700",
    color: "var(--gray-900)",
    marginBottom: "var(--space-2)",
  },
  lightboxDescription: {
    fontSize: "var(--text-base)",
    color: "var(--gray-600)",
    marginBottom: "var(--space-4)",
    lineHeight: "1.6",
  },
  lightboxMeta: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "var(--space-4)",
  },
  lightboxCategory: {
    background: "var(--primary-100)",
    color: "var(--primary-700)",
    padding: "var(--space-1) var(--space-3)",
    borderRadius: "var(--radius-full)",
    fontSize: "var(--text-xs)",
    fontWeight: "600",
    textTransform: "uppercase",
  },
  lightboxPhotographer: {
    fontSize: "var(--text-sm)",
    color: "var(--gray-500)",
    fontStyle: "italic",
  },
};

// Add hover effects
if (typeof document !== 'undefined') {
  const galleryStyles = `
    .featured-moments-card:hover {
      transform: translateY(-8px) !important;
      box-shadow: var(--shadow-2xl) !important;
    }
    
    .featured-moments-card:hover .card-image {
      transform: scale(1.1) !important;
    }
    
    .featured-moments-card:hover .image-overlay {
      opacity: 1 !important;
    }
    
    .featured-moments-expand-btn:hover {
      background: var(--primary-600) !important;
      transform: scale(1.1) !important;
    }
    
    .featured-moments-cta-btn:hover {
      transform: translateY(-3px) !important;
      box-shadow: var(--shadow-xl) !important;
      filter: brightness(1.1) !important;
    }
    
    @media (max-width: 768px) {
      .featured-moments-gallery {
        grid-template-columns: 1fr !important;
        gap: var(--space-4) !important;
      }
      
      .featured-moments-lightbox-content {
        margin: var(--space-4) !important;
        max-width: calc(100vw - 2rem) !important;
      }
    }
  `;
  
  const styleSheet = document.createElement('style');
  styleSheet.textContent = galleryStyles;
  document.head.appendChild(styleSheet);
}

export default FeaturedMoments;
