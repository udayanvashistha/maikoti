import React from "react";
import news1 from "../assets/images/village/village1.jpg"; // Use your own news images later
import news2 from "../assets/images/village/village2.jpg";
import news3 from "../assets/images/village/village3.jpg";

const newsItems = [
  {
    title: "News -1",
    desc: "This is a placeholder for upcoming village news and announcements.",
    image: news1,
  },
  {
    title: "News -2",
    desc: "News headlines related to cultural events and activities will appear here soon.",
    image: news2,
  },
  {
    title: "News-3",
    desc: "Stay tuned for updates about village development projects and initiatives.",
    image: news3,
  },
];

const NewsSection = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>📰 News & Updates</h2>
      <p style={styles.subtext}>
        Stay informed with the latest news, events, and developments from
        Maikoti.
      </p>
      <div style={styles.grid}>
        {newsItems.map((news, idx) => (
          <div key={idx} style={styles.card}>
            <img src={news.image} alt={news.title} style={styles.image} />
            <div style={styles.content}>
              <h3 style={styles.title}>{news.title}</h3>
              <p style={styles.desc}>{news.desc}</p>

              <button style={styles.button}>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    background: "linear-gradient(to right, #fef0e3, #fdf7ff)",
    padding: "60px 20px",
    textAlign: "center",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#1a1a1a",
  },
  subtext: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  card: {
    background: "#fff",
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.06)",
    overflow: "hidden",
    transition: "transform 0.3s ease",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },
  content: {
    padding: "20px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#333",
  },
  desc: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "15px",
  },
  button: {
    background: "#c94b31",
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },
};

export default NewsSection;
