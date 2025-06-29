import React from "react";
import img1 from "../assets/images/village/haryalidevi.jpg_large";
import img2 from "../assets/images/home.jpg";
import img3 from "../assets/images/home.jpg";
import img4 from "../assets/images/village/temple.png";

const locations = [
  {
    title: "Haryali Devi",
    desc: "A historic temple of Haryali Devi, a goddess of nature.",
    img: img1,
  },
  {
    title: "Narshingh Temple",
    desc: "A temple of Narshingh, a form of Lord Vishnu.",
    img: img2,
  },
  {
    title: "Bugani Market",
    desc: "Local market for fresh produce and daily needs.",
    img: img3,
  },
  {
    title: "Padmavati Temple",
    desc: "A serene temple dedicated to Goddess Padmavati.",
    img: img4,
  },
];

const TopLocations = () => {
  return (
    <section style={styles.section}>
      <div style={styles.wrapper}>
        <h2 style={styles.heading}>Top Locations in Maikoti Village</h2>
        <div style={styles.grid}>
          {locations.map((loc, idx) => (
            <div key={idx} style={styles.card}>
              <div style={styles.imageWrapper}>
                <img src={loc.img} alt={loc.title} style={styles.image} />
              </div>
              <div style={styles.content}>
                <h3 style={styles.title}>{loc.title}</h3>
                <p style={styles.desc}>{loc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: "#f0f4f8",
    padding: "60px 0",
    width: "100%",
  },
  wrapper: {
    maxWidth: "1500px",
    margin: "0 auto",
    padding: "0 20px",
  },
  heading: {
    textAlign: "center",
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "40px",
    color: "#1a1a1a",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "30px",
  },
  card: {
    background: "linear-gradient(145deg, #ffffff, #e6e6e6)",
    borderRadius: "16px",
    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  },
  imageWrapper: {
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },
  content: {
    padding: "20px",
    textAlign: "center",
  },
  title: {
    fontSize: "22px",
    fontWeight: "600",
    color: "#0c2340",
    marginBottom: "10px",
  },
  desc: {
    fontSize: "14px",
    color: "#555",
    lineHeight: 1.5,
  },
};

export default TopLocations;
