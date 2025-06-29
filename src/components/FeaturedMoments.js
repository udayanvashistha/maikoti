import React from "react";
import img1 from "../assets/images/village/village1.jpg";
import img2 from "../assets/images/village/village8.png";
import img3 from "../assets/images/village/village3.jpg";
import img4 from "../assets/images/village/waterpool2.png";
import img5 from "../assets/images/village/village5.jpg";
import img6 from "../assets/images/village/villageroad.png";

const images = [img1, img2, img3, img4, img5, img6];

const FeaturedMoments = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Featured Moments</h2>
      <div style={styles.gallery}>
        {images.map((src, idx) => (
          <div
            key={idx}
            className="galleryCard"
            style={{ ...styles.card, height: idx % 2 === 0 ? 250 : 350 }}
          >
            <img src={src} alt={`Moment ${idx + 1}`} style={styles.image} />
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    background: "linear-gradient(to right, #fef0e3, #fdf7ff)", // gradient bg
    padding: "60px 20px",
  },
  heading: {
    textAlign: "center",
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "40px",
    color: "#1a1a1a",
  },
  gallery: {
    columnCount: 3,
    columnGap: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  card: {
    breakInside: "avoid",
    marginBottom: "20px",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 12px 28px rgba(0, 0, 0, 0.08)",
    border: "1px solid #f0e6ff",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.3s ease",
  },
};

// Add hover effect globally
const hoverStyle = `
  .galleryCard:hover img {
    transform: scale(1.05);
  }
`;
const styleTag = document.createElement("style");
styleTag.textContent = hoverStyle;
document.head.appendChild(styleTag);

export default FeaturedMoments;
