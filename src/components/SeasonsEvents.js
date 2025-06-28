import React from "react";
import img from "../assets/images/home.jpg";
import monsoon from "../assets/images/village/village3.jpg";
import winter from "../assets/images/village/village5.jpg";

const events = [
  {
    title: "Winter Wonderland",
    caption: "A gentle snowfall blankets the village",
    image: winter,
  },
  {
    title: "Monsoon Views",
    caption: "Rain-washed Road and Mountains.",
    image: monsoon,
  },
  {
    title: "Diwali Nights",
    caption: "Lights and diyas decorate every corner.",
    image: img,
  },
  {
    title: "Holi Vibes",
    caption: "Colors, fun and street celebrations.",
    image: img,
  },
];

const SeasonsEvents = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Events & Seasonal Beauty</h2>
      <div style={styles.scrollRow}>
        {events.map((e, idx) => (
          <div key={idx} style={styles.card}>
            <div style={styles.imageWrapper}>
              <img src={e.image} alt={e.title} style={styles.image} />
            </div>
            <div style={styles.content}>
              <h3 style={styles.title}>{e.title}</h3>
              <p style={styles.caption}>{e.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    background: "#f7f9fc",
    padding: "60px 20px",
  },
  heading: {
    textAlign: "center",
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "30px",
    color: "#1a1a1a",
  },
  scrollRow: {
    display: "flex",
    overflowX: "auto",
    gap: "24px",
    paddingBottom: "10px",
    maxWidth: "1200px",
    margin: "0 auto",
    scrollBehavior: "smooth",
  },
  card: {
    minWidth: "280px",
    maxWidth: "300px",
    background: "linear-gradient(to bottom, #ffffff, #eef1f7)",
    borderRadius: "16px",
    boxShadow: "0 8px 18px rgba(0,0,0,0.07)",
    overflow: "hidden",
    flexShrink: 0,
    transition: "transform 0.3s ease",
  },
  imageWrapper: {
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    transition: "transform 0.4s ease-in-out",
  },
  content: {
    padding: "18px",
  },
  title: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "8px",
    color: "#222",
  },
  caption: {
    fontSize: "14px",
    color: "#666",
    lineHeight: 1.5,
  },
};

// Optional image zoom effect using JS (for pure React inline style hover alternative)
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll("img");
  cards.forEach((img) => {
    img.addEventListener("mouseenter", () => {
      img.style.transform = "scale(1.05)";
    });
    img.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
    });
  });
});

export default SeasonsEvents;
