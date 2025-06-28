import React, { useState } from "react";
import img1 from "../../assets/images/village/village1.jpg";
import img2 from "../../assets/images/village/village2.jpg";
import img3 from "../../assets/images/village/village3.jpg";
import Footer from "../Footer";

const categories = ["All", "Nature", "People", "Culture", "Festivals"];

const GalleryPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const images = [
    { src: img2, category: "Nature" },
    { src: img3, category: "People" },
    { src: img1, category: "Culture" },
    { src: img1, category: "Festivals" },
    { src: img2, category: "Nature" },
    { src: img1, category: "People" },
    { src: img2, category: "Nature" },
    { src: img3, category: "People" },
    { src: img1, category: "Culture" },
    { src: img3, category: "Festivals" },
    { src: img2, category: "Nature" },
    { src: img1, category: "People" },
  ];

  const filteredImages =
    selectedFilter === "All"
      ? images
      : images.filter((img) => img.category === selectedFilter);

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>📸 Explore the Gallery</h2>

      {/* Filter */}
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
          <div key={idx} style={styles.card}>
            <img src={img.src} alt={`img-${idx}`} style={styles.image} />
            <p style={styles.caption}>{img.category}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  wrapper: {
    padding: "40px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
    fontFamily: "'Segoe UI', sans-serif",
  },
  heading: {
    fontSize: "28px",
    textAlign: "center",
    marginBottom: "30px",
  },
  filterContainer: {
    textAlign: "center",
    marginBottom: "30px",
  },
  select: {
    padding: "10px 20px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.3s",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    display: "block",
  },
  caption: {
    padding: "10px",
    fontSize: "14px",
    color: "#333",
    textAlign: "center",
  },
};

export default GalleryPage;
