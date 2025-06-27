import React from "react";
import img1 from "../assets/images/home.jpg";
import img2 from "../assets/images/home.jpg";
import img3 from "../assets/images/home.jpg";
import img4 from "../assets/images/home.jpg";
import img5 from "../assets/images/home.jpg";
import img6 from "../assets/images/home.jpg";

const images = [img1, img2, img3, img4, img5, img6];

const FeaturedMoments = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Featured Moments</h2>
      <div style={styles.gallery}>
        {images.map((src, idx) => (
          <div
            key={idx}
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
    backgroundColor: "#ffffff",
    padding: "60px 20px",
  },
  heading: {
    textAlign: "center",
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "40px",
    color: "#222",
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
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
};

export default FeaturedMoments;
