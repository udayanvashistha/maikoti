import React from "react";

const videos = [
  {
    title: "Festivals and Celebrations",
    url: "https://www.youtube.com/embed/LQRIS38ZUGA",
  },
  {
    title: "Cultural Tour of Maikoti",
    url: "https://www.youtube.com/embed/vQZtcpZ6g3A",
  },
  {
    title: "Life in Maikoti Village",
    url: "https://www.youtube.com/embed/2q9y2g214nc",
  },
  {
    title: "Maikoti,Listed in top Places of rudraprayag",
    url: "https://www.youtube.com/embed/FMLVMUIH2YA",
  },
];

const VillageDocumentary = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Maikoti Through the Lens</h2>
      <p style={styles.subtext}>
        Explore stories, traditions, and moments from the heart of the
        Himalayas.
      </p>
      <div style={styles.grid}>
        {videos.map((vid, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.videoWrapper}>
              <iframe
                src={vid.url}
                title={vid.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={styles.iframe}
              ></iframe>
            </div>
            <div style={styles.caption}>
              <h4 style={styles.title}>{vid.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "60px 20px",
    background: "linear-gradient(135deg, #2e2f46, #c94b31)",
    textAlign: "center",
  },
  heading: {
    fontSize: "34px",
    fontWeight: "700",
    color: "#fff",
    marginBottom: "10px",
  },
  subtext: {
    fontSize: "16px",
    color: "#e0e0e0",
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "24px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  card: {
    background: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    transition: "transform 0.3s ease",
  },
  videoWrapper: {
    position: "relative",
    paddingTop: "56.25%", // 16:9 aspect ratio
    overflow: "hidden",
  },
  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "none",
  },
  caption: {
    padding: "15px 20px",
  },
  title: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#222",
    margin: 0,
  },
};

export default VillageDocumentary;
