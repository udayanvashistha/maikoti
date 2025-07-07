import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/images/village/village1.jpg";
import img2 from "../../assets/images/village/village2.jpg";
import img3 from "../../assets/images/village/village3.jpg";
import Footer from "../Footer";

const categories = ["All", "Nature", "People", "Culture", "Festivals"];

const GalleryPage = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <div style={styles.wrapper}>
      {/* Header Bar */}
      <div style={styles.header}>
        <button onClick={() => navigate(-1)} style={styles.backButton}>
          ←
        </button>
        <h2 style={styles.title}>📸 Explore the Gallery</h2>
        <button onClick={() => setModalOpen(true)} style={styles.addButton}>
          ＋
        </button>
      </div>

      {/* Filter Dropdown */}
      <div style={styles.filterContainer}>
        <select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
          style={styles.select}
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Image Grid */}
      <div style={styles.grid}>
        {filteredImages.map((img, idx) => (
          <div key={idx} style={styles.card} onClick={() => openLightbox(idx)}>
            <img src={img.src} alt={`img-${idx}`} style={styles.image} />
            <p style={styles.caption}>{img.category}</p>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div style={styles.lightbox}>
          <span style={styles.close} onClick={() => setLightboxOpen(false)}>
            &times;
          </span>
          <img
            src={filteredImages[currentIndex].src}
            alt="Full View"
            style={styles.lightboxImage}
          />
        </div>
      )}

      {/* Modal */}
      {modalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h3>Add New Image</h3>
            <input type="text" placeholder="User ID" style={styles.input} />
            <input type="email" placeholder="Email" style={styles.input} />
            <select style={styles.input}>
              {categories.slice(1).map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
            <button style={styles.uploadButton}>Upload Image</button>
            <button
              style={styles.closeModalButton}
              onClick={() => setModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  wrapper: {
    padding: "20px",
    fontFamily: "'Segoe UI', sans-serif",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  backButton: {
    background: "#2e2f46",
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "18px",
  },
  addButton: {
    background: "#c94b31",
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "18px",
  },
  title: {
    fontSize: "22px",
    fontWeight: "600",
    color: "#333",
  },
  filterContainer: {
    textAlign: "center",
    marginBottom: "20px",
  },
  select: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
  },
  card: {
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },
  caption: {
    textAlign: "center",
    padding: "10px",
    fontSize: "14px",
  },
  lightbox: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.9)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
    flexDirection: "column",
  },
  lightboxImage: {
    maxWidth: "90%",
    maxHeight: "80vh",
    borderRadius: "10px",
  },
  close: {
    color: "#fff",
    fontSize: "32px",
    position: "absolute",
    top: "20px",
    right: "30px",
    cursor: "pointer",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  modal: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    width: "320px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  uploadButton: {
    background: "#2e2f46",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "8px",
    width: "100%",
    marginBottom: "10px",
    cursor: "pointer",
  },
  closeModalButton: {
    background: "transparent",
    border: "none",
    color: "#c94b31",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default GalleryPage;
