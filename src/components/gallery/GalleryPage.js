import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/images/village/village1.jpg";
import img2 from "../../assets/images/village/village2.jpg";
import img3 from "../../assets/images/village/village3.jpg";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./GalleryPage.css";

const categories = ["All", "Nature", "People", "Culture", "Festivals"];

const GalleryPage = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 500);
  }, [selectedFilter]);

  const images = [
    { src: img2, category: "Nature" },
    { src: img3, category: "People" },
    { src: img1, category: "Culture" },
    { src: img1, category: "Festivals" },
    { src: img2, category: "Nature" },
    { src: img3, category: "People" },
    { src: img1, category: "Culture" },
    { src: img1, category: "Festivals" },
    { src: img2, category: "Nature" },
    { src: img3, category: "People" },
    { src: img1, category: "Culture" },
    { src: img1, category: "Festivals" },
    { src: img2, category: "Nature" },
    { src: img3, category: "People" },
    { src: img1, category: "Culture" },
  ];

  const filteredImages =
    selectedFilter === "All"
      ? images
      : images.filter((img) => img.category === selectedFilter);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <div style={styles.wrapper}>
      <Navbar />
      
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <span style={styles.badge}>📸 Visual Journey</span>
          <h1 style={styles.heroTitle}>Explore <span style={styles.highlight}>Maikoti Gallery</span></h1>
          <p style={styles.heroSubtitle}>
            Discover the breathtaking beauty of our village through the lens of local photographers and visitors
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section style={styles.gallerySection}>
        <div style={styles.container}>
          {/* Filter Pills */}
          <div style={styles.filterContainer}>
            <div style={styles.filterLabel}>Filter by:</div>
            <div style={styles.filterPills}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  style={{
                    ...styles.filterPill,
                    ...(selectedFilter === cat ? styles.filterPillActive : {}),
                  }}
                  className={selectedFilter === cat ? "filter-pill-active" : "filter-pill"}
                >
                  {cat}
                </button>
              ))}
            </div>
            <button 
              onClick={() => setModalOpen(true)} 
              style={styles.addButton}
              className="add-button"
            >
              <span>✚</span>
              <span>Add Photo</span>
            </button>
          </div>

          {/* Image Grid */}
          {isLoading ? (
            <div style={styles.loadingContainer}>
              <div style={styles.loader}></div>
              <p style={styles.loadingText}>Loading images...</p>
            </div>
          ) : (
            <div style={styles.grid}>
              {filteredImages.map((img, idx) => (
                <div 
                  key={idx} 
                  style={styles.card} 
                  onClick={() => openLightbox(idx)}
                  className="gallery-card"
                >
                  <div style={styles.imageWrapper}>
                    <img src={img.src} alt={`${img.category}-${idx}`} style={styles.image} />
                    <div style={styles.imageOverlay}>
                      <span style={styles.viewIcon}>🔍</span>
                      <p style={styles.overlayText}>Click to view</p>
                    </div>
                  </div>
                  <div style={styles.cardFooter}>
                    <span style={styles.categoryBadge}>{img.category}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Lightbox */}
      {lightboxOpen && (
        <div style={styles.lightbox} onClick={closeLightbox}>
          <div style={styles.lightboxHeader}>
            <div style={styles.lightboxInfo}>
              <span style={styles.lightboxCategory}>{filteredImages[currentIndex].category}</span>
              <span style={styles.lightboxCounter}>{currentIndex + 1} / {filteredImages.length}</span>
            </div>
            <button style={styles.lightboxClose} onClick={closeLightbox}>
              ✕
            </button>
          </div>
          
          <button 
            style={{...styles.lightboxNav, ...styles.lightboxNavPrev}} 
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="lightbox-nav"
          >
            ‹
          </button>
          
          <div style={styles.lightboxImageContainer} onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredImages[currentIndex].src}
              alt="Full View"
              style={styles.lightboxImage}
            />
          </div>
          
          <button 
            style={{...styles.lightboxNav, ...styles.lightboxNavNext}} 
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="lightbox-nav"
          >
            ›
          </button>
        </div>
      )}

      {/* Enhanced Modal */}
      {modalOpen && (
        <div style={styles.modalOverlay} onClick={() => setModalOpen(false)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h3 style={styles.modalTitle}>🖼️ Add New Image</h3>
              <button
                style={styles.modalCloseButton}
                onClick={() => setModalOpen(false)}
              >
                ✕
              </button>
            </div>
            <div style={styles.modalBody}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>User ID</label>
                <input type="text" placeholder="Enter your user ID" style={styles.input} />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Email</label>
                <input type="email" placeholder="your.email@example.com" style={styles.input} />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Category</label>
                <select style={styles.input}>
                  {categories.slice(1).map((cat) => (
                    <option key={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Image</label>
                <div style={styles.fileInputWrapper}>
                  <input type="file" accept="image/*" style={styles.fileInput} />
                  <div style={styles.fileInputLabel}>
                    <span>📎</span>
                    <span>Click to upload or drag and drop</span>
                  </div>
                </div>
              </div>
            </div>
            <div style={styles.modalFooter}>
              <button style={styles.uploadButton} className="upload-button">
                <span>☁️</span>
                <span>Upload Image</span>
              </button>
            </div>
          </div>
        </div>
      )}
      
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
    minHeight: "50vh",
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
    background: "radial-gradient(circle at 30% 50%, rgba(99, 102, 241, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)",
    pointerEvents: "none",
  },
  heroContent: {
    position: "relative",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "0 var(--space-6)",
    textAlign: "center",
    zIndex: 1,
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
    marginBottom: "var(--space-4)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },
  heroTitle: {
    fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
    fontWeight: "800",
    color: "white",
    marginBottom: "var(--space-4)",
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
    lineHeight: "1.7",
    maxWidth: "600px",
    margin: "0 auto",
  },
  gallerySection: {
    padding: "var(--space-16) var(--space-4)",
  },
  container: {
    maxWidth: "1400px",
    margin: "0 auto",
  },
  filterContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "var(--space-4)",
    marginBottom: "var(--space-12)",
    padding: "var(--space-6)",
    background: "white",
    borderRadius: "var(--radius-2xl)",
    boxShadow: "var(--shadow-md)",
  },
  filterLabel: {
    fontSize: "var(--text-base)",
    fontWeight: "600",
    color: "var(--gray-700)",
  },
  filterPills: {
    display: "flex",
    gap: "var(--space-2)",
    flexWrap: "wrap",
    flex: 1,
    justifyContent: "center",
  },
  filterPill: {
    padding: "var(--space-2) var(--space-5)",
    background: "var(--gray-100)",
    color: "var(--gray-700)",
    border: "2px solid transparent",
    borderRadius: "var(--radius-full)",
    fontSize: "var(--text-sm)",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  filterPillActive: {
    background: "var(--gradient-primary)",
    color: "white",
    boxShadow: "var(--shadow-md)",
  },
  addButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--space-2)",
    background: "var(--gradient-primary)",
    color: "white",
    border: "none",
    padding: "var(--space-3) var(--space-6)",
    borderRadius: "var(--radius-xl)",
    fontSize: "var(--text-sm)",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "var(--shadow-md)",
  },
  loadingContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "400px",
  },
  loader: {
    width: "50px",
    height: "50px",
    border: "4px solid var(--gray-200)",
    borderTop: "4px solid var(--primary-600)",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  loadingText: {
    marginTop: "var(--space-4)",
    fontSize: "var(--text-base)",
    color: "var(--gray-600)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "var(--space-6)",
  },
  card: {
    background: "white",
    borderRadius: "var(--radius-2xl)",
    overflow: "hidden",
    boxShadow: "var(--shadow-md)",
    cursor: "pointer",
    transition: "all 0.3s ease",
    border: "1px solid var(--gray-200)",
  },
  imageWrapper: {
    position: "relative",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    transition: "transform 0.4s ease",
  },
  imageOverlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-2)",
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  viewIcon: {
    fontSize: "var(--text-4xl)",
  },
  overlayText: {
    color: "white",
    fontSize: "var(--text-base)",
    fontWeight: "600",
  },
  cardFooter: {
    padding: "var(--space-4)",
  },
  categoryBadge: {
    display: "inline-flex",
    padding: "var(--space-1) var(--space-3)",
    background: "var(--primary-50)",
    color: "var(--primary-700)",
    borderRadius: "var(--radius-full)",
    fontSize: "var(--text-sm)",
    fontWeight: "600",
  },
  lightbox: {
    position: "fixed",
    inset: 0,
    background: "rgba(0, 0, 0, 0.95)",
    backdropFilter: "blur(10px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    padding: "var(--space-4)",
  },
  lightboxHeader: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "var(--space-6)",
    zIndex: 10000,
  },
  lightboxInfo: {
    display: "flex",
    gap: "var(--space-6)",
    alignItems: "center",
  },
  lightboxCategory: {
    padding: "var(--space-2) var(--space-4)",
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(10px)",
    color: "white",
    borderRadius: "var(--radius-full)",
    fontSize: "var(--text-sm)",
    fontWeight: "600",
  },
  lightboxCounter: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: "var(--text-sm)",
    fontWeight: "500",
  },
  lightboxClose: {
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(10px)",
    color: "white",
    border: "none",
    width: "44px",
    height: "44px",
    borderRadius: "var(--radius-full)",
    fontSize: "var(--text-2xl)",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  lightboxImageContainer: {
    maxWidth: "90vw",
    maxHeight: "85vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  lightboxImage: {
    maxWidth: "100%",
    maxHeight: "85vh",
    objectFit: "contain",
    borderRadius: "var(--radius-xl)",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
  },
  lightboxNav: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(10px)",
    color: "white",
    border: "none",
    width: "60px",
    height: "60px",
    borderRadius: "var(--radius-full)",
    fontSize: "var(--text-5xl)",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "300",
    zIndex: 10001,
  },
  lightboxNavPrev: {
    left: "var(--space-6)",
  },
  lightboxNavNext: {
    right: "var(--space-6)",
  },
  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0, 0, 0, 0.7)",
    backdropFilter: "blur(8px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10000,
    padding: "var(--space-4)",
  },
  modal: {
    background: "white",
    borderRadius: "var(--radius-2xl)",
    width: "100%",
    maxWidth: "500px",
    boxShadow: "var(--shadow-2xl)",
    overflow: "hidden",
    animation: "slideUp 0.3s ease-out",
  },
  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "var(--space-6)",
    borderBottom: "1px solid var(--gray-200)",
  },
  modalTitle: {
    fontSize: "var(--text-2xl)",
    fontWeight: "700",
    color: "var(--gray-900)",
    margin: 0,
  },
  modalCloseButton: {
    background: "transparent",
    border: "none",
    color: "var(--gray-500)",
    fontSize: "var(--text-2xl)",
    cursor: "pointer",
    padding: "var(--space-2)",
    borderRadius: "var(--radius-md)",
    transition: "all 0.2s ease",
    width: "36px",
    height: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalBody: {
    padding: "var(--space-6)",
  },
  inputGroup: {
    marginBottom: "var(--space-5)",
  },
  label: {
    display: "block",
    fontSize: "var(--text-sm)",
    fontWeight: "600",
    color: "var(--gray-700)",
    marginBottom: "var(--space-2)",
  },
  input: {
    width: "100%",
    padding: "var(--space-3)",
    borderRadius: "var(--radius-lg)",
    border: "2px solid var(--gray-200)",
    fontSize: "var(--text-base)",
    transition: "all 0.2s ease",
    outline: "none",
  },
  fileInputWrapper: {
    position: "relative",
    cursor: "pointer",
  },
  fileInput: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0,
    cursor: "pointer",
  },
  fileInputLabel: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "var(--space-2)",
    padding: "var(--space-8)",
    border: "2px dashed var(--gray-300)",
    borderRadius: "var(--radius-lg)",
    background: "var(--gray-50)",
    transition: "all 0.2s ease",
    color: "var(--gray-600)",
    fontSize: "var(--text-sm)",
  },
  modalFooter: {
    padding: "var(--space-6)",
    borderTop: "1px solid var(--gray-200)",
    background: "var(--gray-50)",
  },
  uploadButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-2)",
    background: "var(--gradient-primary)",
    color: "white",
    border: "none",
    padding: "var(--space-4)",
    borderRadius: "var(--radius-lg)",
    width: "100%",
    fontSize: "var(--text-base)",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "var(--shadow-md)",
  },
};

// Add keyframe animation
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `;
  document.head.appendChild(styleSheet);
}

export default GalleryPage;
